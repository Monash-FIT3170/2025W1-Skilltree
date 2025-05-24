import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  attachment?: string;

  @IsNotEmpty()
  @IsString()
  communityId: string;
}
