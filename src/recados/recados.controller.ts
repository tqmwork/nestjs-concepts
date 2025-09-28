import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { RecadosService } from './recados.service'; // ← Caminho relativo
import { CreateRecadoDto } from './dto/create-recado.dto'; // ← Caminho relativo  
import { UpdateRecadoDto } from './dto/update-recado.dto'; // ← Caminho relativo

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) grdId: number) {
    return this.recadosService.findOne(grdId);
  }

  @Post()
  create(@Body() createRecadosDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadosDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
