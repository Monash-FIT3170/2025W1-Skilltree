import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { User } from '@prisma/client';

@Injectable()
export class VerificationService {
	constructor(private prisma: PrismaService) {}

	async verifyPost(
		postId: string,
		verifier: User,
		dto: { feedbackText?: string; multiplier?: number },
	) {
		const post = await this.prisma.post.findUnique({
			where: { id: postId },
			include: {
				skillNode: { select: { id: true, skillTreeId: true } },
			},
		});

		if (!post) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}
		if (!post.skillNode?.skillTreeId) {
			throw new HttpException(
				'Post is not linked to a skill node',
				HttpStatus.BAD_REQUEST,
			);
		}

		const membership = await this.prisma.skillTreeUser.findUnique({
			where: {
				skillTreeId_userId: {
					skillTreeId: post.skillNode.skillTreeId,
					userId: verifier.id,
				},
			},
			select: { role: true },
		});

		if (!membership || membership.role !== 'ADMIN') {
			throw new HttpException(
				'Only tree admins can verify posts',
				HttpStatus.FORBIDDEN,
			);
		}

		const multiplier = dto.multiplier ?? 1;

		const feedback = await this.prisma.feedback.upsert({
			where: { verifierId_postId: { verifierId: verifier.id, postId } },
			update: { feedbackText: dto.feedbackText ?? '', multiplier },
			create: {
				verifierId: verifier.id,
				postId,
				feedbackText: dto.feedbackText ?? '',
				multiplier,
			},
		});

		return { message: 'Verification saved', data: feedback };
	}

	async listForPost(postId: string) {
		const exists = await this.prisma.post.findUnique({
			where: { id: postId },
			select: { id: true },
		});
		if (!exists) {
			throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
		}

		const verifications = await this.prisma.feedback.findMany({
			where: { postId },
			include: {
				verifier: { select: { id: true, name: true, email: true } },
			},
		});

		return { message: verifications };
	}
}
