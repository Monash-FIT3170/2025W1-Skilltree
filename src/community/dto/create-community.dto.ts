import { IsNotEmpty, IsString, IsArray, IsOptional, IsInt, Min } from 'class-validator';

export class CommunityCreationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tags: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  skill: string[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  communityExperience?: number;
}
