import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
	ParseUUIDPipe,
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

	@Get()
	getAllSkillTrees() {
		return this.skilltreeService.getAllSkillTrees();
	}

	@Get(':id')
	getSkillTreeById(@Param('id', ParseUUIDPipe) id: string) {
		return this.skilltreeService.getSkillTreeById(id);
	}

	@UseGuards(JwtGuard)
	@Get('auth/all')
	getAllSkillTreesAuthenticated(@GetUser() user: User) {
		return this.skilltreeService.getAllSkillTrees(user);
	}

	@UseGuards(JwtGuard)
	@Get('auth/:id')
	getSkillTreeByIdAuthenticated(
		@Param('id', ParseUUIDPipe) id: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.getSkillTreeById(id, user);
	}

	@UseGuards(JwtGuard)
	@Post()
	createSkillTree(@Body() dto: CreateSkillTreeDto, @GetUser() user: User) {
		return this.skilltreeService.createSkillTree(dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Patch(':id')
	updateSkillTree(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() dto: UpdateSkillTreeDto,
		@GetUser() user: User,
	) {
		return this.skilltreeService.updateSkillTree(id, dto, user.id);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	deleteSkillTree(
		@Param('id', ParseUUIDPipe) id: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.deleteSkillTree(id, user.id);
	}

	@UseGuards(JwtGuard)
	@Post(':id/join')
	joinSkillTree(
		@Param('id', ParseUUIDPipe) skillTreeId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.joinSkillTree(skillTreeId, user.id);
	}

	@UseGuards(JwtGuard)
	@Delete(':id/leave')
	@HttpCode(HttpStatus.NO_CONTENT)
	leaveSkillTree(
		@Param('id', ParseUUIDPipe) skillTreeId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.leaveSkillTree(skillTreeId, user.id);
	}

	@UseGuards(JwtGuard)
	@Get(':id/members')
	getSkillTreeMembers(
		@Param('id', ParseUUIDPipe) skillTreeId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.getSkillTreeMembers(skillTreeId, user.id);
	}

	@UseGuards(JwtGuard)
	@Patch(':id/members/:userId')
	updateSkillTreeUser(
		@Param('id', ParseUUIDPipe) skillTreeId: string,
		@Param('userId', ParseUUIDPipe) userId: string,
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

	@UseGuards(JwtGuard)
	@Delete(':id/members/:userId')
	@HttpCode(HttpStatus.NO_CONTENT)
	removeUserFromSkillTree(
		@Param('id', ParseUUIDPipe) skillTreeId: string,
		@Param('userId', ParseUUIDPipe) userId: string,
		@GetUser() user: User,
	) {
		return this.skilltreeService.removeUserFromSkillTree(
			skillTreeId,
			userId,
			user.id,
		);
	}

	@UseGuards(JwtGuard)
	@Get('user/my-skilltrees')
	getUserSkillTrees(@GetUser() user: User) {
		return this.skilltreeService.getUserSkillTrees(user.id);
	}

	@UseGuards(JwtGuard)
	@Get('user/:userId/skilltrees')
	getUserSkillTreesById(@Param('userId', ParseUUIDPipe) userId: string) {
		return this.skilltreeService.getUserSkillTrees(userId);
	}
}
