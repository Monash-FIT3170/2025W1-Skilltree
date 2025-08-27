import { IsOptional, IsString, IsArray } from 'class-validator';

export class UpdateSkillTreeDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsArray()
	tagIds?: string[];
}
