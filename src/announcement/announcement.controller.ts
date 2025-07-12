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
import { User } from '@prisma/client';
import { JwtGuard } from 'src/_utils/guards';
import { GetUser } from 'src/_utils/decorator';

@Controller('announcement')
export class AnnouncementController {
	constructor(private announcementService: AnnouncementService) {}

	@Post('')
	@UseGuards(JwtGuard)
	createAnnouncement(
		@GetUser() user: User,
		@Body() dto: AnnouncementCreationDto,
	) {
		return this.announcementService.createAnnouncement(user, dto);
	}

	@Get('community/:id')
	getAllAnnouncements(@Param('id') id: string) {
		return this.announcementService.getAllAnnouncements(id);

		
	}

	@Get(':id')
	getAnnouncementById(@Param('id') id: string) {
		return this.announcementService.getAnnouncementById(id);
	}

	@Delete(':id')
	@UseGuards(JwtGuard)
	deleteAnnouncement(@Param('id') id: string, @GetUser() user: User) {
		return this.announcementService.deleteAnnouncement(id, user);
	}
}
