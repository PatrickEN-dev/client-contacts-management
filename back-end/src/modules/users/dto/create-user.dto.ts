import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Patrick' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Almeida' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 'patrick@mail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'O número de telefone deve ser um número válido no formato brasileiro.',
    example: '(14)991335454',
  })
  @Transform(({ value }: { value: string }) => value.replace(/[^\d]/g, ''), {
    toClassOnly: true,
  })
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @IsString()
  telephone: string;

  @ApiProperty({
    description:
      'A senha deve conter no mínimo 4 caracteres e deve ser uma string',
    example: 'secretpass',
  })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'O createdAt mostra quando o usuário foi criado',
    example: '2023-07-25',
  })
  @IsDate()
  createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
