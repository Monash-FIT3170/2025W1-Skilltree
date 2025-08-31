import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
