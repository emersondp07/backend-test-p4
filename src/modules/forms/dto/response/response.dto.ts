import { ApiResponseProperty } from '@nestjs/swagger';

export class ResponseCreatedForm {
  @ApiResponseProperty()
  name!: string;

  @ApiResponseProperty()
  lastname!: string;

  @ApiResponseProperty()
  email!: string;

  @ApiResponseProperty()
  cpf!: string;

  @ApiResponseProperty()
  birthdate!: Date;

  @ApiResponseProperty()
  gender!: string;
}
