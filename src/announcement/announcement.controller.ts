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
import { GetUser } from 'src/decorator';

@Controller('announcement')
export class AnnouncementController {
  constructor(private announcementService: AnnouncementService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createAnnouncement(@GetUser() user: User, @Body() dto: AnnouncementCreationDto) {
    return this.announcementService.createAnnouncement(user, dto);
  }

  @Get('')
  getAllAnnouncements(@Param('id') communityId: string) {
    return this.announcementService.getAllAnnouncements(communityId);
  }

@Get(':id')
  getAnnouncementById(@Param() id: string) {
  return this.announcementService.getAnnouncementById(id);
}

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteAnnouncement(@Param('id') id: string, @GetUser() user: User) {
    return this.announcementService.deleteAnnouncement(id, user);
  }
}
