import {
	Injectable,
	NotFoundException,
	InternalServerErrorException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto, UserStatsDto } from './dto';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getMe(userId: string): Promise<Omit<User, 'hash'>> {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		// Remove hash from response
		const { hash: _, ...userWithoutHash } = user;
		return userWithoutHash;
	}

	async updateProfile(
		userId: string,
		updateData: UpdateUserDto,
	): Promise<Omit<User, 'hash'>> {
		try {
			const updatePayload: any = {};

			if (updateData.name !== undefined) updatePayload.name = updateData.name;
			if (updateData.pfp !== undefined) updatePayload.pfp = updateData.pfp;
			if (updateData.dateOfBirth !== undefined) {
				updatePayload.dateOfBirth = new Date(updateData.dateOfBirth);
			}

			const user = await this.prisma.user.update({
				where: { id: userId },
				data: updatePayload,
			});

			// Remove hash from response
			const { hash: _, ...userWithoutHash } = user;
			return userWithoutHash;
		} catch (error) {
			if (error.code === 'P2025') {
				throw new NotFoundException('User not found');
			}
			throw new InternalServerErrorException('Failed to update user profile');
		}
	}

	async getUserById(id: string): Promise<Omit<User, 'hash' | 'email'>> {
		const user = await this.prisma.user.findUnique({
			where: { id },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const { hash: _, email: __, ...publicUser } = user;
		return publicUser;
	}

	async getAllUsers(): Promise<Omit<User, 'hash' | 'email'>[]> {
		try {
			const users = await this.prisma.user.findMany({
				orderBy: [{ xpPoint: 'desc' }, { name: 'asc' }],
			});

			// Remove sensitive information
			return users.map((user) => {
				const { hash: _, email: __, ...publicUser } = user;
				return publicUser;
			});
		} catch (error) {
			throw new InternalServerErrorException('Failed to fetch users');
		}
	}

	async getUserStats(userId: string) {
		try {
			const user = await this.prisma.user.findUnique({
				where: { id: userId },
				include: {
					skillTrees: true,
					skillTreeUser: true,
					post: true,
					winnerOf: true,
					skillNodeUser: true,
				},
			});

			if (!user) {
				throw new NotFoundException('User not found');
			}

			const skillTreesJoined = user.skillTreeUser.map(
				(skillTreeUser) => skillTreeUser.skillTreeId,
			);

			return {
				skillTreesJoined: skillTreesJoined.map((id) => {
					const skillTree = this.prisma.skillTree.findUnique({
						where: { id },
					});
					return skillTree;
				}),
				skillTreesCreated: user.skillTrees,
			};
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch user statistics');
		}
	}

	async getUserFollowing(
		userId: string,
	): Promise<Omit<User, 'hash' | 'email'>[]> {
		try {
			const user = await this.prisma.user.findUnique({
				where: { id: userId },
			});
			if (!user) {
				throw new NotFoundException('User not found');
			}

			const followingRelations = await this.prisma.userFollow.findMany({
				where: { followerId: userId },
				include: { following: true },
			});

			return followingRelations.map((relation) => {
				const { hash: _, email: __, ...publicUser } = relation.following;
				return publicUser;
			});
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch following users');
		}
	}

	async getUserFollowers(
		userId: string,
	): Promise<Omit<User, 'hash' | 'email'>[]> {
		try {
			const user = await this.prisma.user.findUnique({
				where: { id: userId },
			});
			if (!user) {
				throw new NotFoundException('User not found');
			}

			const followerRelations = await this.prisma.userFollow.findMany({
				where: { followingId: userId },
				include: { follower: true },
			});
			return followerRelations.map((relation) => {
				const { hash: _, email: __, ...publicUser } = relation.follower;
				return publicUser;
			});
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch followers');
		}
	}

	async followUser(id: string, user: User) {
		try {
			await this.prisma.userFollow.create({
				data: {
					followerId: user.id,
					followingId: id,
				},
			});
		} catch (error) {
			if (error.code === 'P2025') {
				throw new NotFoundException('User not found');
			}
			throw new InternalServerErrorException('Failed to follow user');
		}
	}

	async unfollowUser(id: string, user: User) {
		try {
			await this.prisma.userFollow.delete({
				where: {
					followerId_followingId: {
						followerId: user.id,
						followingId: id,
					},
				},
			});
		} catch (error) {
			if (error.code === 'P2025') {
				throw new NotFoundException('User not found');
			}
			throw new InternalServerErrorException('Failed to unfollow user');
		}
	}
}
