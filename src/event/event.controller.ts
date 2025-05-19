import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
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

  @Get(':id')
  getEventById(@Param('id') id: string) {
    return this.eventService.getEventById(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  createEvent(@Body() dto: CreateEventDto, @GetUser() user: User) {
    return this.eventService.createEvent(dto,user);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateEvent(@Param('id') id: string, @Body() dto: CreateEventDto, @GetUser() user: User) {
    return this.eventService.updateEvent(id, dto, user);
  }
  
  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteEvent(@Param('id') id: string, @GetUser() user: User) {
    return this.eventService.deleteEvent(id, user);
  }
}
