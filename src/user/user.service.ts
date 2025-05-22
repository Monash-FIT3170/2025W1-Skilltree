import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMe(user: User) {
    const userData = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        email: true,
        hash: false,
        createdCommunities: true,
        adminOfCommunities: true,
        verifiedInCommunities: true,
        posts: true,
        skillForests: true,
        followedSkillForests: true,
        experiences: true,
        leaderboardEntries: true,
        feedback: true,
        events: true,
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
