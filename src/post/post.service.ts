import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'generated/prisma';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async getAllPosts() {
    return await this.prismaService.post.findMany();
  }

  async getPostById(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    });

    return {
      message: post,
    };
  }

  async createPost(dto: CreatePostDto, user: User) {
    const { text, attachment, communityId } = dto;

    await this.prismaService.post.create({
      data: {
        text,
        attachment,
        communityId,
        authorId: user.id,
      },
    });

    return {
      message: 'The post has been created successfully!',
    };
  }

  async deletePost(id: string, user: User) {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    });

    if (!post) {
      return {
        message: 'Post not found',
      };
    }

    if (post.authorId !== user.id) {
      return {
        message: 'You are not the author of this post',
      };
    }

    await this.prismaService.post.delete({
      where: { id },
    });

    return {
      message: 'The post has been deleted successfully!',
    };
  }
}
