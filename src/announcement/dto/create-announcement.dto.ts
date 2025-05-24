import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AnnouncementCreationDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsUUID()
  @IsNotEmpty()
  communityId: string;
}
