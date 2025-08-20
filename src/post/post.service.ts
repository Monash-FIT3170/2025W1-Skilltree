import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { ApiResponseType } from '../types';
import type { Post } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
	constructor(private prismaService: PrismaService) {}

	async getAllPosts(): Promise<ApiResponseType<Post[]>> {
		const posts = await this.prismaService.post.findMany();

		return {
			ok: true,
			message: posts,
			status: 200,
		};
	}

	async getPostById(
		id: string,
	): Promise<ApiResponseType<Post | null | undefined>> {
		const post = await this.prismaService.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		return {
			ok: true,
			message: post,
			status: 200,
		};
	}

	async createPost(
		data: CreatePostDto,
		authorId: string,
	): Promise<ApiResponseType<Post>> {
		const { content, attachmentUrl, communityId, skillTreeNodeId } = data;
		const post = await this.prismaService.post.create({
			data: {
				content,
				attachmentUrl,
				communityId,
				skillTreeNodeId,
				authorId: authorId,
			},
		});

		return {
			ok: true,
			message: post,
			status: 201,
		};
	}

	async deletePost(
		id: string,
		authorId: string,
	): Promise<ApiResponseType<Post>> {
		const post = await this.prismaService.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		if (post.authorId !== authorId) {
			throw new HttpException(
				'You are not authorized to delete this post',
				HttpStatus.FORBIDDEN,
			);
		}

		await this.prismaService.post.delete({
			where: { id },
		});

		return {
			ok: true,
			message: post,
			status: 200,
		};
	}

	async updatePost(
		id: string,
		data: Partial<CreatePostDto>,
		authorId: string,
	): Promise<ApiResponseType<Post>> {
		const post = await this.prismaService.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		if (post.authorId !== authorId) {
			throw new HttpException(
				'You are not authorized to update this post',
				HttpStatus.FORBIDDEN,
			);
		}

		const updatedPost = await this.prismaService.post.update({
			where: { id },
			data,
		});

		return {
			ok: true,
			message: updatedPost,
			status: 200,
		};
	}

	async likePost(id: string, likerId: string): Promise<ApiResponseType<Post>> {
		const post = await this.prismaService.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		await this.prismaService.post.update({
			where: { id },
			data: {
				likes: {
					connect: [{ id: likerId }],
				},
			},
		});

		return {
			ok: true,
			message: post,
			status: 200,
		};
	}

	async unlikePost(
		id: string,
		likerId: string,
	): Promise<ApiResponseType<Post>> {
		const post = await this.prismaService.post.findUnique({
			where: { id },
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		await this.prismaService.post.update({
			where: { id },
			data: {
				likes: {
					disconnect: [{ id: likerId }],
				},
			},
		});

		return {
			ok: true,
			message: post,
			status: 200,
		};
	}
}
