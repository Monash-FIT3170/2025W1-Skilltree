import { Module } from '@nestjs/common';
import { SkillnodeController } from './skillnode.controller';
import { SkillnodeService } from './skillnode.service';

@Module({
  controllers: [SkillnodeController],
  providers: [SkillnodeService]
})
export class SkillnodeModule {}
