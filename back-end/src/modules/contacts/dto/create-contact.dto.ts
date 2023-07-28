import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateContactDto {
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
    description: 'O createdAt mostra quando o usuário foi criado',
    example: '2023-07-28T17:30:20.447Z',
  })
  @IsDate()
  readonly createdAt: Date;
}

// Um cliente poderá ter mais de um contato vinculado a ele; ( onde devo fazer )
