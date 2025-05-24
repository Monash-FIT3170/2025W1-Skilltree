import { Global, Module } from '@nestjs/common';
import { MulterService } from './multer.service';
import { MulterModule as NestMulterModule } from '@nestjs/platform-express';
import { multerOptions } from './multer.config'; // Corrected path

@Global()
@Module({
  imports: [
    NestMulterModule.registerAsync({
      useFactory: () => multerOptions,
    }),
  ],
  providers: [MulterService],
  exports: [NestMulterModule, MulterService],
})
export class MulterModule {}
