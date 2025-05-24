import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtGuard } from 'src/guards';
import { GetUser } from 'src/decorator';
import { User } from 'generated/prisma';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  async createPost(@Body() dto: CreatePostDto, @GetUser() user: User) {
    return this.postService.createPost(dto, user);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async deletePost(@Param('id') id: string, @GetUser() user: User) {
    return this.postService.deletePost(id, user);
  }
}
