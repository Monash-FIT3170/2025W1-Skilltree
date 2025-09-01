import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from './common/common.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './_utils/strategy/jwt.strategy';
import { diskStorage } from 'multer';
import { SkilltreeModule } from './skilltree/skilltree.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { VerificationModule } from './verification/verification.module';
import { CommunityModule } from './community/community.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads'),
			serveRoot: '/uploads',
		}),
		MulterModule.register({
			dest: join(__dirname, '..', 'uploads'),
			storage: diskStorage({
				destination: join(__dirname, '..', 'uploads'),
				filename(req, file, callback) {
					callback(null, file.originalname);
				},
			}),
		}),
		JwtModule.register({}),
		PassportModule,
		PrismaModule,
		CommonModule,
		AuthModule,
		UserModule,
		SkilltreeModule,
		VerificationModule,
		CommunityModule
	],
	controllers: [AppController],
	providers: [AppService, JwtStrategy],
})
export class AppModule {}
