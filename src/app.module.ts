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
import { AnnouncementService } from './announcement/announcement.service';
import { AnnouncementController } from './announcement/announcement.controller';
import { AnnouncementModule } from './announcement/announcement.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    JwtModule.register({}),
    AuthModule,
    CommunityModule,
    UserModule,
    AnnouncementModule,
    EventModule,
  ],
  controllers: [AppController, AuthController, UserController, EventController, AnnouncementController],
  providers: [
    AppService,
    AuthService,
    PrismaService,
    JwtService,
    UserService,
    EventService,
    AnnouncementService
  ],
})
export class AppModule {}
