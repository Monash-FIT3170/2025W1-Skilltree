import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { DeleteEventDto } from './dto/delete-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

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

			if (!user || !userPermitted) {
				throw new InternalServerErrorException('Validation failed');
			}

			if (!user || userPermitted.role !== 'ADMIN') {
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
		} catch {
			throw new InternalServerErrorException('Failed to create event');
		}
	}

	async deleteEvent(dto: DeleteEventDto, eventId: string, userId: string) {
		try {
			const user = await this.prisma.user.findUnique({ where: { id: userId } });
			const userPermitted = await this.prisma.skillTreeUser.findFirst({
				where: {
					userId: userId,
					skillTreeId: dto.skillTreeId,
				},
			});

			if (!user || !userPermitted) {
				throw new InternalServerErrorException('Validation failed');
			}

			if (!user || userPermitted.role !== 'ADMIN') {
				throw new InternalServerErrorException('Only admins can create events');
			}
			await this.prisma.event.delete({
				where: { id: eventId },
			});
			return { success: true };
		} catch {
			throw new InternalServerErrorException('Failed to delete event');
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
		try {
			return await this.prisma.event.findUnique({
				where: { id: eventId },
				include: { users: true, winner: true },
			});
		} catch {
			throw new InternalServerErrorException('Failed to fetch event');
		}
	}

	async updateEvent(eventId: string, dto: UpdateEventDto, userId: string) {
		try {
			const event = await this.prisma.event.findUnique({ where: { id: eventId } });
			if (!event) throw new InternalServerErrorException('Event not found');

			// require skillTreeId in dto to verify admin privileges (matches create/delete pattern)
			if (!dto.skillTreeId) {
				throw new InternalServerErrorException('skillTreeId is required to update event');
			}

			const user = await this.prisma.user.findUnique({ where: { id: userId } });
			const userPermitted = await this.prisma.skillTreeUser.findFirst({
				where: {
					userId: userId,
					skillTreeId: dto.skillTreeId,
				},
			});

			if (!user || !userPermitted) {
				throw new InternalServerErrorException('Validation failed');
			}

			if (!user || userPermitted.role !== 'ADMIN') {
				throw new InternalServerErrorException('Only admins can update events');
			}

			return await this.prisma.event.update({
				where: { id: eventId },
				data: {
					title: dto.title ?? undefined,
					xpPayout: dto.xpPayout ?? undefined,
					startDate: dto.startDate ? new Date(dto.startDate) : undefined,
					endDate: dto.endDate ? new Date(dto.endDate) : undefined,
				},
			});
		} catch (err) {
			throw new InternalServerErrorException('Failed to update event');
		}
	}

	async getEventUsers(eventId: string) {
		try {
			const event = await this.prisma.event.findUnique({
				where: { id: eventId },
				include: { users: true },
			});
			if (!event) throw new InternalServerErrorException('Event not found');
			return event.users;
		} catch {
			throw new InternalServerErrorException('Failed to fetch event users');
		}
	}
}
