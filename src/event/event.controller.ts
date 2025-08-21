import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
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
	async getEventById(@Param('id') id: string) {
		return this.eventService.getEventById(id);
	}

	@Post()
	async createEvent(@Body() createEventDto: CreateEventDto) {
		return this.eventService.createEvent(createEventDto);
	}

	@Patch(':id')
	async updateEvent(
		@Param('id') id: string,
		@Body() createEventDto: Partial<CreateEventDto>,
	) {
		return this.eventService.updateEvent(id, createEventDto);
	}

	@Delete(':id')
	async deleteEvent(@Param('id') id: string) {
		return this.eventService.deleteEvent(id);
	}
}
