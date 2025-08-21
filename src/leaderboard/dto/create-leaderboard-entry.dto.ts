import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateLeaderboardEntryDto {
	@IsString()
	@IsNotEmpty()
	leaderboardId: string;

	@IsString()
	@IsNotEmpty()
	userId: string;

	@IsInt()
	@IsPositive()
	rank: number;

	@IsInt()
	@IsPositive()
	score: number;
}
