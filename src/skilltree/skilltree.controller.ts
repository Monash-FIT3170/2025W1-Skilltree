import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/_utils/decorator';
import { JwtGuard } from 'src/_utils/guards';
import { SkilltreeService } from './skilltree.service';
import {
	CreateSkillTreeDto,
	UpdateSkillTreeDto,
	UpdateSkillTreeUserDto,
} from './dto';

@Controller('skilltree')
export class SkilltreeController {
	constructor(private readonly skilltreeService: SkilltreeService) {}

	

	/**
	 * Get all skill trees (public, restricted filtered out for unauthenticated users)
	 */
	@Get()
	getAllSkillTrees() {
		return this.skilltreeService.getAllSkillTrees();
	}

	/**
	 * Get a skill tree by its ID (public, restricted filtered out for unauthenticated users)
	 */
	@Get(':id')
	getSkillTreeById(@Param('id') id: string) {
		return this.skilltreeService.getSkillTreeById(id);
	}

	/**
	 * Get all skill trees (authenticated, includes restricted if user is verified)
	 */
	@UseGuards(JwtGuard)
	@Get('auth/all')
	getAllSkillTreesAuthenticated(@GetUser() user: User) {
		return this.skilltreeService.getAllSkillTrees(user);
	}

	/**
	 * Get a skill tree by its ID (authenticated, includes restricted if user is verified)
	 */
	@UseGuards(JwtGuard)
	@Get('auth/:id')
	getSkillTreeByIdAuthenticated(
		@Param('id') id: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.getSkillTreeById(id, user);
	}

	/**
	 * Create a new skill tree (authenticated)
	 */
	@UseGuards(JwtGuard)
	@Post()
	createSkillTree(@Body() dto: CreateSkillTreeDto, @GetUser() user: User) {
		return this.skilltreeService.createSkillTree(dto, user.id);
	}

	/**
	 * Update a skill tree (admin only)
	 */
	@UseGuards(JwtGuard)
	@Patch(':id')
	updateSkillTree(
		@Param('id') id: string,
		@Body() dto: UpdateSkillTreeDto,
		@GetUser() user: User,
	) {
		return this.skilltreeService.updateSkillTree(id, dto, user.id);
	}

	/**
	 * Delete a skill tree (admin only)
	 */
	@UseGuards(JwtGuard)
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	deleteSkillTree(@Param('id') id: string, @GetUser() user: User) {
		return this.skilltreeService.deleteSkillTree(id, user.id);
	}

	/**
	 * Join a skill tree (authenticated)
	 */
	@UseGuards(JwtGuard)
	@Post(':id/join')
	joinSkillTree(@Param('id') skillTreeId: string, @GetUser() user: User) {
		return this.skilltreeService.joinSkillTree(skillTreeId, user.id);
	}

	/**
	 * Leave a skill tree (authenticated, creator cannot leave their own tree)
	 */
	@UseGuards(JwtGuard)
	@Delete(':id/leave')
	leaveSkillTree(@Param('id') skillTreeId: string, @GetUser() user: User) {
		return this.skilltreeService.leaveSkillTree(skillTreeId, user.id);
	}

	/**
	 * Get all members of a skill tree (authenticated, must be a member)
	 */
	@UseGuards(JwtGuard)
	@Get(':id/members')
	getSkillTreeMembers(@Param('id') skillTreeId: string, @GetUser() user: User) {
		return this.skilltreeService.getSkillTreeMembers(skillTreeId, user.id);
	}

	/**
	 * Update a user's role or verification status in a skill tree (admin only)
	 */
	@UseGuards(JwtGuard)
	@Patch(':id/members/:userId')
	updateSkillTreeUser(
		@Param('id') skillTreeId: string,
		@Param('userId') userId: string,
		@Body() dto: UpdateSkillTreeUserDto,
		@GetUser() user: User,
	) {
		return this.skilltreeService.updateSkillTreeUser(
			skillTreeId,
			userId,
			dto,
			user.id,
		);
	}

	/**
	 * Remove a user from a skill tree (admin only, cannot remove creator)
	 */
	@UseGuards(JwtGuard)
	@Delete(':id/members/:userId')
	@HttpCode(HttpStatus.NO_CONTENT)
	removeUserFromSkillTree(
		@Param('id') skillTreeId: string,
		@Param('userId') userId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.removeUserFromSkillTree(
			skillTreeId,
			userId,
			user.id,
		);
	}

	/**
	 * Get all skill trees the authenticated user is a member of
	 */
	@UseGuards(JwtGuard)
	@Get('user/my-skilltrees')
	getUserSkillTrees(@GetUser() user: User) {
		return this.skilltreeService.getUserSkillTrees(user.id);
	}

	/**
	 * Get all skill trees a user (by ID) is a member of
	 */
	@UseGuards(JwtGuard)
	@Get('user/:userId/skilltrees')
	getUserSkillTreesById(@Param('userId') userId: string) {
		return this.skilltreeService.getUserSkillTrees(userId);
	}

	@UseGuards(JwtGuard)
	@Get('is-admin/:skillTreeId')
	isAdmin(
		@Param('skillTreeId') skillTreeId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.isAdmin(skillTreeId, user);
	}

	@UseGuards(JwtGuard)
	@Get('is-member/:skillTreeId')
	isMember(
		@Param('skillTreeId') skillTreeId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.isMember(skillTreeId, user);
	}
}
