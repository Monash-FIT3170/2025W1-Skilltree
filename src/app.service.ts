import { Injectable } from '@nestjs/common';
import { CommonService } from './common/common.service';

@Injectable()
export class AppService {
	constructor(private readonly common: CommonService) {}
}
