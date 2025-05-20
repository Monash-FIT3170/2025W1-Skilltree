import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto';
import { User } from 'generated/prisma';
import { JwtGuard } from 'src/guards';
import { GetCompetitionDto } from './dto/get-competition.dto';
import { GetUser } from 'src/decorator';

@Controller('competition')
export class CompetitionController {
  constructor(private competitionService: CompetitionService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createCompetition(@Body() dto: CreateCompetitionDto, @GetUser() user: User) {
    return this.competitionService.createCompetition(dto);
  }

  @Get('')
  getAllCompetitions() {
    return this.competitionService.getAllCompetitions();
  }

  @Get(':id')
  getCompetitionById(@Param() dto: GetCompetitionDto) {
    return this.competitionService.getCompetitionById(dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCompetition(@Param('id') id: string, @GetUser() user: User) {
    return this.competitionService.deleteCompetition(id, user);
  }

  @Post('/join/:competitionId')
  @UseGuards(JwtGuard)
  joinCompetition(@Param('competitionId') competitionId: string, @GetUser() user: User,) {
    return this.competitionService.joinCompetition(competitionId, user);
  }

  @Get('/:competitionId/members')
  getCompetitionMembers(@Param('competitionId') communityId: string) {
    return this.competitionService.getCompetitionMembers(communityId);
  }
}
