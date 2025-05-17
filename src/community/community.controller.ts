import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunuityCreationDto } from './dto';
import { User } from 'generated/prisma';
import { JwtGuard } from 'src/guards';
import { GetCommunityDto } from './dto/get-community.dto';
import { GetUser } from 'src/decorator';

@Controller('community')
export class CommunityController {
  constructor(private communityService: CommunityService) {}

  @Post('')
  @UseGuards(JwtGuard)
  createCommunity(@Body() dto: CommunuityCreationDto, @GetUser() user: User) {
    return this.communityService.createCommunity(user, dto);
  }

  @Get('')
  getAllCommunities() {
    return this.communityService.getAllCommunities();
  }

  @Get('')
  getCommunityById(@Query() dto: GetCommunityDto) {
    return this.communityService.getCommunityById(dto);
  }
}
