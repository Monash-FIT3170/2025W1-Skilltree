import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommunityDto {
  @IsString()
  @IsNotEmpty()
  profileImage: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tags: string[];

  @IsString()
  @IsNotEmpty()
  description: string;
}
