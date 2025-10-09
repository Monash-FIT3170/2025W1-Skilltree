import {
	IsString,
	IsOptional,
	IsInt,
	IsDateString,
	IsArray,
} from 'class-validator';

export class CreateEventDto {
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