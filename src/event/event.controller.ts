import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { JwtGuard } from '../_utils/guards/jwt.guard';
import { CreateEventDto } from './dto/create-event.dto';
import { DeleteEventDto } from './dto/delete-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { GetUser } from '../_utils/decorator/get-user.decorator';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Get()
	getAllEvents() {
		return this.eventService.getAllEvents();
	}

	@Get(':id')
	getEventById(@Param('id') eventId: string) {
		return this.eventService.getEventById(eventId);
	}

	@UseGuards(JwtGuard)
	@Post()
	createEvent(@Body() dto: CreateEventDto, @GetUser() user: any) {
		return this.eventService.createEvent(dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/delete')
	deleteEvent(
		@Param('id') dto: DeleteEventDto,
		eventId: string,
		@GetUser() user: any,
	) {
		return this.eventService.deleteEvent(dto, eventId, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/join')
	joinEvent(@Param('id') eventId: string, @GetUser() user: any) {
		return this.eventService.joinEvent(eventId, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/leave')
	leaveEvent(@Param('id') eventId: string, @GetUser() user: any) {
		return this.eventService.leaveEvent(eventId, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/update')
	updateEvent(
		@Param('id') eventId: string,
		@Body() dto: UpdateEventDto,
		@GetUser() user: any,
	) {
		return this.eventService.updateEvent(eventId, dto, user.id);
	}

	@Get(':id/users')
	getUsers(@Param('id') eventId: string) {
		return this.eventService.getEventUsers(eventId);
	}
}
