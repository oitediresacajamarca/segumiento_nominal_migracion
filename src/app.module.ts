import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEntity } from './actividad.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MigracionNominalModule } from './migracion-nominal/migracion-nominal.module';
import { SeguimientoNominalEntity } from './seguimiento-nominal.entity';

@Module({
  imports: [
TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '.',
      database: 'risc_2030',
      entities: [SeguimientoNominalEntity,ActividadEntity],
      synchronize: false,
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      },
      extra: {
        "validateConnection": false,
        "trustServerCertificate": true,
        
      },

    }),
MigracionNominalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
