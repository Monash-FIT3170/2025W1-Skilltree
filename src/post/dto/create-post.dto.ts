import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsUrl()
	@IsOptional()
	attachmentUrl?: string;

	@IsString()
	@IsNotEmpty()
	communityId: string;

	@IsString()
	@IsOptional()
	skillTreeNodeId?: string;
}
