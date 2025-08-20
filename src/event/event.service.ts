import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApiResponseType } from '../types';
import type { Event } from '@prisma/client';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
	constructor(private readonly prismaService: PrismaService) {}

	async getEvents(): Promise<ApiResponseType<Event[]>> {
		try {
			const events = await this.prismaService.event.findMany({
				include: {
					community: true,
				},
			});
			return { ok: true, message: events, status: 200 };
		} catch (error) {
			return { ok: false, message: error.message, status: 500 };
		}
	}

	async getEventById(id: string): Promise<ApiResponseType<Event>> {
		try {
			const event = await this.prismaService.event.findUnique({
				where: { id },
				include: {
					community: true,
				},
			});
			if (!event) {
				return { ok: false, message: 'Event not found', status: 404 };
			}
			return { ok: true, message: event, status: 200 };
		} catch (error) {
			return { ok: false, message: error.message, status: 500 };
		}
	}

	async createEvent(data: CreateEventDto): Promise<ApiResponseType<Event>> {
		const {
			name,
			description,
			communityId,
			experiencePayout,
			startTime,
			endTime,
		} = data;

		try {
			const event = await this.prismaService.event.create({
				data: {
					name,
					description,
					communityId,
					experiencePayout,
					startTime: new Date(startTime),
					endTime: new Date(endTime),
				},
			});
			return { ok: true, message: event, status: 201 };
		} catch (error) {
			return { ok: false, message: error.message, status: 500 };
		}
	}

	async updateEvent(
		id: string,
		data: Partial<CreateEventDto>,
	): Promise<ApiResponseType<Event>> {
		try {
			const event = await this.prismaService.event.update({
				where: { id },
				data: {
					...data,
					startTime: data.startTime ? new Date(data.startTime) : undefined,
					endTime: data.endTime ? new Date(data.endTime) : undefined,
				},
			});
			return { ok: true, message: event, status: 200 };
		} catch (error) {
			return { ok: false, message: error.message, status: 500 };
		}
	}

	async deleteEvent(id: string): Promise<ApiResponseType<Event>> {
		try {
			const event = await this.prismaService.event.delete({
				where: { id },
			});
			return { ok: true, message: event, status: 200 };
		} catch (error) {
			return { ok: false, message: error.message, status: 500 };
		}
	}
}
