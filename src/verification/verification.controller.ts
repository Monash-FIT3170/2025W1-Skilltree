import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { JwtGuard } from 'src/_utils/guards';
import { GetUser } from 'src/_utils/decorator';
import type { User } from '@prisma/client';
import { VerifyPostDto } from './dto/verify-post.dto';

@Controller('verification')
export class VerificationController {
	constructor(private readonly service: VerificationService) {}

	@Post(':postId')
	@UseGuards(JwtGuard)
	verifyPost(
		@Param('postId') postId: string,
		@GetUser() user: User,
		@Body() dto: VerifyPostDto,
	) {
		return this.service.verifyPost(postId, user, dto);
	}

	@Get('post/:postId')
	listForPost(@Param('postId') postId: string) {
		return this.service.listForPost(postId);
	}
}
