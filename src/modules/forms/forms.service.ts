import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { validaCPF } from '../../util/cpfValidate';
import { CreateFormDto, UpdateFormDto } from './dto/create-form.dto';
import { ResponseCreatedForm } from './dto/response/response.dto';

@Injectable()
export class FormsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createFormDto: CreateFormDto): Promise<ResponseCreatedForm> {
    const exist = await this.prismaService.form.findUnique({
      where: {
        cpf: createFormDto.cpf,
      },
    });

    const cpfValidate = validaCPF(createFormDto.cpf);
    if (cpfValidate === false) {
      throw new NotFoundException('CPF inválido!');
    }

    if (exist) {
      throw new NotFoundException('Cadastro já registrado');
    }

    const form = await this.prismaService.form.create({
      data: {
        ...createFormDto,
        birthdate: new Date(),
      },
    });

    return form;
  }

  async findAllForm(): Promise<ResponseCreatedForm[]> {
    const findAllForm = await this.prismaService.form.findMany();
    return findAllForm;
  }

  async update(
    id: number,
    { name, lastname, email, birthdate, cpf, gender }: UpdateFormDto,
  ): Promise<ResponseCreatedForm> {
    const exist = await this.prismaService.form.findUnique({
      where: {
        id,
      },
    });

    if (exist) {
      throw new NotFoundException('Cadastro já registrado');
    }

    const data: any = {};

    if (name) {
      data.name = name;
    }

    if (lastname) {
      data.lastname = lastname;
    }

    if (email) {
      data.email = email;
    }

    if (cpf) {
      data.cpf = cpf;
    }

    if (gender) {
      data.gender = gender;
    }

    if (birthdate) {
      data.role = new Date(birthdate);
    }

    const updated = await this.prismaService.form.update({
      where: {
        id,
      },
      data,
    });

    return updated;
  }

  async remove(cpf: string): Promise<ResponseCreatedForm> {
    const deletedUser = await this.prismaService.form.delete({
      where: { cpf },
    });

    return deletedUser;
  }
}
