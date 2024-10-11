import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { Gender } from "../interfaces/user.interface";
import { Transform } from "class-transformer";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
    email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    phoneNumber: string;

    @IsEnum(Gender)
    @IsOptional()
    gender: Gender;
}
