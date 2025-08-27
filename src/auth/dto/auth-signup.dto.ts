import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	IsDateString,
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

	@IsDateString({}, { message: 'Date of birth must be a valid date' })
	@IsNotEmpty()
	dateOfBirth: string;
}
