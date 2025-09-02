import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllEvents() {
		return this.prisma.event.findMany();
	}
}
