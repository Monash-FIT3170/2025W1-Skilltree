import { Injectable } from '@nestjs/common';
import { CommonService } from './common/common.service';

@Injectable()
export class AppService {
  constructor(private readonly common: CommonService) {}

  getHello(): string {
    return 'The API is healthy and running.';
  }

  handleFileUpload(filename: string, newFileName: string): string {
    return this.common.handleFileUpload(filename, newFileName);
  }

  removeFile(filename: string): void {
    this.common.removeFile(filename);
  }
}
