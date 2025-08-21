import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLeaderboardDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	metric: string;

	@IsString()
	@IsNotEmpty()
	communityId: string;
}
