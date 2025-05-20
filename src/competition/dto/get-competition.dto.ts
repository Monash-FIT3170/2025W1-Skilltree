import { IsNotEmpty, IsString } from 'class-validator';

export class GetCompetitionDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}