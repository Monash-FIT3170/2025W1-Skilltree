import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommunuityCreationDto } from './dto';
import { User } from 'generated/prisma';
import { GetCommunityDto } from './dto/get-community.dto';
import { MulterService } from 'src/multer/multer.service';
import { ConfigService } from '@nestjs/config';
import { UpdateCommunityDto } from './dto/update-community.dto';

const includeAllFields = {
  id: true,
  name: true,
  skill: true,
  icon: true,
  tags: true,
  description: true,
  communityExperience: true,
  creatorId: true,
  creator: true,
  admins: true,
  users: true,
  skillTreeNodes: true,
  posts: true,
  skillForests: true,
  experiences: true,
  leaderboards: true,
  events: true,
};

@Injectable()
export class CommunityService {
  constructor(
    private prisma: PrismaService,
    private multerService: MulterService,
    private configService: ConfigService,
  ) {}

  async createCommunity(user: User, dto: CommunuityCreationDto) {
    const community = await this.prisma.community.create({
      data: {
        icon: '',
        name: dto.name,
        tags: dto.tags,
        description: dto.description,
        creatorId: user.id,
        admins: {
          connect: { id: user.id },
        },
        users: {
          connect: { id: user.id },
        },
      },
    });

    const { filename } = await this.multerService.handleFileUpload(
      `community-${community.id}.png`,
      dto.profileImage,
    );

    await this.prisma.community.update({
      where: { id: community.id },
      data: {
        icon: `${this.configService.get('BASE_URL')}/static/${filename}`,
      },
    });

    return {
      message: community,
    };
  }

  async getAllCommunities() {
    const communities = await this.prisma.community.findMany({
      select: includeAllFields,
    });

    return {
      message: communities,
    };
  }

  async getCommunityById(dto: GetCommunityDto) {
    const community = await this.prisma.community.findUnique({
      where: { id: dto.id },
      select: includeAllFields,
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

    this.multerService.removeFile(`community-${id}.png`);

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

    const updatedCommunity = await this.prisma.community.findUnique({
      where: { id: communityId },
      include: {
        users: true,
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

  async updateCommunity(id: string, dto: UpdateCommunityDto, user: User) {
    const community = await this.prisma.community.findUnique({
      where: { id },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    if (community.creatorId !== user.id) {
      throw new HttpException(
        'You are not authorized to update this community',
        HttpStatus.FORBIDDEN,
      );
    }

    const { filename } = await this.multerService.handleFileUpload(
      `community-${community.id}.png`,
      dto.profileImage,
    );

    const updatedCommunity = await this.prisma.community.update({
      where: { id },
      data: {
        icon: `${this.configService.get('BASE_URL')}/static/${filename}`,
        name: dto.name,
        tags: dto.tags,
        description: dto.description,
      },
    });

    return { message: updatedCommunity };
  }
}
