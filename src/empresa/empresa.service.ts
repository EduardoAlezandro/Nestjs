import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmpresaEntity } from './entities/empresa.entity';
import { EmpresaInterface } from './entities/empresa.interface';

@Injectable()
export class EmpresaService {

  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>
  ) { }
  create(empresainteface: EmpresaInterface): Observable<EmpresaInterface> {
    return from(this.empresaRepository.save(empresainteface));
  }

  findAll(): Observable<EmpresaInterface[]> {
    return from(this.empresaRepository.find());
  }

  findOne(id: number) {
    return;
  }

  update(id: number, empresainteface: EmpresaInterface): Observable<UpdateResult> {
    return from(this.empresaRepository.update(id, empresainteface));
  }

  remove(id: number): Observable<DeleteResult> {
    return from(this.empresaRepository.delete(id));
  }
}
