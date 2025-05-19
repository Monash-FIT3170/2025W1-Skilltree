import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommunuityCreationDto } from './dto';
import { User } from 'generated/prisma';
import { GetCommunityDto } from './dto/get-community.dto';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  async createCommunity(user: User, dto: CommunuityCreationDto) {
    const community = await this.prisma.community.create({
      data: {
        name: dto.name,
        skill: dto.skill,
        tags: dto.tags,
        creatorId: user.id,
      },
    });

    return {
      message: community,
    };
  }

  async getAllCommunities() {
    const communities = await this.prisma.community.findMany();

    return {
      message: communities,
    };
  }

  async getCommunityById(dto: GetCommunityDto) {
    const community = await this.prisma.community.findUnique({
      where: { id: dto.id },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    return { message: community };
  }

  async deleteCommunity(id: string, user: User) {
    const community = await this.prisma.community.findUnique({
      where: { id },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    if (community.creatorId !== user.id) {
      throw new HttpException(
        'You are not authorized to delete this community',
        HttpStatus.FORBIDDEN,
      );
    }

    await this.prisma.community.delete({
      where: { id },
    });

    return { message: 'Community deleted successfully' };
  }

  async joinCommunity(communityId: string, user: User) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.community.update({
      where: { id: communityId },
      data: {
        users: {
          connect: { id: user.id },
        },
      },
    });

    return { message: 'Joined community successfully' };
  }

  async leaveCommunity(communityId: string, user: User) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.community.update({
      where: { id: communityId },
      data: {
        users: {
          disconnect: { id: user.id },
        },
      },
    });

    return { message: 'Left community successfully' };
  }

  async getCommunityAdmins(communityId: string) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
      include: {
        admins: true,
      },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    return { message: community.admins };
  }

  async getCommunityMembers(communityId: string) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
      include: {
        users: true,
      },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    return { message: community.users };
  }
}
