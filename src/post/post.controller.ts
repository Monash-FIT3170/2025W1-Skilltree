import {
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetUser } from '../_utils/decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('post')
export class PostController {
	constructor(private postService: PostService) {}

	@Get()
	async getAllPosts() {
		return this.postService.getAllPosts();
	}

	@Get(':id')
	async getPostById(id: string) {
		return this.postService.getPostById(id);
	}

	@UseGuards(AuthGuard)
	@Post()
	async createPost(data: CreatePostDto, @GetUser() user: User) {
		return this.postService.createPost(data, user.id);
	}

	@Delete(':id')
	async deletePost(id: string, @GetUser() user: User) {
		return this.postService.deletePost(id, user.id);
	}

	@UseGuards(AuthGuard)
	@Patch(':id')
	async updatePost(
		id: string,
		data: Partial<CreatePostDto>,
		@GetUser() user: User,
	) {
		return this.postService.updatePost(id, data, user.id);
	}

	@Post(':id/like')
	async likePost(id: string, @GetUser() user: User) {
		return this.postService.likePost(id, user.id);
	}

	@Post(':id/unlike')
	async unlikePost(id: string, @GetUser() user: User) {
		return this.postService.unlikePost(id, user.id);
	}
}
