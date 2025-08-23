import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommunityCreationDto } from './dto';
import { Role, User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { CommonService } from 'src/common/common.service';
import { extname } from 'path';

@Injectable()
export class CommunityService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private readonly common: CommonService,
  ) {}

  async createCommunity(
    user: User,
    dto: CommunityCreationDto,
    file?: Express.Multer.File,
  ) {
    // ensure a slug exists (if not supplied in DTO)
    const slug = dto.slug ?? this.toSlug(dto.name);

    const community = await this.prisma.community.create({
      data: {
        icon: '',
        name: dto.name,
        slug,
        tags: dto.tags,
        ...(dto.description !== undefined && { description: dto.description }),
        creatorId: user.id,
        // creator is an admin
        members: {
          create: { userId: user.id, role: Role.ADMIN },
        },
      },
    });

  if (file) {
    // keep the original extension (e.g. .png, .jpg)
    const ext = extname(file.originalname) || '.png';
    const newFileName = `community-${community.id}${ext}`;

    const savedName = this.common.handleFileUpload(file.originalname, newFileName);

    await this.prisma.community.update({
      where: { id: community.id },
      data: {
        icon: `${this.config.get('BASE_URL')}/${savedName}`,
        // icon: `${this.config.get('BASE_URL')}/static/${savedName}`
      },
    });
  }


    return { message: community };
  }

  // --- READ ---
  async getAllCommunities() {
    const communities = await this.prisma.community.findMany();
    return { message: communities };
  }

  async getCommunityById(id: string) {
    const community = await this.prisma.community.findUnique({ where: { id } });
    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }
    return { message: community };
  }

  async getCommunityBySlug(slug: string) {
    const community = await this.prisma.community.findUnique({ where: { slug } });
    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }
    return { message: community };
  }

  // --- DELETE ---
  async deleteCommunity(id: string, user: User) {
    const community = await this.prisma.community.findUnique({ where: { id } });
    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    // keep same auth rule: only creator can delete
    if (community.creatorId !== user.id) {
      throw new HttpException(
        'You are not authorized to delete this community',
        HttpStatus.FORBIDDEN,
      );
    }

    this.common.removeFile(`community-${id}.png`);


    await this.prisma.communityMembership.deleteMany({ where: { communityId: id } });
    await this.prisma.community.delete({ where: { id } });

    return { message: 'Community deleted successfully' };
  }

  // --- MEMBERSHIP: JOIN/LEAVE ---
  async joinCommunity(communityId: string, user: User) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });
    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    // upsert membership (composite PK: communityId + userId)
    await this.prisma.communityMembership.upsert({
      where: { communityId_userId: { communityId, userId: user.id } },
      update: {},
      create: { communityId, userId: user.id, role: Role.MEMBER },
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

    await this.prisma.communityMembership.delete({
      where: { communityId_userId: { communityId, userId: user.id } },
    });

    return { message: 'Left community successfully' };
  }

  // --- LIST ADMINS/MEMBERS ---
  async getCommunityAdmins(communityId: string) {

    const admins = await this.prisma.communityMembership.findMany({
      where: { communityId, role: Role.ADMIN },
      include: { user: true },
    });

    // also validate community existence (in case communityId is invalid but no rows)
    if (admins.length === 0) {
      const exists = await this.prisma.community.findUnique({ where: { id: communityId } });
      if (!exists) {
        throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
      }
    }

    return { message: admins.map((a) => a.user) };
  }

  async getCommunityMembers(communityId: string) {
    const members = await this.prisma.communityMembership.findMany({
      where: { communityId },
      include: { user: true },
    });

    if (members.length === 0) {
      const exists = await this.prisma.community.findUnique({ where: { id: communityId } });
      if (!exists) {
        throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
      }
    }

    return { message: members.map((m) => m.user) };
  }

  // --- UPDATE ---
  async updateCommunity(
    id: string,
    dto: UpdateCommunityDto,
    user: User,
    file?: Express.Multer.File,
  ) {
    const community = await this.prisma.community.findUnique({ where: { id } });
    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

    // keep same auth rule: only creator can update (can change so that anyone with admin role can update)
    if (community.creatorId !== user.id) {
      throw new HttpException(
        'You are not authorized to update this community',
        HttpStatus.FORBIDDEN,
      );
    }

    const updatedCommunity = await this.prisma.community.update({
      where: { id },
      data: {
        // make sure no undefined/null properties when updating community
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.slug !== undefined && { slug: dto.slug }),
        ...(dto.tags !== undefined && { tags: dto.tags }),
        ...(dto.description !== undefined && { description: dto.description }),
      },
    });

  if (file) {
    // keep the original extension (e.g. .png, .jpg)
    const ext = extname(file.originalname) || '.png';
    const newFileName = `community-${community.id}${ext}`;

    const savedName = this.common.handleFileUpload(file.originalname, newFileName);

    await this.prisma.community.update({
      where: { id: community.id },
      data: {
        icon: `${this.config.get('BASE_URL')}/${savedName}`,
        // icon: `${this.config.get('BASE_URL')}/static/${savedName}`
      },
    });
  }

    return { message: updatedCommunity };
  }

  // slug generator that matches DTO pattern)
  private toSlug(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
