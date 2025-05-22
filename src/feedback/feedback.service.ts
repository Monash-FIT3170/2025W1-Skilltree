import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma';
import { GetFeedbackDto } from './dto/get-feedback.dto';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async createFeedback(dto: CreateFeedbackDto, user: User) {
    const feedback = await this.prisma.feedback.create({
      data: {
        userId: user.id,
        postId: dto.postId,
      },
    });

    return {
      message: feedback,
    };
  }

  async getAllFeedback() {
    const competitions = await this.prisma.feedback.findMany();

    return {
      message: competitions,
    };
  }

  async getFeedbackById(dto: GetFeedbackDto) {
    const feedback = await this.prisma.feedback.findUnique({
      where: { id: dto.id },
    });

    if (!feedback) {
      throw new HttpException('Feedback not found', HttpStatus.NOT_FOUND);
    }

    return { message: feedback };
  }

  async deleteFeedback(id: string, user: User) {
    const feedback = await this.prisma.feedback.findUnique({
      where: { id, userId: user.id },
    });

    if (!feedback) {
      throw new HttpException('Feedback not found', HttpStatus.NOT_FOUND);
    }

    if (feedback.userId !== user.id) {
      throw new HttpException(
        'You are not authorized to delete this feedback',
        HttpStatus.FORBIDDEN,
      );
    }

    await this.prisma.feedback.delete({
      where: { id },
    });

    return { message: 'Feedback deleted successfully' };
  }
}
