import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

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
