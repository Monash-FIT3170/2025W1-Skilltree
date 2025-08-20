import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateLeaderboardEntryDto } from './dto/create-leaderboard-entry.dto'; 

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
  ) {
    return this.leaderboardService.createLeaderboard(dto);
  }

  // leaderboard entry methods

  @UseGuards(AuthGuard)
  @Post('entry')
  async createLeaderboardEntry(
    @Body() dto: CreateLeaderboardEntryDto,
  ) {
    return this.leaderboardService.createLeaderboardEntry(dto);
  }

  @UseGuards(AuthGuard)
  @Patch('entry/:leaderboardId/:userId')
  async updateLeaderboardEntry(
    @Param('leaderboardId') leaderboardId: string,
    @Param('userId') userId: string,
    @Body() updateData: { rank?: number; score?: number },
  ) {
    return this.leaderboardService.updateLeaderboardEntry(leaderboardId, userId, updateData);
  }

  
}