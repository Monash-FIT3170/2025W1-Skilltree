import {
	IsDateString,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class CreateEventDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsString()
	@IsNotEmpty()
	communityId: string;

	@IsNumber()
	@IsOptional()
	experiencePayout?: number;

	@IsDateString()
	@IsNotEmpty()
	startTime: string;

	@IsDateString()
	@IsNotEmpty()
	endTime: string;
}
