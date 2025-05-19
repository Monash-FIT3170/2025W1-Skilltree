import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto';

@Injectable()
export class EventService {
  constructor(private prismaService: PrismaService) {}

  async getAllEvents() {
    return {
      message: await this.prismaService.event.findMany(),
    };
  }

  async createEvent(dto: CreateEventDto, user: User) {
    const community = await this.prismaService.community.findUnique({
      where: {
        id: dto.commmunityId,
      },
    });
    if (!community) {
      throw new HttpException(
        `Community with ${dto.commmunityId} does not exist.`,
        HttpStatus.NOT_FOUND,
      );
    }

    const experience = await this.prismaService.experience.findUnique({
      where: {
        id: dto.experienceId,
      },
    });
    if (!experience) {
      throw new HttpException(
        `Experience with ${dto.experienceId} does not exist.`,
        HttpStatus.NOT_FOUND,
      );
    }

    const event = await this.prismaService.event.create({
      data: {
        communityId: dto.commmunityId,
        userId: user.id,
        experienceId: dto.experienceId,
        rankedStatus: dto.rankedStatus,
        experiencePayout: dto.experiencePayout,
      },
    });

    if (!event) {
      throw new HttpException(
        `Unable to create event`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      message: event,
    };
  }
}
