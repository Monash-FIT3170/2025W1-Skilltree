import { IsNotEmpty, IsString } from 'class-validator';

export class GetAnnouncementDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
