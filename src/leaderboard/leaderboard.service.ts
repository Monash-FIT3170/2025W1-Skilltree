import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { ApiResponseType } from '../types';
import type { Leaderboard } from '@prisma/client';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';

@Injectable()
export class LeaderboardService {
  constructor(private prismaService: PrismaService) {}

  async getLeaderboards(communityId: string): Promise<ApiResponseType<Leaderboard[]>> {
    const leaderboards = await this.prismaService.leaderboard.findMany({
      where: { communityId },
      include: {
        entries: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                profilePicture: true,
              },
            },
          },
          orderBy: { rank: 'asc' },
        },
      },
    });

    return {
      ok: true,
      message: leaderboards,
      status: 200,
    };
  }

  async getLeaderboardById(id: string): Promise<ApiResponseType<Leaderboard | null>> {
    const leaderboard = await this.prismaService.leaderboard.findUnique({
      where: { id },
      include: {
        entries: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
          orderBy: { rank: 'asc' },
        },
      },
    });

    if (!leaderboard) {
      throw new HttpException('Leaderboard not found', HttpStatus.NOT_FOUND);
    }

    return {
      ok: true,
      message: leaderboard,
      status: 200,
    };
  }

  async createLeaderboard(dto: CreateLeaderboardDto): Promise<ApiResponseType<Leaderboard>> {
    const leaderboard = await this.prismaService.leaderboard.create({
      data: {
        name: dto.name,
        metric: dto.metric,
        communityId: dto.communityId,
      },
    });

    return {
      ok: true,
      message: leaderboard,
      status: 201,
    };
  }

}