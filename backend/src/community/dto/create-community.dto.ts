import { IsNotEmpty, IsString } from 'class-validator';

export class CommunuityCreationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  skill: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tags: string[];
}
