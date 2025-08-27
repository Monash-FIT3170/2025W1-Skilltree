import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TApiResponse } from 'src/types';

@Injectable()
export class ResponseTransformInterceptor<T>
	implements NestInterceptor<T, TApiResponse<T>>
{
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<TApiResponse<T>> {
		const response = context.switchToHttp().getResponse();
		return next.handle().pipe(
			map((data) => {
				if (
					data &&
					typeof data === 'object' &&
					'ok' in data &&
					'status' in data
				) {
					return data as TApiResponse<T>;
				}
				const status = response.statusCode || 200;
				return { ok: true, message: data, status } as TApiResponse<T>;
			}),
		);
	}
}
