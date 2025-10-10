import {
	ConflictException,
	ForbiddenException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Injectable()
export class PostService {
	constructor(private readonly prismaService: PrismaService) {}

	async getAllPosts(user?: User) {
		try {
			const posts = await this.prismaService.post.findMany({
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					likes: {
						select: { id: true, name: true },
					},
					feedback: {
						include: {
							verifier: {
								select: { id: true, name: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
				orderBy: { createdAt: 'desc' },
			});

			// Add user-specific information if authenticated
			if (user) {
				return posts.map((post) => ({
					...post,
					isLiked: post.likes.some((like) => like.id === user.id),
				}));
			}

			return posts;
		} catch {
			throw new InternalServerErrorException('Failed to fetch posts');
		}
	}

	async getPostById(id: string, user?: User) {
		try {
			const post = await this.prismaService.post.findUnique({
				where: { id },
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					likes: {
						select: { id: true, name: true, email: true },
					},
					feedback: {
						include: {
							verifier: {
								select: { id: true, name: true, email: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
			});

			if (!post) {
				throw new NotFoundException('Post not found');
			}

			// Add user-specific information if authenticated
			if (user) {
				return {
					...post,
					isLiked: post.likes.some((like) => like.id === user.id),
				};
			}

			return post;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch post');
		}
	}

	async createPost(createPostDto: CreatePostDto, userId: string) {
		try {
			// Verify skill node exists if provided
			if (createPostDto.skillNodeId) {
				const skillNode = await this.prismaService.skillNode.findUnique({
					where: { id: createPostDto.skillNodeId },
					include: {
						skillTree: {
							include: {
								skillTreeUser: {
									where: { userId },
								},
							},
						},
					},
				});

				if (!skillNode) {
					throw new NotFoundException('Skill node not found');
				}

				// Check if user is a member of the skill tree
				if (
					skillNode.skillTree &&
					skillNode.skillTree.skillTreeUser.length === 0
				) {
					throw new ForbiddenException(
						'You must be a member of the skill tree to post to this skill node.',
					);
				}
			}

			const post = await this.prismaService.post.create({
				data: {
					content: createPostDto.content,
					proofMedia: createPostDto.proofMedia,
					skillNodeId: createPostDto.skillNodeId,
					creatorId: userId,
				},
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
			});

			return post;
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ForbiddenException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to create post');
		}
	}

	async updatePost(id: string, updatePostDto: UpdatePostDto, userId: string) {
		try {
			const existingPost = await this.prismaService.post.findUnique({
				where: { id },
			});

			if (!existingPost) {
				throw new NotFoundException('Post not found');
			}

			// Verify skill node exists if provided
			if (updatePostDto.skillNodeId) {
				const skillNode = await this.prismaService.skillNode.findUnique({
					where: { id: updatePostDto.skillNodeId },
					include: {
						skillTree: {
							include: {
								skillTreeUser: {
									where: { userId },
								},
							},
						},
					},
				});

				if (!skillNode) {
					throw new NotFoundException('Skill node not found');
				}

				// Check if user is a member of the skill tree
				if (
					skillNode.skillTree &&
					skillNode.skillTree.skillTreeUser.length === 0
				) {
					throw new ForbiddenException(
						'You must be a member of the skill tree to post to this skill node',
					);
				}
			}

			return this.prismaService.post.update({
				where: { id },
				data: updatePostDto,
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					likes: {
						select: { id: true, name: true },
					},
					feedback: {
						include: {
							verifier: {
								select: { id: true, name: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
			});
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ForbiddenException
			) {
				throw error;
			}
			if (error.code === 'P2025') {
				throw new NotFoundException('Post not found');
			}
			throw new InternalServerErrorException('Failed to update post');
		}
	}

	async deletePost(id: string, userId: string) {
		try {
			const post = await this.prismaService.post.findUnique({
				where: { id },
			});

			if (!post) {
				throw new NotFoundException('Post not found');
			}

			await this.prismaService.post.delete({
				where: { id },
			});

			return { message: 'Post deleted successfully' };
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			if (error.code === 'P2025') {
				throw new NotFoundException('Post not found');
			}
			throw new InternalServerErrorException('Failed to delete post');
		}
	}

	async likePost(postId: string, userId: string) {
		try {
			const post = await this.prismaService.post.findUnique({
				where: { id: postId },
				include: {
					likes: {
						where: { id: userId },
					},
				},
			});

			if (!post) {
				throw new NotFoundException('Post not found');
			}

			if (post.likes.length > 0) {
				throw new ConflictException('You have already liked this post');
			}

			await this.prismaService.post.update({
				where: { id: postId },
				data: {
					likes: {
						connect: { id: userId },
					},
				},
			});

			return { message: 'Post liked successfully' };
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ConflictException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to like post');
		}
	}

	async unlikePost(postId: string, userId: string) {
		try {
			const post = await this.prismaService.post.findUnique({
				where: { id: postId },
				include: {
					likes: {
						where: { id: userId },
					},
				},
			});

			if (!post) {
				throw new NotFoundException('Post not found');
			}

			if (post.likes.length === 0) {
				throw new ConflictException('You have not liked this post');
			}

			await this.prismaService.post.update({
				where: { id: postId },
				data: {
					likes: {
						disconnect: { id: userId },
					},
				},
			});

			return { message: 'Post unliked successfully' };
		} catch (error) {
			if (
				error instanceof NotFoundException ||
				error instanceof ConflictException
			) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to unlike post');
		}
	}

	async getPostsBySkillTree(skillTreeId: string) {
		try {
			const skillTree = await this.prismaService.skillTree.findUnique({
				where: { id: skillTreeId },
			});

			if (!skillTree) {
				throw new NotFoundException('Skill tree not found');
			}

			const posts = await this.prismaService.post.findMany({
				where: {
					skillNode: {
						skillTreeId: skillTreeId,
					},
				},
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					likes: {
						select: { id: true, name: true },
					},
					feedback: {
						include: {
							verifier: {
								select: { id: true, name: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
				orderBy: { createdAt: 'desc' },
			});

			return posts;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch posts');
		}
	}

	async getPostsBySkillNode(skillNodeId: string, user?: User) {
		try {
			const skillNode = await this.prismaService.skillNode.findUnique({
				where: { id: skillNodeId },
			});

			if (!skillNode) {
				throw new NotFoundException('Skill node not found');
			}

			const posts = await this.prismaService.post.findMany({
				where: { skillNodeId },
				include: {
					skillNode: {
						select: {
							id: true,
							name: true,
							skillTree: {
								select: { id: true, name: true },
							},
						},
					},
					likes: {
						select: { id: true, name: true },
					},
					feedback: {
						include: {
							verifier: {
								select: { id: true, name: true },
							},
						},
					},
					_count: {
						select: { likes: true, feedback: true },
					},
				},
				orderBy: { createdAt: 'desc' },
			});

			// Add user-specific information if authenticated
			if (user) {
				return posts.map((post) => ({
					...post,
					isLiked: post.likes.some((like) => like.id === user.id),
				}));
			}

			return posts;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch posts');
		}
	}

	async getPostLikes(postId: string) {
		try {
			const post = await this.prismaService.post.findUnique({
				where: { id: postId },
				include: {
					likes: {
						select: {
							id: true,
							name: true,
							email: true,
							xpPoint: true,
						},
					},
				},
			});

			if (!post) {
				throw new NotFoundException('Post not found');
			}

			return post.likes;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error;
			}
			throw new InternalServerErrorException('Failed to fetch post likes');
		}
	}
}
