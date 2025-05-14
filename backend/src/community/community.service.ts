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
}
