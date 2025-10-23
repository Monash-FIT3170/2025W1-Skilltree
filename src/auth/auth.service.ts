import {
	Injectable,
	ConflictException,
	UnauthorizedException,
	NotFoundException,
	BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import {
	AuthSignupDto,
	AuthSigninDto,
	ChangePasswordDto,
	ForgotPasswordDto,
} from './dto';
import { format } from 'date-fns';
import { SHA256 } from 'crypto-js';

export interface AuthResponse {
	access_token: string;
	user: Omit<User, 'hash'>;
}

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwt: JwtService,
		private readonly config: ConfigService,
	) {}

	async signup(dto: AuthSignupDto): Promise<AuthResponse> {
		const existingUser = await this.prisma.user.findUnique({
			where: { email: dto.email },
		});

		if (existingUser) {
			throw new ConflictException('User with this email already exists');
		}

		const hash = await argon2.hash(dto.password);

		try {
			const emailHash = SHA256(dto.email).toString();
			const user = await this.prisma.user.create({
				data: {
					name: dto.name,
					email: dto.email,
					hash,
					pfp: `https://www.gravatar.com/avatar/${emailHash}?d=identicon`,
					dateOfBirth: dto.dateOfBirth,
				},
			});

			const token = this.signToken(user.id, user.email);
			const { hash: _, ...userWithoutHash } = user;

			return {
				access_token: token,
				user: userWithoutHash,
			};
		} catch {
			throw new BadRequestException('Failed to create user account');
		}
	}

	async signin(dto: AuthSigninDto): Promise<AuthResponse> {
		const user = await this.prisma.user.findUnique({
			where: { email: dto.email },
		});

		if (!user) {
			throw new UnauthorizedException('Invalid credentials');
		}

		const passwordValid = await argon2.verify(user.hash, dto.password);

		if (!passwordValid) {
			throw new UnauthorizedException('Invalid credentials');
		}

		const token = this.signToken(user.id, user.email);
		const { hash: _, ...userWithoutHash } = user;

		return {
			access_token: token,
			user: userWithoutHash,
		};
	}

	async getProfile(userId: string): Promise<Omit<User, 'hash'>> {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const { hash: _, ...userWithoutHash } = user;
		return userWithoutHash;
	}

	async changePassword(
		userId: string,
		dto: ChangePasswordDto,
	): Promise<{ message: string }> {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const passwordValid = await argon2.verify(user.hash, dto.currentPassword);

		if (!passwordValid) {
			throw new UnauthorizedException('Current password is incorrect');
		}

		const newHash = await argon2.hash(dto.newPassword);
		await this.prisma.user.update({
			where: { id: userId },
			data: { hash: newHash },
		});

		return { message: 'Password changed successfully' };
	}

	async forgotPassword(dto: ForgotPasswordDto): Promise<{ message: string }> {
		const user = await this.prisma.user.findUnique({
			where: { email: dto.email },
		});

		if (!user) {
			return {
				message: 'If the email exists, a password reset link has been sent',
			};
		}

		return {
			message: 'If the email exists, a password reset link has been sent',
		};
	}

	async refreshToken(userId: string): Promise<{ access_token: string }> {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			throw new UnauthorizedException('User not found');
		}

		const token = this.signToken(user.id, user.email);
		return { access_token: token };
	}

	private signToken(userId: string, email: string): string {
		const payload = { sub: userId, email };
		const secret = this.config.get('JWT_SECRET');

		return this.jwt.sign(payload);
	}
}
