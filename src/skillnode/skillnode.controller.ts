import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { SkillNodeService } from './skillnode.service';
import { Prisma, SkillNode, Post as PostModel } from '@prisma/client';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Controller('skill-node')
export class SkillNodeController {
  constructor(private readonly skillNodeService: SkillNodeService) {}

  @Get(':id')
  getSkillTreeNodeById(@Param('id') id: string): Promise<ApiResponse<SkillNode>> {
    return this.skillNodeService.getSkillTreeNodeById(id).then((node) => ({
      success: true,
      message: `Fetched SkillNode with id ${id}`,
      data: node,
    }));
  }

  @Post()
  createSkillNode(
    @Body() data: Prisma.SkillNodeCreateInput,
  ): Promise<ApiResponse<SkillNode>> {
    return this.skillNodeService.createSkillNode(data).then((node) => ({
      success: true,
      message: `SkillNode created successfully`,
      data: node,
    }));
  }

  @Get(':id/posts')
  getAllSkillNodePosts(@Param('id') id: string): Promise<ApiResponse<PostModel[]>> {
    return this.skillNodeService.getAllSkillNodePosts(id).then((posts) => ({
      success: true,
      message: `Fetched all posts for SkillNode ${id}`,
      data: posts,
    }));
  }

  @Delete(':id')
  deleteSkillNode(@Param('id') id: string): Promise<ApiResponse<SkillNode>> {
    return this.skillNodeService.deleteSkillNode(id).then((deleted) => ({
      success: true,
      message: `SkillNode ${id} deleted successfully`,
      data: deleted,
    }));
  }
}