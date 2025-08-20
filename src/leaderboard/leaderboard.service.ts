import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { ApiResponseType } from '../types';
import type { Leaderboard, LeaderboardEntry } from '@prisma/client';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { CreateLeaderboardEntryDto } from './dto/create-leaderboard-entry.dto';

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
    const community = await this.prismaService.community.findUnique({
      where: { id: dto.communityId },
    });

    if (!community) {
      throw new HttpException('Community not found', HttpStatus.NOT_FOUND);
    }

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

  async updateLeaderboard(
  id: string, 
  updateData: { name?: string; metric?: string }
): Promise<ApiResponseType<Leaderboard>> {
  const leaderboard = await this.prismaService.leaderboard.update({
    where: { id },
    data: updateData,
  });

  return {
    ok: true,
    message: leaderboard,
    status: 200,
  };
}

  // for leaderboard enteries

  async createLeaderboardEntry(dto: CreateLeaderboardEntryDto): Promise<ApiResponseType<LeaderboardEntry>> {
    const entry = await this.prismaService.leaderboardEntry.create({
      data: {
        leaderboardId: dto.leaderboardId,
        userId: dto.userId,
        rank: dto.rank,
        score: dto.score,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        leaderboard: {
          select: {
            id: true,
            name: true,
            metric: true,
          },
        },
      },
    });

    return {
      ok: true,
      message: entry,
      status: 201,
    };
  }

  async updateLeaderboardEntry(
    leaderboardId: string,
    userId: string,
    updateData: { rank?: number; score?: number }
  ): Promise<ApiResponseType<LeaderboardEntry>> {
    const entry = await this.prismaService.leaderboardEntry.update({
      where: {
        leaderboardId_userId: {
          leaderboardId,
          userId,
        },
      },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return {
      ok: true,
      message: entry,
      status: 200,
    };
  }

  async deleteLeaderboardEntry(
    leaderboardId: string,
    userId: string
  ): Promise<ApiResponseType<LeaderboardEntry>> {
    const entry = await this.prismaService.leaderboardEntry.delete({
      where: {
        leaderboardId_userId: {
          leaderboardId,
          userId,
        },
      },
    });

    return {
      ok: true,
      message: entry,
      status: 200,
    };
  }
}

