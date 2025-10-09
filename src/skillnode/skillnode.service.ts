import {
	Injectable,
	NotFoundException,
	ForbiddenException,
	InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, SkillNode, Post } from '@prisma/client';
type User = any;
import { CreateSkillNodeDto, UpdateSkillNodeDto } from './dto/skillnode.dto';

@Injectable()
export class SkillNodeService {
	constructor(private prisma: PrismaService) {}

	async getSkillTreeNodeById(id: string, user?: User) {
		try {
			const node = await this.prisma.skillNode.findUnique({
				where: { id },
				include: {
					skillTree: {
						include: {
							creator: { select: { id: true, name: true, email: true } },
							tags: true,
						},
					},
					parentNode: true,
					childNode: true,
					post: true,
					skillNodeUser: user ? { where: { userId: user.id } } : false,
				},
			});
			if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
			return node;
		} catch {
			throw new InternalServerErrorException('Failed to fetch skill node');
		}
	}

	async createSkillNode(dto: CreateSkillNodeDto, userId: string) {
		try {
			// Check if user is admin of the skilltree
			const skillTreeUser = await this.prisma.skillTreeUser.findUnique({
				where: { skillTreeId_userId: { skillTreeId: dto.skillTreeId, userId } },
			});
			if (!skillTreeUser || skillTreeUser.role !== 'ADMIN') {
				throw new ForbiddenException('Only admins can create skill nodes');
			}

			const { parentNodeId, ...nodeData } = dto;

			// Create the skill node
			const node = await this.prisma.skillNode.create({
				data: nodeData,
				include: {
					skillTree: true,
					parentNode: true,
					childNode: true,
					post: true,
				},
			});

			// If there's a parent node, update the relationship after creation
			if (parentNodeId) {
				await this.prisma.skillNode.update({
					where: { id: node.id },
					data: {
						parentNode: {
							connect: { id: parentNodeId },
						},
					},
				});

				// Fetch the updated node with relationships
				return await this.prisma.skillNode.findUnique({
					where: { id: node.id },
					include: {
						skillTree: true,
						parentNode: true,
						childNode: true,
						post: true,
					},
				});
			}

			return node;
		} catch (error) {
			console.error('Error creating skill node:', error);
			throw new InternalServerErrorException('Failed to create skill node');
		}
	}

	async getAllSkillNodePosts(id: string, user?: User): Promise<Post[]> {
		try {
			const node = await this.prisma.skillNode.findUnique({
				where: { id },
				include: { post: { include: { likes: true, feedback: true } } },
			});
			if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
			// Optionally filter posts based on user membership/permissions
			return node.post;
		} catch {
			throw new InternalServerErrorException(
				'Failed to fetch skill node posts',
			);
		}
	}

	async updateSkillNode(id: string, dto: UpdateSkillNodeDto, userId: string) {
		try {
			// Check if user is admin of the skilltree
			const node = await this.prisma.skillNode.findUnique({ where: { id } });
			if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
			if (!node.skillTreeId)
				throw new ForbiddenException(
					'SkillNode is not attached to a SkillTree',
				);
			const skillTreeUser = await this.prisma.skillTreeUser.findUnique({
				where: {
					skillTreeId_userId: { skillTreeId: node.skillTreeId, userId },
				},
			});
			if (!skillTreeUser || skillTreeUser.role !== 'ADMIN') {
				throw new ForbiddenException('Only admins can update skill nodes');
			}
			const { parentNodeId, ...rest } = dto;
			const updated = await this.prisma.skillNode.update({
				where: { id },
				data: {
					...rest,
					parentNode: parentNodeId
						? { connect: { id: parentNodeId } }
						: undefined,
				},
				include: {
					skillTree: true,
					parentNode: true,
					childNode: true,
					post: true,
				},
			});
			return updated;
		} catch {
			throw new InternalServerErrorException('Failed to update skill node');
		}
	}

	async deleteSkillNode(id: string, userId: string) {
		try {
			const node = await this.prisma.skillNode.findUnique({ where: { id } });
			if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
			if (!node.skillTreeId)
				throw new ForbiddenException(
					'SkillNode is not attached to a SkillTree',
				);
			const skillTreeUser = await this.prisma.skillTreeUser.findUnique({
				where: {
					skillTreeId_userId: { skillTreeId: node.skillTreeId, userId },
				},
			});
			if (!skillTreeUser || skillTreeUser.role !== 'ADMIN') {
				throw new ForbiddenException('Only admins can delete skill nodes');
			}
			await this.prisma.skillNode.delete({ where: { id } });
			return { success: true };
		} catch {
			throw new InternalServerErrorException('Failed to delete skill node');
		}
	}
}
