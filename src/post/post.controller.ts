import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

	@Get()
	getAllPosts() {
		return this.postService.getAllPosts();
	}

	@Get(':id')
	getPostById(@Param('id', ParseUUIDPipe) id: string) {
		return this.postService.getPostById(id);
	}
}
