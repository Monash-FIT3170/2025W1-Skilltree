import { IsOptional, IsString, IsDateString, MinLength } from 'class-validator';

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsDateString({}, { message: 'Date of birth must be a valid date' })
	dateOfBirth?: string;

	@IsOptional()
	@IsString()
	pfp?: string;
}
