import { IsString } from 'class-validator';

export class DeleteEventDto {
	@IsString()
	skillTreeId: string;
}
