import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createPessoaDto: CreatePessoaDto) {
    return await this.prisma.pessoa.create({
      data: createPessoaDto,
    });
  }

  async findAll() {
    return await this.prisma.pessoa.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return await this.prisma.pessoa.update({
      where: { id },
      data: updatePessoaDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.pessoa.delete({
      where: { id },
    });
  }
}
