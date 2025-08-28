import { Module } from '@nestjs/common';
import { SkillNodeController } from './skillnode.controller';
import { SkillNodeService } from './skillnode.service';

@Module({
  controllers: [SkillNodeController],
  providers: [SkillNodeService]
})
export class SkillnodeModule {}
