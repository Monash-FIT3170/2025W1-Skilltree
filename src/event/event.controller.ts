import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Get()
	async getAllEvents() {
		return this.eventService.getEvents();
	}

	@Get(':id')
	async getEventById(id: string) {
		return this.eventService.getEventById(id);
	}

	@Post()
	async createEvent(createEventDto: CreateEventDto) {
		return this.eventService.createEvent(createEventDto);
	}

	@Patch(':id')
	async updateEvent(id: string, createEventDto: Partial<CreateEventDto>) {
		return this.eventService.updateEvent(id, createEventDto);
	}

	@Delete(':id')
	async deleteEvent(id: string) {
		return this.eventService.deleteEvent(id);
	}
}
