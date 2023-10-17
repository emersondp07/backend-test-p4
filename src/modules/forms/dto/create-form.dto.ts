import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateFormDto {
  @ApiProperty({
    example: 'Emerson',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'Dantas',
  })
  @IsString()
  lastname!: string;

  @ApiProperty({
    example: 'emerson.dantaspereira@hotmail.com',
  })
  @IsString()
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '44940088855',
  })
  @IsString()
  cpf!: string;

  @ApiProperty({
    example: '10-09-1996',
  })
  birthdate!: string;

  @ApiProperty({
    example: 'Masculino',
  })
  @IsString()
  gender!: string;
}

export class UpdateFormDto extends CreateFormDto {}
