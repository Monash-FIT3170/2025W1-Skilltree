import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateEventDto {
	@IsString()
	skillTreeId: string;

	@IsString()
	title: string;

	@IsOptional()
	@IsInt()
	xpPayout?: number;

	@IsDateString()
	startDate: string;

	@IsDateString()
	endDate: string;
}
