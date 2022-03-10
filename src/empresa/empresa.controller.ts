import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { identity, Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpresaService } from './empresa.service';
import { EmpresaInterface } from './entities/empresa.interface';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() empresa: EmpresaInterface): Observable<EmpresaInterface>{
    return  this.empresaService.create(empresa);
  }

  @Get()
  findAll(): Observable<EmpresaInterface[]> {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.empresaService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() empresa: EmpresaInterface): Observable<UpdateResult> 
    {
    return this.empresaService.update(id, empresa);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<DeleteResult> {
    return this.empresaService.remove(id);
  }
}
