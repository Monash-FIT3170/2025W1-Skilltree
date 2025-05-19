import { HttpException, HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnnouncementCreationDto } from './dto/create-announcement.dto';


@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}

  async createAnnouncement(
    announcementCreationDto: AnnouncementCreationDto,
    userId: string,
  ) {
    // Fetch the community by communityId
    const community = await this.prisma.community.findUnique({
      where: { id: announcementCreationDto.communityId },
    });

    // If the community doesn't exist, throw an error
    if (!community) {
      throw new BadRequestException('Community not found');
    }

    // throw error if creator of post is not creator of community
    if (community.creatorId !== userId) {
      throw new BadRequestException('User is not the creator of this community');
    }

    // Create the announcement (Community Leader Post)
    const announcement = await this.prisma.post.create({
      data: {
        text: announcementCreationDto.text,
        communityId: announcementCreationDto.communityId,
        authorId: userId,  // The user creating the post must be the same as the creator
      },
    });

    return {
      message: announcement,
    };
  }
}