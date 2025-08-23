// update-community.dto.ts
import { IsOptional, IsString, IsArray, IsNotEmpty, Matches } from 'class-validator';

export class UpdateCommunityDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  // Optional slug change if URL can be changed
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'invalid new slug'
  })
  slug?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  description?: string;
}
