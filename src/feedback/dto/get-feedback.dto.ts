import { IsNotEmpty, IsString } from 'class-validator';

export class GetFeedbackDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}