import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
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

  @Get(':id')
  getCommunityById(@Param() dto: GetCommunityDto) {
    return this.communityService.getCommunityById(dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCommunity(@Param('id') id: string, @GetUser() user: User) {
    return this.communityService.deleteCommunity(id, user);
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
