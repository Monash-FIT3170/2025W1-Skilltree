import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { MulterModule } from './multer/multer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

import { CommunityService } from './community/community.service';
import { CommunityModule } from './community/community.module';
import { CommunityController } from './community/community.controller';

import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

import { EventService } from './event/event.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';

import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackModule } from './feedback/feedback.module';

import { AnnouncementService } from './announcement/announcement.service';
import { AnnouncementController } from './announcement/announcement.controller';
import { AnnouncementModule } from './announcement/announcement.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    PrismaModule,
    JwtModule.register({}),
    AuthModule,
    CommunityModule,
    UserModule,
    EventModule,
    PostModule,
    FeedbackModule,
    AnnouncementModule,
    MulterModule,
  ],
  controllers: [AppController, AuthController, CommunityController, UserController, EventController, FeedbackController, AnnouncementController],
  providers: [
    AppService,
    AuthService,
    CommunityService,
    UserService,
    EventService,
    FeedbackService,
    AnnouncementService,
    PrismaService,
    JwtService,
  ],
})
export class AppModule {}
