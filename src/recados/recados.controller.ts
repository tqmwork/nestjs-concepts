import { Controller, Get, Param, NotFoundException, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

  private readonly recados = [`Recado 1`, `Recado 2`, `Recado 3`];
  
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return `this route will return all recados. Limit=${limit}, Offset=${offset}`;
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return { id, ...body };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This route will remove the recado with id: ${id}`;
  }
}

