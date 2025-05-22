import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementCreationDto } from './dto';
import { User } from 'generated/prisma';
import { JwtGuard } from 'src/guards';
import { GetAnnouncementDto } from './dto/get-announcement.dto';
import { GetUser } from 'src/decorator';

@Controller('announcement')
export class AnnouncementController {
  constructor(private announcementService: AnnouncementService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createCommunity(@Body() dto: AnnouncementCreationDto, @GetUser() user: User) {
    return this.announcementService.createAnnouncement(user, dto);
  }

  @Get('')
  getAllAnnouncements() {
    return this.announcementService.getAllAnnouncements();
  }

  @Get(':id')
  getAnnouncementById(@Param() dto: GetAnnouncementDto) {
    return this.announcementService.getAnnouncementById(dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCommunity(@Param('id') id: string, @GetUser() user: User) {
    return this.announcementService.deleteAnnouncement(id, user);
  }
}
