import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'patrick@mail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'A senha deve conter no mínimo 8 caracteres e deve ser uma string',
    example: 'secretpass',
  })
  @IsString()
  password: string;
}
