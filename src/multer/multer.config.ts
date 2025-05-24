import { HttpException, HttpStatus } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname, basename } from 'path';
import * as fs from 'fs';

const UPLOAD_DIR = './uploads';

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const multerOptions: MulterOptions = {
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true);
    } else {
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  storage: diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, UPLOAD_DIR);
    },
    filename: (req: any, file: any, cb: any) => {
      if (!req.body.filename) {
        return cb(
          new HttpException('Filename is required', HttpStatus.BAD_REQUEST),
          false,
        );
      }
      const safeName = basename(req.body.filename, extname(req.body.filename));
      const finalName = `${safeName}${extname(file.originalname)}`;
      cb(null, finalName);
    },
  }),
};
