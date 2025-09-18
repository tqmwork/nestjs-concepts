import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class RecadosService {

  constructor(
    @InjectRepository(Recado)
    private readonly recadosRepository: Repository<Recado>,
  ) {}

  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recadosRepository.find();
  }

  async findOne(id: number) {
    const recado = await this.recadosRepository.findOne( { where: { id } });

    if (recado) return recado;

    this.throwNotFoundError();
  }

  async create(createRecadoDto: CreateRecadoDto) {
    

    
    const novoRecado = {
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };

    //this.recados.push(novoRecado);

    const recado = this.recadosRepository.create(novoRecado);

    return await this.recadosRepository.save(recado) ;
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto): Promise<Recado> {
    const recadoExistente = await this.recadosRepository.preload({
      id: Number(id),
      ...updateRecadoDto
    });
    console.log("recadoExistente", recadoExistente);
    if (!recadoExistente) {
      throw new NotFoundException(`Recado with id ${id} not found`);
    }

    return this.recadosRepository.save(recadoExistente);
  }

  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }
}
