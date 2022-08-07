import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEntity } from 'src/actividad.entity';
import { SeguimientoNominalEntity } from 'src/seguimiento-nominal.entity';
import { MigracionController } from './migracion/migracion.controller';

@Module({
  controllers: [MigracionController],
  imports:[TypeOrmModule.forFeature([SeguimientoNominalEntity,ActividadEntity])]
  
})
export class MigracionNominalModule {}
