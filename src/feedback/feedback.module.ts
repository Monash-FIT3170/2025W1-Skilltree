import { Module } from '@nestjs/common';
import { CompetitionController } from './feedback.controller';
import { CompetitionService } from './feedback.service';

@Module({
  controllers: [CompetitionController],
  providers: [CompetitionService]
})
export class CompetitionModule {}
