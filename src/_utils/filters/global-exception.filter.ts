import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpException,
	HttpStatus,
	Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { TApiResponse } from 'src/types';
import * as fs from 'fs';
import * as path from 'path';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger(GlobalExceptionFilter.name);
	private readonly logFilePath = path.join(process.cwd(), 'error.log');

	constructor() {
		// Reset the error log file on server start
		fs.writeFileSync(this.logFilePath, '');
	}

	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest();

		let status: number;
		let message: string;

		if (exception instanceof HttpException) {
			status = exception.getStatus();
			const exceptionResponse = exception.getResponse();

			if (typeof exceptionResponse === 'string') {
				message = exceptionResponse;
			} else if (
				typeof exceptionResponse === 'object' &&
				exceptionResponse !== null
			) {
				const responseObj = exceptionResponse as any;
				if (responseObj.message) {
					if (Array.isArray(responseObj.message)) {
						message = responseObj.message.join(', ');
					} else {
						message = responseObj.message;
					}
				} else {
					message = responseObj.error || 'An error occurred';
				}
			} else {
				message = 'An error occurred';
			}
		} else {
			status = HttpStatus.INTERNAL_SERVER_ERROR;
			message = 'Internal server error';

			const exceptionMessage =
				exception instanceof Error ? exception.message : String(exception);
			this.logger.error(
				`Unexpected error: ${exceptionMessage}`,
				exception instanceof Error ? exception.stack : undefined,
			);
		}

		const errorResponse: TApiResponse = {
			ok: false,
			message,
			status,
		};

		const logMessage = `${new Date().toISOString()} - ${request.method} ${request.url} - ${status} - ${message}`;
		this.logger.error(logMessage);

		// Append to error log file
		fs.appendFileSync(this.logFilePath, logMessage + '\n');

		response.status(status).json(errorResponse);
	}
}
