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
import { GetCommunityDto } from './dto/get-community.dto';
import { GetUser } from 'src/decorator';

@Controller('community')
export class CompetitionController {
  constructor(private communityService: CompetitionService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createCompetition(@Body() dto: CreateCompetitionDto, @GetUser() user: User) {
    return this.competitionService.createCompetition(user, dto);
  }

  @Get('')
  getAllCompetitions() {
    return this.communityService.getAllCompetitions();
  }

  @Get(':id')
  getCommunityById(@Param() dto: GetCommunityDto) {
    return this.competitionService.getCompetitionById(dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCompetition(@Param('id') id: string, @GetUser() user: User) {
    return this.communityService.deleteCompetition(id, user);
  }

  @Post('/join/:communityId')
  @UseGuards(JwtGuard)
  joinCommunity(
    @Param('communityId') communityId: string,
    @GetUser() user: User,
  ) {
    return this.communityService.joinCommunity(communityId, user);
  }

  @Post('/leave/:communityId')
  @UseGuards(JwtGuard)
  leaveCommunity(
    @Param('communityId') communityId: string,
    @GetUser() user: User,
  ) {
    return this.communityService.leaveCommunity(communityId, user);
  }

  @Get('/:communityId/members')
  getCommunityMembers(@Param('communityId') communityId: string) {
    return this.communityService.getCommunityMembers(communityId);
  }

  @Get('/:communityId/admins')
  getCommunityAdmins(@Param('communityId') communityId: string) {
    return this.communityService.getCommunityAdmins(communityId);
  }
}
