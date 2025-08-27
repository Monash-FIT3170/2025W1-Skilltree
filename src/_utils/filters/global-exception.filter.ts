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

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger(GlobalExceptionFilter.name);

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

		this.logger.error(
			`${request.method} ${request.url} - ${status} - ${message}`,
		);

		response.status(status).json(errorResponse);
	}
}
