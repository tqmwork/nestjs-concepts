import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    return await this.prisma.empresa.create({
      data: createEmpresaDto,
    });
  }

  async findAll() {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: number) {
    return this.prisma.empresa.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return await this.prisma.empresa.update({
      where: { id },
      data: updateEmpresaDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.empresa.delete({
      where: { id },
    });
  }
}
