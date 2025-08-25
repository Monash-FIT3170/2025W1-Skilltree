import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';
import type { ApiResponseType } from 'src/types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getMe(user: User): Promise<ApiResponseType<User>> {
		const userData = await this.prisma.user.findUnique({
			where: {
				id: user.id,
			},
		});

		if (!userData) {
			return {
				ok: false,
				message: 'User not found',
				status: HttpStatus.NOT_FOUND,
			}
		}

		return {
			ok: true,
			message: userData,
			status: HttpStatus.OK,
		};
	}
}
