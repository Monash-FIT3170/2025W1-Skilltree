import {
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUUID,
	IsInt,
} from 'class-validator';

export class CreateSkillNodeDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsInt()
	xpPoint?: number;

	@IsUUID()
	skillTreeId: string;

	@IsOptional()
	@IsUUID()
	parentNodeId?: string;
}

export class UpdateSkillNodeDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsInt()
	xpPoint?: number;

	@IsOptional()
	@IsUUID()
	parentNodeId?: string;
}
