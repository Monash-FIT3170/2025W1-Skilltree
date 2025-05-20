import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma';
import { GetCompetitionDto } from './dto/get-competition.dto';
import { CreateCompetitionDto } from './dto/create-competition.dto';

@Injectable()
export class CompetitionService {
  constructor(private prisma: PrismaService) {}

  async createCompetition(dto: CreateCompetitionDto) {
    const competition = await this.prisma.competition.create({
      data: {
        name: dto.name,
        communityId: dto.communityId,
        experienceId: dto.experienceId,
        rankedStatus: dto.rankedStatus,
        experiencePayout: dto.experiencePayout,
      },
    });

    return {
      message: competition,
    };
  }

  async getAllCompetitions() {
    const competitions = await this.prisma.competition.findMany();

    return {
      message: competitions,
    };
  }

  async getCompetitionById(dto: GetCompetitionDto) {
    const competition = await this.prisma.competition.findUnique({
      where: { id: dto.id },
    });

    if (!competition) {
      throw new HttpException('Competition not found', HttpStatus.NOT_FOUND);
    }

    return { message: competition };
  }

  async deleteCompetition(id: string, user: User) {
    const competition = await this.prisma.competition.findUnique({
      where: { id },
    });

    if (!competition) {
      throw new HttpException('Competition not found', HttpStatus.NOT_FOUND);
    }

    if (competition.creatorId !== user.id) {
      throw new HttpException(
        'You are not authorized to delete this competition',
        HttpStatus.FORBIDDEN,
      );
    }

    await this.prisma.competition.delete({
      where: { id },
    });

    return { message: 'Competition deleted successfully' };
  }

  async joinCompetition(competitionId: string, user: User) {
    const competition = await this.prisma.community.findUnique({
      where: { id: competitionId },
    });

    if (!competition) {
      throw new HttpException('Competition not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.competition.update({
      where: { id: competitionId },
      data: {
        users: {
          connect: { id: user.id },
        },
      },
    });

    return { message: 'Joined competition successfully' };
  }

  async getCompetitionMembers(competitionId: string) {
    const competition = await this.prisma.competition.findUnique({
      where: { id: competitionId },
      include: {
        users: true,
      },
    });

    if (!competition) {
      throw new HttpException('Competition not found', HttpStatus.NOT_FOUND);
    }

    return { message: competition.users };
  }
}