import { IsNotEmpty, IsString } from 'class-validator';

export class CommunuityCreationDto {
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
