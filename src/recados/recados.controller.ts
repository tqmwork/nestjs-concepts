import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

// • CRUD
//• Create•->• POST•-> Criar um recado
// • Read• ->• GET •->• Ler todos os • recados
// • Read•-> •GET •->• Ler apenas um recado
// • Update ->• PATCH •/• PUT->• Atualizar um recado
//• Delete ->• DELETE • ->• Apagar um recado
// • PATCH • é utilizado para atualizar dados de um recurso
//• PUT• é utilizado para atualizar um recurso inteiro
//•DTO -•Data Transfer Object -> Objeto de transferência de dados
// • DTO ->• Objeto simples -›•Validar dados /• Transormar dados

@Controller('recados')
export class RecadosController {
  recados: any;
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return `this route will return all recados. Limit=${limit}, Offset=${offset}`;
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') grdId: number) {
    return this.recadosService.findOne(grdId);
  }

  @Post()
  create(@Body() createRecadosDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadosDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This route will remove the recado with id: ${id}`;
  }
}
