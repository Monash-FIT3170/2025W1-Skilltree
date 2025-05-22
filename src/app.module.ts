import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommunityModule } from './community/community.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { EventService } from './event/event.service';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { PostModule } from './post/post.module';
import { CommunityService } from './community/community.service';
import { MulterModule } from './multer/multer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'),
    // }),
    PrismaModule,
    JwtModule.register({}),
    AuthModule,
    CommunityModule,
    UserModule,
    EventModule,
    PostModule,
    MulterModule,
  ],
  controllers: [AppController, AuthController, UserController, EventController],
  providers: [
    AppService,
    AuthService,
    CommunityService,
    UserService,
    PrismaService,
    JwtService,
    UserService,
    EventService,
  ],
})
export class AppModule {}
