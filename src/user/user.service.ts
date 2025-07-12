import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getMe(user: User) {
		const userData = await this.prisma.user.findUnique({
			where: {
				id: user.id,
			},
		});

		if (!userData) {
			throw new HttpException(
				'The user was not found. Please sign up.',
				HttpStatus.NOT_FOUND,
			);
		}

		return userData;
	}
}
