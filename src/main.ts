import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';
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
	});
	app.useStaticAssets(join(__dirname, '..', 'uploads'), {
		prefix: '/static/',
	});

	// Serve the swagger.json file directly
	app.useStaticAssets(process.cwd(), {
		prefix: '/docs/',
		index: false,
	});

	// Setup Swagger using the custom swagger.json file
	try {
		const swaggerJsonPath = join(process.cwd(), 'swagger.json');
		const swaggerDocument = JSON.parse(
			fs.readFileSync(swaggerJsonPath, 'utf8'),
		);

		// Setup main API documentation
		SwaggerModule.setup('api', app, swaggerDocument, {
			customSiteTitle: 'SkillTree API Documentation',
			customCss: `
				.swagger-ui .topbar { display: none }
				.swagger-ui .info .title { color: #3b82f6; }
			`,
			customfavIcon: '/favicon.ico',
			swaggerOptions: {
				docExpansion: 'list',
				filter: true,
				showRequestDuration: true,
			},
		});

		console.log(
			'📚 Swagger documentation available at: http://localhost:3000/api',
		);
	} catch (error) {
		console.error('❌ Failed to load swagger.json:', error.message);

		// Fallback to auto-generated documentation
		const config = new DocumentBuilder()
			.setTitle('SkillTree API')
			.setDescription(
				'A comprehensive API for managing skill trees, users, and learning progress.',
			)
			.setVersion('1.0.0')
			.addBearerAuth(
				{
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
					name: 'JWT',
					description: 'Enter JWT token',
					in: 'header',
				},
				'JWT-auth',
			)
			.addServer('http://localhost:3000', 'Local development server')
			.build();

		const documentFactory = () => SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('api', app, documentFactory);

		console.log(
			'📚 Fallback Swagger documentation available at: http://localhost:3000/api',
		);
	}

	await app.listen(process.env.PORT || 3000);
}
bootstrap();
