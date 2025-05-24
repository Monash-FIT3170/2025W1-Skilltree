import { HttpException, HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnnouncementCreationDto } from './dto/create-announcement.dto';
import { User } from 'generated/prisma';


@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}

  async createAnnouncement(
    user: User,
    dto: AnnouncementCreationDto,
  ) {
    //check if community exists
   const community = await this.prisma.community.findUnique({
    where: { id: dto.communityId },
  });
    if (!community) {
      throw new BadRequestException('Community not found');
    }

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

    // to do: throw error if creator of announcement is not part of the admin list in community
    */
    return {
      message: announcement,
    };
  }
    //get all announcements in a specific community
    async getAllAnnouncements(communityId: string) {
    const announcements = await this.prisma.post.findMany({
    where: { communityId },

  });

    return {
      message: announcements,
    };
  }
    async getAnnouncementById(id: string) {
      const announcement = await this.prisma.post.findUnique({
        where: { id: id },
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