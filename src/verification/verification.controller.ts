import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseGuards,
	HttpStatus,
} from '@nestjs/common';
import { VerificationService } from './verification.service';
import { JwtGuard } from 'src/_utils/guards';
import { GetUser } from 'src/_utils/decorator';
import type { User } from '@prisma/client';
import { VerifyPostDto } from './dto/verify-post.dto';
import { TApiResponse } from 'src/types';

@Controller('verification')
export class VerificationController {
	constructor(private readonly service: VerificationService) {}

	@Post(':postId')
	@UseGuards(JwtGuard)
	async verifyPost(
		@Param('postId') postId: string,
		@GetUser() user: User,
		@Body() dto: VerifyPostDto,
	): Promise<TApiResponse<any>> {
		const res = await this.service.verifyPost(postId, user, dto);
		return { ok: true, message: res, status: HttpStatus.OK };
	}

	@Get('post/:postId')
	async listForPost(
		@Param('postId') postId: string,
	): Promise<TApiResponse<any>> {
		const res = await this.service.listForPost(postId);
		return { ok: true, message: res, status: HttpStatus.OK };
	}
}
