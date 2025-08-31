import { Controller, Get, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { GetUser } from 'src/_utils/decorator/get-user.decorator';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/_utils/guards/jwt.guard';

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

	@UseGuards(JwtGuard)
	@Get('auth/all')
	getAllPostsAuthenticated(@GetUser() user: User) {
		return this.postService.getAllPosts(user);
	}
}
