import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto';
import { User } from 'generated/prisma';
import { JwtGuard } from 'src/guards';
import { GetUser } from 'src/decorator';

@Controller('feedback')
export class FeedbackController {
  constructor(private competitionService: FeedbackService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createFeedback(@Body() dto: CreateFeedbackDto, @GetUser() user: User) {
    return this.competitionService.createFeedback(dto, user);
  }

  @Get('')
  getAllFeedback() {
    return this.competitionService.getAllFeedback();
  }

  @Get(':id')
  getFeedbackById(@Param() id: string) {
    return this.competitionService.getFeedbackById(id);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCompetition(@Param('id') id: string, @GetUser() user: User) {
    return this.competitionService.deleteFeedback(id, user);
  }
}
