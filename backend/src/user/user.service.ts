import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMe(user: User) {
    console.log(user);

    const userData = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        hash: false,
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
