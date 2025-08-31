import {
	createParamDecorator,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common';

export const GetUserId = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): string => {
		const request = ctx.switchToHttp().getRequest();
		const userId = request.user?.id;

		console.log('REQUEST', request.user);

		if (!userId) {
			throw new UnauthorizedException('User not authenticated');
		}

		return userId;
	},
);
