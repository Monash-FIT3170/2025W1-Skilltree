import { IsNotEmpty, IsString, IsArray, IsOptional, Matches } from 'class-validator';

export class CommunityCreationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  //accept client-provided slug as an option; otherwise generate from `name` variable server-side in the service
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'invalid slug',
  })
  slug?: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tags: string[];

  @IsOptional()
  @IsString()
  description?: string;
}
