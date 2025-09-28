import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecadosService {
  constructor(private readonly prisma: PrismaService) {}

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  async findAll() {
    return await this.prisma.recado.findMany();
  }

  async findOne(id: number) {
    const recado = await this.prisma.recado.findUnique({
      where: { id },
    });

    if (recado) return recado;

    this.throwNotFoundError();
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const novoRecado = {
      ...createRecadoDto,
      lido: false, // Agora é boolean
      data: new Date(),
    };

    return await this.prisma.recado.create({
      data: novoRecado,
    });
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    // Verifica se o recado existe
    const recadoExistente = await this.prisma.recado.findUnique({
      where: { id },
    });

    if (!recadoExistente) {
      throw new NotFoundException(`Recado with id ${id} not found`);
    }

    return await this.prisma.recado.update({
      where: { id },
      data: updateRecadoDto,
    });
  }

  async remove(id: number) {
    // Verifica se o recado existe
    const recadoExistente = await this.prisma.recado.findUnique({
      where: { id },
    });

    if (!recadoExistente) {
      throw new NotFoundException(`Recado with id ${id} not found`);
    }

    return await this.prisma.recado.delete({
      where: { id },
    });
  }
}