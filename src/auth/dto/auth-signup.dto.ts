import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	IsDateString,
	IsDate,
} from 'class-validator';

export class AuthSignupDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	password: string;

	@IsNotEmpty()
	dateOfBirth: Date;
}
