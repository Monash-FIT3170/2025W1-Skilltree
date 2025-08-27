import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		config: ConfigService,
		private readonly prisma: PrismaService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get('JWT_SECRET')!,
		});
	}

	async validate(payload: { sub: string; email: string; iat: number }) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: payload.sub,
			},
		});
		// Remove sensitive information
		if (user) {
			delete (user as any).hash;
		}
		return user;
	}
}
