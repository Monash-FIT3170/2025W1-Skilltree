import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsString()
	@IsNotEmpty()
	proofMedia: string;

	@IsOptional()
	@IsUUID()
	skillNodeId?: string;
}
