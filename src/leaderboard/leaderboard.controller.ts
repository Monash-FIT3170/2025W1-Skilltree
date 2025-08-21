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
import { JwtGuard } from '../_utils/guards/jwt.guard';
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

	@UseGuards(JwtGuard)
	@Post()
	async createLeaderboard(@Body() dto: CreateLeaderboardDto) {
		return this.leaderboardService.createLeaderboard(dto);
	}

	@UseGuards(JwtGuard)
	@Patch(':id')
	async updateLeaderboard(
		@Param('id') id: string,
		@Body() updateData: { name?: string; metric?: string },
	) {
		return this.leaderboardService.updateLeaderboard(id, updateData);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	async deleteLeaderboard(@Param('id') id: string) {
		return this.leaderboardService.deleteLeaderboard(id);
	}

	// leaderboard entry methods

	@UseGuards(JwtGuard)
	@Post('entry')
	async createLeaderboardEntry(@Body() dto: CreateLeaderboardEntryDto) {
		return this.leaderboardService.createLeaderboardEntry(dto);
	}

	@UseGuards(JwtGuard)
	@Patch('entry/:leaderboardId/:userId')
	async updateLeaderboardEntry(
		@Param('leaderboardId') leaderboardId: string,
		@Param('userId') userId: string,
		@Body() updateData: { rank?: number; score?: number },
	) {
		return this.leaderboardService.updateLeaderboardEntry(
			leaderboardId,
			userId,
			updateData,
		);
	}

	@UseGuards(JwtGuard)
	@Delete('entry/:leaderboardId/:userId')
	async deleteLeaderboardEntry(
		@Param('leaderboardId') leaderboardId: string,
		@Param('userId') userId: string,
	) {
		return this.leaderboardService.deleteLeaderboardEntry(
			leaderboardId,
			userId,
		);
	}

	@Get('entry/:leaderboardId/:userId')
	async getLeaderboardEntry(
		@Param('leaderboardId') leaderboardId: string,
		@Param('userId') userId: string,
	) {
		return this.leaderboardService.getLeaderboardEntry(leaderboardId, userId);
	}
}
