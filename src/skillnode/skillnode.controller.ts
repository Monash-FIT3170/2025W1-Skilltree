import {
	Controller,
	Get,
	Post,
	Patch,
	Delete,
	Param,
	Body,
	UseGuards,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { SkillNodeService } from './skillnode.service';
import { CreateSkillNodeDto, UpdateSkillNodeDto } from './dto/skillnode.dto';
import { JwtGuard } from '../_utils/guards/jwt.guard';
import { GetUser } from '../_utils/decorator/get-user.decorator';
// import { User } from '@prisma/client'; // Not needed, use type User = any

@Controller('skill-node')
export class SkillNodeController {
	constructor(private readonly skillNodeService: SkillNodeService) {}

	/**
	 * Get a skill node by its ID (public, but can include user context)
	 */
	@Get(':id')
	getSkillTreeNodeById(@Param('id') id: string, @GetUser() user?: any) {
		return this.skillNodeService.getSkillTreeNodeById(id, user);
	}

	/**
	 * Create a new skill node (admin only)
	 */
	@UseGuards(JwtGuard)
	@Post()
	createSkillNode(@Body() dto: CreateSkillNodeDto, @GetUser() user: any) {
		return this.skillNodeService.createSkillNode(dto, user.id);
	}

	/**
	 * Update a skill node (admin only)
	 */
	@UseGuards(JwtGuard)
	@Patch(':id')
	updateSkillNode(
		@Param('id') id: string,
		@Body() dto: UpdateSkillNodeDto,
		@GetUser() user: any,
	) {
		return this.skillNodeService.updateSkillNode(id, dto, user.id);
	}

	/**
	 * Delete a skill node (admin only)
	 */
	@UseGuards(JwtGuard)
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	deleteSkillNode(@Param('id') id: string, @GetUser() user: any) {
		return this.skillNodeService.deleteSkillNode(id, user.id);
	}

	/**
	 * Get all posts for a skill node (public, can include user context)
	 */
	@Get(':id/posts')
	getAllSkillNodePosts(@Param('id') id: string, @GetUser() user?: any) {
		return this.skillNodeService.getAllSkillNodePosts(id, user);
	}
}
