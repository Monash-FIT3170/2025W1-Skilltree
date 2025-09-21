import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSkillTreeDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsArray()
	@IsOptional()
	tagIds?: string[];

	@IsString()
	@IsOptional()
	imageUrl?: string;
}
