import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from '../_utils/strategy';

@Module({
	imports: [
		PrismaModule,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('JWT_SECRET'),
				signOptions: {
					expiresIn: '24h',
				},
			}),
			inject: [ConfigService],
		}),
	],
	providers: [AuthService, JwtStrategy],
	controllers: [AuthController],
	exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
