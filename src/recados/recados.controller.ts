import { Controller, Get, Param, NotFoundException, Post, Body } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

  private readonly recados = [`Recado 1`, `Recado 2`, `Recado 3`];
  @Get()
  findAll() {
    return this.recados;
  }

  @Get(':id')
  findOne(@Param('id') grdId: number) {
    const recado= this.recados[--grdId];
    if (!recado) {
      throw new NotFoundException(`Message not found for id: ${grdId}`);
    }
    return recado;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}



