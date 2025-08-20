import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityCreationDto } from './dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/_utils/guards';
import { GetUser } from 'src/_utils/decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('community')
export class CommunityController {
  constructor(private communityService: CommunityService) {}

  @Post('')
  @UseGuards(JwtGuard)
  //Have put optional icon upload in controller, not dto. can change
  @UseInterceptors(FileInterceptor('icon'))
  createCommunity(
    @Body() dto: CommunityCreationDto,
    @GetUser() user: User,
    @UploadedFile() file?: Express.Multer.File, // optional file upload
  ) {
    return this.communityService.createCommunity(user, dto, file);
  }

  @Get('')
  getAllCommunities() {
    return this.communityService.getAllCommunities();
  }

  @Get(':id')
  getCommunityById(@Param('id') id: string) {
    return this.communityService.getCommunityById(id);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteCommunity(@Param('id') id: string, @GetUser() user: User) {
    return this.communityService.deleteCommunity(id, user);
  }

  @Post('/join/:communityId')
  @UseGuards(JwtGuard)
  joinCommunity(@Param('communityId') communityId: string, @GetUser() user: User) {
    return this.communityService.joinCommunity(communityId, user);
  }

  @Post('/leave/:communityId')
  @UseGuards(JwtGuard)
  leaveCommunity(@Param('communityId') communityId: string, @GetUser() user: User) {
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

  @Put(':id')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file')) // optional file upload for icon updates
  updateCommunity(
    @Param('id') id: string,
    @Body() dto: UpdateCommunityDto, // no icon field here
    @GetUser() user: User,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.communityService.updateCommunity(id, dto, user, file);
  }
}
