import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { GlobalExceptionFilter, ResponseTransformInterceptor } from './_utils';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	// Global pipes
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
			forbidNonWhitelisted: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
		}),
	);

	// Global filters and interceptors
	app.useGlobalFilters(new GlobalExceptionFilter());
	app.useGlobalInterceptors(new ResponseTransformInterceptor());

	app.use(json({ limit: '50mb' }));
	app.use(urlencoded({ extended: true, limit: '50mb' }));
	app.enableCors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
	});

	const document = JSON.parse(
		(await readFile(join(process.cwd(), 'swagger.json'))).toString('utf-8'),
	);
	SwaggerModule.setup('api', app, document);

	console.log(
		'📚 Fallback Swagger documentation available at: http://localhost:3001/api',
	);
	console.log('🔌 API endpoints available at: http://localhost:3001/');

	await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
