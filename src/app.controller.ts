import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { log } from 'node:console';
import { diskStorage } from 'multer';
import { extname } from 'node:path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('remove')
  removeFile(): string {
    try {
      this.appService.removeFile('test.png');
      return 'File removed successfully';
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('icon'))
  uploadFile(@UploadedFile() file: Express.Multer.File): string {
    try {
      const filename = this.appService.handleFileUpload(
        file.originalname,
        'test.png',
      );
      return `File uploaded successfully: ${filename}`;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
