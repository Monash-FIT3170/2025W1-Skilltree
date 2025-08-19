import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { ConfigService } from '@nestjs/config';
import { CommonService } from 'src/common/common.service';

@Module({
	controllers: [CommunityController],
	providers: [CommunityService, ConfigService, CommonService],
})
export class CommunityModule {}
