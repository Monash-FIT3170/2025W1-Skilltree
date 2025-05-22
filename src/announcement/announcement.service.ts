import { HttpException, HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnnouncementCreationDto } from './dto/create-announcement.dto';
import { GetAnnouncementDto } from './dto/get-announcement.dto';
import { User } from 'generated/prisma';


@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}

  async createAnnouncement(
    user: User,
    dto: AnnouncementCreationDto,
  ) {
    const announcement = await this.prisma.post.create({
      data: {
        text: dto.text,
        communityId: dto.communityId,
        authorId: user.id,
      },
    });
    /*
    // If the announcement doesn't exist, throw an error
    if (!announcement) {
      throw new BadRequestException('announcement not found');
    }

    // throw error if creator of post is not creator of announcement
    if (announcement.creatorId !== user.id) {
      throw new BadRequestException('User is not the creator of this announcement');
    }

    // Create the announcement (Announcement Post)
    const announcement = await this.prisma.post.create({
      data: {
        text: announcementCreationDto.text,
        communityId: announcementCreationDto.communityId,
        authorId: user.id,  // The user creating the post must be the same as the creator
      },
    });
    */
    return {
      message: announcement,
    };
  }
    //might need to be change to all announcements where userID = announcement authorID
    async getAllAnnouncements() {
    const announcements = await this.prisma.post.findMany();

    return {
      message: announcements,
    };
  }
    async getAnnouncementById(dto: GetAnnouncementDto) {
      const announcement = await this.prisma.post.findUnique({
        where: { id: dto.id },
      });
  
      if (!announcement) {
        throw new HttpException('Announcement not found', HttpStatus.NOT_FOUND);
      }
  
      return { message: announcement };
    }
    async deleteAnnouncement(id: string, user: User) {
        const announcement = await this.prisma.post.findUnique({
          where: { id },
        });
    
        if (!announcement) {
          throw new HttpException('Announcement not found', HttpStatus.NOT_FOUND);
        }
    
        if (announcement.authorId !== user.id) {
          throw new HttpException(
            'You are not authorized to delete this announcement',
            HttpStatus.FORBIDDEN,
          );
        }
    
        await this.prisma.post.delete({
          where: { id },
        });
    
        return { message: 'Announcement deleted successfully' };
      }
}