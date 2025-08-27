import { Role, VerificationStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class JoinSkillTreeDto {
	@IsString()
	skillTreeId: string;
}

export class UpdateSkillTreeUserDto {
	@IsOptional()
	@IsEnum(Role)
	role?: Role;

	@IsOptional()
	@IsEnum(VerificationStatus)
	verificationStatus?: VerificationStatus;
}
