import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	UseGuards,
	HttpStatus,
} from '@nestjs/common';
import { EventService } from './event.service';
import { JwtGuard } from '../_utils/guards/jwt.guard';
import { CreateEventDto } from './dto/create-event.dto';
import { GetUser } from '../_utils/decorator/get-user.decorator';
import { User } from '@prisma/client';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Get()
	async getAllEvents() {
		const res = await this.eventService.getAllEvents();
		return res;
	}

	@Get(':id')
	getEventById(@Param('id') eventId: string) {
		return this.eventService.getEventById(eventId);
	}

	@UseGuards(JwtGuard)
	@Post()
	createEvent(@Body() dto: CreateEventDto, @GetUser() user: User) {
		return this.eventService.createEvent(dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/join')
	joinEvent(@Param('id') eventId: string, @GetUser() user: User) {
		return this.eventService.joinEvent(eventId, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/leave')
	leaveEvent(@Param('id') eventId: string, @GetUser() user: User) {
		return this.eventService.leaveEvent(eventId, user.id);
	}

	@Get(':id/users')
	getUsers(@Param('id') eventId: string) {
		return this.eventService.getEventUsers(eventId);
	}
}
