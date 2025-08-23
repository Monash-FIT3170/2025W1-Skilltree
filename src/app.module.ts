import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from './common/common.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './_utils/strategy/jwt.strategy';
import { diskStorage } from 'multer';
import { PostModule } from './post/post.module';
import { EventModule } from './event/event.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads'),
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
		UserModule,
		EventModule,
		PostModule,
		CommonModule,
		LeaderboardModule,
	],
	controllers: [AppController],
	providers: [AppService, JwtStrategy],
})
export class AppModule {}
