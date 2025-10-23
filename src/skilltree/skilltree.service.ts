import {
	Injectable,
	NotFoundException,
	ForbiddenException,
	ConflictException,
	InternalServerErrorException,
} from '@nestjs/common';
import { User, Role, VerificationStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
	CreateSkillTreeDto,
	UpdateSkillTreeDto,
	UpdateSkillTreeUserDto,
} from './dto';

@Injectable()
export class SkilltreeService {
	constructor(private readonly prismaService: PrismaService) {}

	async membershipStatus(skillTreeId: string, user: User) {
		try {
			const membership = await this.prismaService.skillTreeUser.findUnique({
				where: { skillTreeId_userId: { skillTreeId, userId: user.id } },
			});
			if (!membership) return false;

			return {
				member: membership.role === 'MEMBER',
				admin: membership.role === 'ADMIN',
			};
		} catch {
			throw new InternalServerErrorException(
				'Failed to verify skill tree membership',
			);
		}
	}

	async getAllSkillTrees(user?: User) {
		try {
			const skillTrees = await this.prismaService.skillTree.findMany({
				include: {
					creator: {
						select: { id: true, name: true, email: true },
					},
					skillNodes: {
						select: {
							id: true,
							name: true,
							description: true,
							xpPoint: true,
						},
					},
					skillTreeUser: user
						? {
								select: {
									user: {
										select: {
											id: true,
											name: true,
										},
									},
									role: true,
									verificationStatus: true,
								},
							}
						: false,
					_count: { select: { skillNodes: true, skillTreeUser: true } },
				},
			});

			const filteredSkillTrees = skillTrees.filter((skillTree) => {
				if (!user) return false;
				const userMembership = skillTree.skillTreeUser[0];
				return (
					userMembership &&
					userMembership.verificationStatus === VerificationStatus.VERIFIED
				);
			});

			return filteredSkillTrees;
		} catch {
			throw new InternalServerErrorException('Failed to fetch skill trees');
		}
	}

	async getSkillTreeById(id: string, user?: User) {
		try {
			const skillTree = await this.prismaService.skillTree.findUnique({
				where: { id },
				include: {
					creator: {
						select: { id: true, name: true, email: true },
					},
					skillNodes: {
						include: {
							parentNode: { select: { id: true, name: true } },
							childNode: { select: { id: true, name: true } },
							skillNodeUser: user
								? {
										where: { userId: user.id },
										select: { xpPoint: true },
									}
								: false,
						},
					},
					skillTreeUser: user
						? {
								where: { userId: user.id },
								select: { role: true, verificationStatus: true },
							}
						: {
								select: {
									userId: true,
									role: true,
									verificationStatus: true,
									user: { select: { id: true, name: true } },
								},
							},
					_count: { select: { skillNodes: true, skillTreeUser: true } },
				},
			});

			if (!skillTree) throw new NotFoundException('Skill tree not found');

			if (user) {
				const userMembership = Array.isArray(skillTree.skillTreeUser)
					? skillTree.skillTreeUser.find((stu: any) => stu.userId === user.id)
					: skillTree.skillTreeUser[0];
			}

			return skillTree;
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ForbiddenException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch skill tree');
		}
	}

	async createSkillTree(
		createSkillTreeDto: CreateSkillTreeDto,
		creatorId: string,
	) {
		try {
			const { tagIds, ...skillTreeData } = createSkillTreeDto;
			const skillTree = await this.prismaService.skillTree.create({
				data: {
					...skillTreeData,
					creatorId,
				},
				include: {
					creator: { select: { id: true, name: true, email: true } },
				},
			});

			await this.prismaService.skillTreeUser.create({
				data: {
					skillTreeId: skillTree.id,
					userId: creatorId,
					role: Role.ADMIN,
					verificationStatus: VerificationStatus.VERIFIED,
				},
			});

			return skillTree;
		} catch {
			throw new InternalServerErrorException('Failed to create skill tree');
		}
	}

	async updateSkillTree(
		id: string,
		updateSkillTreeDto: UpdateSkillTreeDto,
		userId: string,
	) {
		try {
			const userMembership = await this.prismaService.skillTreeUser.findUnique({
				where: { skillTreeId_userId: { skillTreeId: id, userId } },
			});

			if (!userMembership || userMembership.role !== Role.ADMIN) {
				throw new ForbiddenException(
					'You must be an admin to update this skill tree',
				);
			}

			const { tagIds, ...updateData } = updateSkillTreeDto;
			return this.prismaService.skillTree.update({
				where: { id },
				data: {
					...updateData,
				},
				include: {
					creator: { select: { id: true, name: true, email: true } },
				},
			});
		} catch (error) {
			if (error instanceof ForbiddenException) throw error;
			if (error.code === 'P2025') {
				throw new NotFoundException('Skill tree not found');
			}
			throw new InternalServerErrorException('Failed to update skill tree');
		}
	}

	async deleteSkillTree(id: string, userId: string) {
		try {
			const userMembership = await this.prismaService.skillTreeUser.findUnique({
				where: { skillTreeId_userId: { skillTreeId: id, userId } },
			});

			if (!userMembership || userMembership.role !== Role.ADMIN) {
				throw new ForbiddenException(
					'You must be an admin to delete this skill tree',
				);
			}

			await this.prismaService.$transaction(async (prisma) => {
				await prisma.feedback.deleteMany({
					where: { post: { skillNode: { skillTreeId: id } } },
				});
				await prisma.post.deleteMany({
					where: { skillNode: { skillTreeId: id } },
				});
				await prisma.skillNodeUser.deleteMany({
					where: { skillNode: { skillTreeId: id } },
				});
				await prisma.skillNode.deleteMany({
					where: { skillTreeId: id },
				});
				await prisma.skillTreeUser.deleteMany({
					where: { skillTreeId: id },
				});
				await prisma.skillTree.delete({ where: { id } });
			});

			return { message: 'Skill tree deleted successfully' };
		} catch (error) {
			if (error instanceof ForbiddenException) throw error;
			if (error.code === 'P2025') {
				throw new NotFoundException('Skill tree not found');
			}
			throw new InternalServerErrorException('Failed to delete skill tree');
		}
	}

	async joinSkillTree(skillTreeId: string, userId: string) {
		try {
			const skillTree = await this.prismaService.skillTree.findUnique({
				where: { id: skillTreeId },
			});
			if (!skillTree) throw new NotFoundException('Skill tree not found');

			const existingMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId } },
				});
			if (existingMembership) {
				throw new ConflictException(
					'You are already a member of this skill tree',
				);
			}

			return this.prismaService.skillTreeUser.create({
				data: {
					skillTreeId,
					userId,
					role: Role.MEMBER,
				},
				include: {
					skillTree: { select: { id: true, name: true } },
					user: { select: { id: true, name: true, email: true } },
				},
			});
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ConflictException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to join skill tree');
		}
	}

	async leaveSkillTree(skillTreeId: string, userId: string) {
		try {
			const membership = await this.prismaService.skillTreeUser.findUnique({
				where: { skillTreeId_userId: { skillTreeId, userId } },
				include: { skillTree: { select: { creatorId: true } } },
			});
			if (!membership) {
				throw new NotFoundException('You are not a member of this skill tree');
			}
			if (membership.skillTree.creatorId === userId) {
				throw new ForbiddenException(
					'Creator cannot leave their own skill tree',
				);
			}
			await this.prismaService.skillTreeUser.delete({
				where: { skillTreeId_userId: { skillTreeId, userId } },
			});
			return { message: 'Successfully left the skill tree' };
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ForbiddenException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to leave skill tree');
		}
	}

	async getSkillTreeMembers(skillTreeId: string, requesterId: string) {
		try {
			const requesterMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId: requesterId } },
				});
			if (!requesterMembership) {
				throw new ForbiddenException(
					'You must be a member to view skill tree members',
				);
			}
			return this.prismaService.skillTreeUser.findMany({
				where: { skillTreeId },
				include: {
					user: {
						select: { id: true, name: true, email: true, xpPoint: true },
					},
				},
				orderBy: [{ role: 'asc' }, { verificationStatus: 'asc' }],
			});
		} catch (error) {
			if (error instanceof ForbiddenException) throw error;
			throw new InternalServerErrorException(
				'Failed to fetch skill tree members',
			);
		}
	}

	async updateSkillTreeUser(
		skillTreeId: string,
		targetUserId: string,
		updateDto: UpdateSkillTreeUserDto,
		requesterId: string,
	) {
		try {
			const requesterMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId: requesterId } },
				});
			if (!requesterMembership || requesterMembership.role !== Role.ADMIN) {
				throw new ForbiddenException(
					'You must be an admin to update user roles',
				);
			}

			const targetMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId: targetUserId } },
					include: { skillTree: { select: { creatorId: true } } },
				});
			if (!targetMembership) {
				throw new NotFoundException('User is not a member of this skill tree');
			}
			if (
				targetMembership.skillTree.creatorId === targetUserId &&
				updateDto.role === Role.MEMBER
			) {
				throw new ForbiddenException(
					'Cannot demote the creator of the skill tree',
				);
			}

			return this.prismaService.skillTreeUser.update({
				where: { skillTreeId_userId: { skillTreeId, userId: targetUserId } },
				data: updateDto,
				include: {
					user: { select: { id: true, name: true, email: true } },
				},
			});
		} catch (error) {
			if (
				error instanceof ForbiddenException ||
				error instanceof NotFoundException
			) {
				throw error;
			}
			throw new InternalServerErrorException(
				'Failed to update user membership',
			);
		}
	}

	async removeUserFromSkillTree(
		skillTreeId: string,
		targetUserId: string,
		requesterId: string,
	) {
		try {
			const requesterMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId: requesterId } },
				});
			if (!requesterMembership || requesterMembership.role !== Role.ADMIN) {
				throw new ForbiddenException('You must be an admin to remove users');
			}

			const targetMembership =
				await this.prismaService.skillTreeUser.findUnique({
					where: { skillTreeId_userId: { skillTreeId, userId: targetUserId } },
					include: { skillTree: { select: { creatorId: true } } },
				});
			if (!targetMembership) {
				throw new NotFoundException('User is not a member of this skill tree');
			}
			if (targetMembership.skillTree.creatorId === targetUserId) {
				throw new ForbiddenException(
					'Cannot remove the creator of the skill tree',
				);
			}

			await this.prismaService.skillTreeUser.delete({
				where: { skillTreeId_userId: { skillTreeId, userId: targetUserId } },
			});
			return { message: 'User removed from skill tree successfully' };
		} catch (error) {
			if (
				error instanceof ForbiddenException ||
				error instanceof NotFoundException
			) {
				throw error;
			}
			throw new InternalServerErrorException(
				'Failed to remove user from skill tree',
			);
		}
	}

	async getUserSkillTrees(userId: string) {
		try {
			return this.prismaService.skillTreeUser.findMany({
				where: { userId },
				include: {
					skillTree: {
						include: {
							creator: { select: { id: true, name: true, email: true } },
							_count: { select: { skillNodes: true, skillTreeUser: true } },
						},
					},
				},
				orderBy: [{ role: 'asc' }, { verificationStatus: 'asc' }],
			});
		} catch {
			throw new InternalServerErrorException(
				'Failed to fetch user skill trees',
			);
		}
	}

	async getUserSkillTreeInverseById(userId: string) {
		try {
			const allSkillTrees = await this.prismaService.skillTree.findMany({
				include: {
					creator: { select: { id: true, name: true, email: true } },
					_count: { select: { skillNodes: true, skillTreeUser: true } },
				},
			});
			const skillTreeMemberOf = await this.prismaService.skillTreeUser.findMany(
				{
					where: { userId },
					include: {
						skillTree: {
							include: {
								creator: { select: { id: true, name: true, email: true } },
								_count: { select: { skillNodes: true, skillTreeUser: true } },
							},
						},
					},
					orderBy: [{ role: 'asc' }, { verificationStatus: 'asc' }],
				},
			);

			const setDifference = (a: any[], b: any[]) =>
				a.filter((item) => !b.some((bItem) => bItem.id === item.id));
			const userNotMemberOf = setDifference(
				allSkillTrees,
				skillTreeMemberOf.map((stm) => stm.skillTree),
			);

			console.log({
				allSkillTrees: allSkillTrees.length,
				skillTreeMemberOf: skillTreeMemberOf.length,
				userNotMemberOf: userNotMemberOf.length,
			});

			return userNotMemberOf;
		} catch {
			throw new InternalServerErrorException(
				'Failed to fetch user skill trees',
			);
		}
	}
}
