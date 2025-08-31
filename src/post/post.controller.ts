import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { GetUser } from 'src/_utils/decorator/get-user.decorator';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/_utils/guards/jwt.guard';
import { CreatePostDto, UpdatePostDto } from './dto';

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

	@UseGuards(JwtGuard)
	@Get('auth/:id')
	getPostByIdAuthenticated(
		@Param('id', ParseUUIDPipe) id: string,
		@GetUser() user: User,
	) {
		return this.postService.getPostById(id, user);
	}

	@UseGuards(JwtGuard)
	@Post()
	createPost(@Body() dto: CreatePostDto, @GetUser() user: User) {
		return this.postService.createPost(dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Patch(':id')
	updatePost(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() dto: UpdatePostDto,
		@GetUser() user: User,
	) {
		return this.postService.updatePost(id, dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	deletePost(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
		return this.postService.deletePost(id, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/like')
	likePost(@Param('id', ParseUUIDPipe) postId: string, @GetUser() user: User) {
		return this.postService.likePost(postId, user.id);
	}

	@UseGuards(JwtGuard)
	@Delete(':id/like')
	@HttpCode(HttpStatus.NO_CONTENT)
	unlikePost(
		@Param('id', ParseUUIDPipe) postId: string,
		@GetUser() user: User,
	) {
		return this.postService.unlikePost(postId, user.id);
	}

	@Get(':id/likes')
	getPostLikes(@Param('id', ParseUUIDPipe) postId: string) {
		return this.postService.getPostLikes(postId);
	}

	@Get('skillnode/:skillNodeId')
	getPostsBySkillNode(
		@Param('skillNodeId', ParseUUIDPipe) skillNodeId: string,
	) {
		return this.postService.getPostsBySkillNode(skillNodeId);
	}

	@UseGuards(JwtGuard)
	@Get('auth/skillnode/:skillNodeId')
	getPostsBySkillNodeAuthenticated(
		@Param('skillNodeId', ParseUUIDPipe) skillNodeId: string,
		@GetUser() user: User,
	) {
		return this.postService.getPostsBySkillNode(skillNodeId, user);
	}
}
