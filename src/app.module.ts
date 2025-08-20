import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './_oldCode/auth/auth.module';
import { CommunityModule } from './_oldCode/community/community.module';
import { UserModule } from './user/user.module';
import { EventModule } from './_oldCode/event/event.module';
import { PostModule } from './_oldCode/post/post.module';
import { FeedbackModule } from './_oldCode/feedback/feedback.module';
import { AnnouncementModule } from './_oldCode/announcement/announcement.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from './common/common.module';
import { CommonService } from './common/common.service';
import { diskStorage } from 'multer';
import { PostModule } from './post/post.module';
import { EventModule } from './event/event.module';

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
		PrismaModule,
		AuthModule,
		CommunityModule,
		UserModule,
		EventModule,
		PostModule,
		FeedbackModule,
		AnnouncementModule,
		CommonModule,
	],
	controllers: [AppController],
	providers: [AppService, CommonService],
})
export class AppModule {}
