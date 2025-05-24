import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { userSelect } from 'src/prismaIncludes';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMe(user: User) {
    const userData = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      },
      select: userSelect,
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
