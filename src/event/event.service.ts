import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllEvents() {
		return this.prisma.event.findMany();
	}

	async createEvent(dto: CreateEventDto, userId: string) {
		try {
			const event = await this.prisma.event.create({
				data: {
					title: dto.title,
					xpPayout: dto.xpPayout ?? 0,
					startDate: dto.startDate,
					endDate: dto.endDate,
					winnerId: dto.winnerId ?? null,
					users: {
						connect: [
							{ id: userId },
							...(dto.userIds?.map((id) => ({ id })) ?? []),
						],
					},
				},
			});
			return event;
		} catch {
			throw new InternalServerErrorException('Failed to create event');
		}
	}

	async joinEvent(eventId: string, userId: string) {
		try {
			return await this.prisma.event.update({
				where: { id: eventId },
				data: {
					users: { connect: { id: userId } },
				},
			});
		} catch {
			throw new InternalServerErrorException('Failed to join event');
		}
	}
}
