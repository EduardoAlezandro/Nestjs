import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaEntity } from './entities/empresa.entity';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService],
  imports:[TypeOrmModule.forFeature([EmpresaEntity])





]
})
export class EmpresaModule {}
