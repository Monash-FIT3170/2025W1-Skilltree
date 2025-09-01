import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class VerifyPostDto {
	@IsOptional()
	@IsString()
	feedbackText?: string;

	@IsOptional()
	@IsInt()
	@Min(1)
	multiplier?: number; // defaults to 1
}
