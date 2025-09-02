import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto {
	@IsOptional()
	@IsString()
	content?: string;

	@IsOptional()
	@IsString()
	proofMedia?: string;

	@IsOptional()
	@IsUUID()
	skillNodeId?: string;
}
