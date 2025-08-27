import { Module } from '@nestjs/common';
import { SkilltreeService } from './skilltree.service';
import { SkilltreeController } from './skilltree.controller';
import { JwtStrategy } from 'src/_utils/strategy';

@Module({
	providers: [SkilltreeService, JwtStrategy],
	controllers: [SkilltreeController],
	exports: [SkilltreeService],
})
export class SkilltreeModule {}
