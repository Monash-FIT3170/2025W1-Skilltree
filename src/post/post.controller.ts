import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetUser } from '../_utils/decorator';
import { User } from '@prisma/client';
import { JwtGuard } from '../_utils/guards/jwt.guard';

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
	async createPost(@Body() data: CreatePostDto, @GetUser() user: User) {
		return this.postService.createPost(data, user.id);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	async deletePost(@Param('id') id: string, @GetUser() user: User) {
		return this.postService.deletePost(id, user.id);
	}

	@UseGuards(JwtGuard)
	@Patch(':id')
	async updatePost(
		@Param('id') id: string,
		@Body() data: Partial<CreatePostDto>,
		@GetUser() user: User,
	) {
		return this.postService.updatePost(id, data, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/like')
	async likePost(@Param('id') id: string, @GetUser() user: User) {
		return this.postService.likePost(id, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/unlike')
	async unlikePost(@Param('id') id: string, @GetUser() user: User) {
		return this.postService.unlikePost(id, user.id);
	}
}
