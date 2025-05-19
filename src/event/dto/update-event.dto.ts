import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsNotEmpty()
  commmunityId: string;

  @IsString()
  @IsNotEmpty()
  experienceId: string;

  @IsOptional()
  @IsBoolean()
  rankedStatus?: boolean;

  @IsOptional()
  @IsInt()
  experiencePayout?: number;
}
