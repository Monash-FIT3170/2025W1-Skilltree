import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { JwtGuard } from 'src/guards';
import { CreateEventDto } from './dto';
import { GetUser } from 'src/decorator';
import { User } from 'generated/prisma';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @UseGuards(JwtGuard)
  @Post()
  createEvent(@Body() dto: CreateEventDto, @GetUser() user: User) {
    return this.eventService.createEvent(dto,user);
  }
}
