import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateFormDto, UpdateFormDto } from './dto/create-form.dto';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async create(
    @Body() createFormDto: CreateFormDto,
  ): Promise<{ message: string }> {
    await this.formsService.create(createFormDto);

    return { message: 'Cadastro criado com sucesso!' };
  }

  @Get()
  async findAll(): Promise<any> {
    const allForms = this.formsService.findAllForm();
    return allForms;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFormDto: UpdateFormDto,
  ): Promise<{ message: string }> {
    await this.formsService.update(+id, updateFormDto);

    return { message: 'Atualizado com sucesso!' };
  }

  @Delete(':cpf')
  async remove(@Query('cpf') cpf: string): Promise<{ message: string }> {
    await this.formsService.remove(cpf);

    return { message: 'Formulario foi excluido com sucesso!' };
  }
}
