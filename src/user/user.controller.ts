import {
	Controller,
	Get,
	Put,
	Body,
	UseGuards,
	Param,
	HttpCode,
	HttpStatus,
	Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { UpdateUserDto, UserStatsDto } from './dto';
import { GetUser, GetUserId, Public } from '../_utils/decorator';
import { JwtGuard } from '../_utils/guards';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtGuard)
	@Get('me')
	async getMe(@GetUserId() userId: string): Promise<Omit<User, 'hash'>> {
		return this.userService.getMe(userId);
	}

	@UseGuards(JwtGuard)
	@Get('stats/me')
	async getMyStats(@GetUserId() userId: string): Promise<UserStatsDto> {
		return this.userService.getUserStats(userId);
	}

	@UseGuards(JwtGuard)
	@HttpCode(HttpStatus.OK)
	@Put('profile')
	async updateProfile(
		@GetUserId() userId: string,
		@Body() updateData: UpdateUserDto,
	): Promise<Omit<User, 'hash'>> {
		return this.userService.updateProfile(userId, updateData);
	}

	@Public()
	@Get()
	async getAllUsers(): Promise<Omit<User, 'hash' | 'email'>[]> {
		return this.userService.getAllUsers();
	}

	@Public()
	@Get('stats/:id')
	async getUserStats(@Param('id') id: string): Promise<UserStatsDto> {
		return this.userService.getUserStats(id);
	}

	@Public()
	@Get(':id')
	async getUserById(
		@Param('id') id: string,
	): Promise<Omit<User, 'hash' | 'email'>> {
		return this.userService.getUserById(id);
	}

	@Public()
	@Get(':id/following')
	async getUserFollowing(
		@Param('id') id: string,
	): Promise<Omit<User, 'hash' | 'email'>[]> {
		return this.userService.getUserFollowing(id);
	}

	@Public()
	@Get(':id/followers')
	async getUserFollowers(
		@Param('id') id: string,
	): Promise<Omit<User, 'hash' | 'email'>[]> {
		return this.userService.getUserFollowers(id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/follow')
	async followUser(
		@Param('id') id: string,
		@GetUser() user: User,
	): Promise<void> {
		return this.userService.followUser(id, user);
	}

	@UseGuards(JwtGuard)
	@Post(':id/unfollow')
	async unfollowUser(
		@Param('id') id: string,
		@GetUser() user: User,
	): Promise<void> {
		return this.userService.unfollowUser(id, user);
	}
}
