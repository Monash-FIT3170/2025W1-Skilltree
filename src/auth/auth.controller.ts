import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto, ForgotPasswordDto } from './dto';
import { JwtGuard } from 'src/guards';
import { User } from 'generated/prisma';
import { GetUser } from '../decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() dto: SignInDto) {
    return this.authService.signin(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }

  @UseGuards(JwtGuard)
  @Patch('forgot-password')
  forgotPassword(@GetUser() user: User, @Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(user, dto);
  }
}
