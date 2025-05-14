import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommunityDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
