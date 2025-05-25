import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  feedbackText: string;
}
