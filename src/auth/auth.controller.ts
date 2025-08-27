import {
	Controller,
	Post,
	Get,
	Body,
	UseGuards,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService, AuthResponse } from './auth.service';
import {
	AuthSignupDto,
	AuthSigninDto,
	ChangePasswordDto,
	ForgotPasswordDto,
} from './dto';
import { JwtGuard } from '../_utils/guards';
import { GetUser, GetUserId, Public } from '../_utils/decorator';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Public()
	@Post('signup')
	@HttpCode(HttpStatus.CREATED)
	async signup(@Body() dto: AuthSignupDto): Promise<AuthResponse> {
		return this.authService.signup(dto);
	}

	@Public()
	@Post('signin')
	@HttpCode(HttpStatus.OK)
	async signin(@Body() dto: AuthSigninDto): Promise<AuthResponse> {
		return this.authService.signin(dto);
	}

	@Get('profile')
	@UseGuards(JwtGuard)
	async getProfile(@GetUser() user: User): Promise<Omit<User, 'hash'>> {
		return this.authService.getProfile(user.id);
	}

	@Post('change-password')
	@UseGuards(JwtGuard)
	@HttpCode(HttpStatus.OK)
	async changePassword(
		@GetUserId() userId: string,
		@Body() dto: ChangePasswordDto,
	): Promise<{ message: string }> {
		return this.authService.changePassword(userId, dto);
	}

	@Public()
	@Post('forgot-password')
	@HttpCode(HttpStatus.OK)
	async forgotPassword(
		@Body() dto: ForgotPasswordDto,
	): Promise<{ message: string }> {
		return this.authService.forgotPassword(dto);
	}

	@Post('refresh-token')
	@UseGuards(JwtGuard)
	@HttpCode(HttpStatus.OK)
	async refreshToken(
		@GetUserId() userId: string,
	): Promise<{ access_token: string }> {
		return this.authService.refreshToken(userId);
	}
}
