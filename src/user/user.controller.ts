import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { GetUser } from 'src/_utils/decorator';
import { JwtGuard } from 'src/_utils/guards';

@Controller('user')
export class UserController {
	constructor(private authService: UserService) {}

	@UseGuards(JwtGuard)
	@Get('me')
	getMe(@GetUser() user: User) {
		return this.authService.getMe(user);
	}
}
