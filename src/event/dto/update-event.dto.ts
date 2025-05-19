import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  commmunityId: string;

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
