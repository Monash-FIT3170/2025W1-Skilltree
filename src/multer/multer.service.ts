import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { multerOptions } from './multer.config'; // Corrected path
import * as fs from 'fs/promises';
import { join } from 'path';

const UPLOAD_DIR = './uploads';

@Injectable()
export class MulterService {
  private readonly options: MulterOptions;

  constructor() {
    this.options = multerOptions;
  }

  getStorageDestination(): string | undefined {
    if (
      typeof this.options.storage !== 'function' &&
      this.options.storage?.getDestination
    ) {
      return (this.options.storage as any)?.destination || './uploads';
    }
    return './uploads';
  }

  getFileSizeLimit(): number | undefined {
    return this.options.limits?.fileSize;
  }

  async handleFileUpload(
    filename: string,
    file: string,
  ): Promise<{
    filePath: string;
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
  }> {
    if (!file || typeof file !== 'string') {
      throw new InternalServerErrorException(
        'File not provided or is not a valid string.',
      );
    }

    const matches = file.match(/^data:(image\/png);base64,(.+)$/);
    if (!matches) {
      throw new InternalServerErrorException('Invalid data URL format.');
    }
    const mimeType = matches[1];
    const base64Data = matches[2];

    const pngFilename = filename.endsWith('.png')
      ? filename
      : `${filename}.png`;
    const filePath = join(UPLOAD_DIR, pngFilename);

    try {
      const isExists = await fs.readFile(filePath);
      if (isExists) {
        await this.removeFile(pngFilename);
      }
    } catch (error) {
      // If the file does not exist, continue without failing.
    }

    try {
      const buffer = Buffer.from(base64Data, 'base64');
      await fs.writeFile(filePath, buffer);

      return {
        filePath,
        filename: pngFilename,
        originalName: pngFilename,
        mimeType,
        size: buffer.length,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Could not save file. Error: ${error.message}`,
      );
    }
  }

  async removeFile(filename: string): Promise<{ message: string }> {
    if (!filename) {
      throw new InternalServerErrorException('Filename not provided.');
    }
    const filePath = join(UPLOAD_DIR, filename);

    try {
      await fs.access(filePath); // Check if file exists
    } catch (error) {
      throw new NotFoundException(`File "${filename}" not found.`);
    }

    try {
      await fs.unlink(filePath);
      return { message: `File "${filename}" removed successfully.` };
    } catch (error) {
      throw new InternalServerErrorException(
        `Could not remove file "${filename}". Error: ${error.message}`,
      );
    }
  }
}
