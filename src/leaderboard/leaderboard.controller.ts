import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { GetUser } from '../_utils/decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private leaderboardService: LeaderboardService) {}

  @Get()
  async getLeaderboards(@Query('communityId') communityId: string) {
    return this.leaderboardService.getLeaderboards(communityId);
  }

  @Get(':id')
  async getLeaderboardById(@Param('id') id: string) {
    return this.leaderboardService.getLeaderboardById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async createLeaderboard(
    @Body() dto: CreateLeaderboardDto,
    @GetUser() user: User,
  ) {
    return this.leaderboardService.createLeaderboard(dto);
  }
}