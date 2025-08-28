import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, SkillNode, Post } from '@prisma/client';

@Injectable()
export class SkillNodeService {
  constructor(private prisma: PrismaService) {}

  async getSkillTreeNodeById(id: string): Promise<SkillNode & { post: Post[] }> {
    const node = await this.prisma.skillNode.findUnique({
      where: { id },
      include: {
        skillTree: true,
        parentNode: true,
        childNode: true,
        post: true,
      },
    });

    if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
    return node;
  }

  async createSkillNode(data: Prisma.SkillNodeCreateInput): Promise<SkillNode> {
    return this.prisma.skillNode.create({ data });
  }

  async getAllSkillNodePosts(id: string): Promise<Post[]> {
    const node = await this.prisma.skillNode.findUnique({
      where: { id },
      include: { post: { include: { likes: true, feedback: true } } },
    });

    if (!node) throw new NotFoundException(`SkillNode ${id} not found`);
    return node.post;
  }

  async deleteSkillNode(id: string): Promise<SkillNode> {
    await this.getSkillTreeNodeById(id);
    return this.prisma.skillNode.delete({ where: { id } });
  }
}