import { Controller, Get, HttpStatus } from '@nestjs/common';
import { EventService } from './event.service';
import { TApiResponse } from 'src/types';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Get()
	async getAllEvents(): Promise<TApiResponse<any[]>> {
		const res = await this.eventService.getAllEvents();
		return { ok: true, message: res, status: HttpStatus.OK };
	}
}
