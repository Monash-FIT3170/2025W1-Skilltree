import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from '@nestjs/common';
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
			const user = await this.prisma.user.findUnique({ where: { id: userId } });
			const userPermitted = await this.prisma.skillTreeUser.findFirst({
				where: {
					userId: userId,
					skillTreeId: dto.skillTreeId,
				},
			});

			if (!user) {
				throw new InternalServerErrorException('User not found');
			}
			if (!userPermitted) {
				throw new InternalServerErrorException(
					'User is not a member of the skill tree',
				);
			}

			if (userPermitted.role !== 'ADMIN') {
				throw new InternalServerErrorException('Only admins can create events');
			}
			const event = await this.prisma.event.create({
				data: {
					title: dto.title,
					xpPayout: dto.xpPayout,
					startDate: dto.startDate,
					endDate: dto.endDate,
					users: {
						connect: [{ id: userId }],
					},
				},
			});
			return event;
		} catch (e) {
			console.error(e);
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

	async leaveEvent(eventId: string, userId: string) {
		try {
			return await this.prisma.event.update({
				where: { id: eventId },
				data: {
					users: { disconnect: { id: userId } },
				},
			});
		} catch {
			throw new InternalServerErrorException('Failed to leave event');
		}
	}

	async getEventById(eventId: string) {
		const event = await this.prisma.event.findUnique({
			where: { id: eventId },
			include: { users: true, winner: true },
		});
		if (!event) throw new NotFoundException('Event not found');
		return event;
	}

	async getEventUsers(eventId: string) {
		const event = await this.prisma.event.findUnique({
			where: { id: eventId },
			include: { users: true },
		});
		if (!event) throw new NotFoundException('Event not found');
		return event.users;
	}
}
