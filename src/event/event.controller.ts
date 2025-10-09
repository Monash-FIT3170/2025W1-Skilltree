import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { JwtGuard } from '../_utils/guards/jwt.guard';
import { CreateEventDto } from './dto/create-event.dto';
import { GetUser } from '../_utils/decorator/get-user.decorator';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Get()
	getAllEvents() {
		return this.eventService.getAllEvents();
	}

	@UseGuards(JwtGuard)
	@Post()
	createEvent(@Body() dto: CreateEventDto, @GetUser() user: any) {
		return this.eventService.createEvent(dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/join')
	joinEvent(@Param('id') eventId: string, @GetUser() user: any) {
		return this.eventService.joinEvent(eventId, user.id);
	}
}
