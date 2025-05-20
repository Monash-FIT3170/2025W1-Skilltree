import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateCompetitionDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  communityId: string;

  @IsOptional()
  @IsNotEmpty()
  experienceId: string;

  @IsOptional()
  @IsBoolean()
  rankedStatus?: boolean;

  @IsOptional()
  @IsInt()
  experiencePayout?: number;
}
