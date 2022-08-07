import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActividadEntity } from 'src/actividad.entity';
import { ActividadInterface } from 'src/actividad.interface';
import { SeguimientoNominalEntity } from 'src/seguimiento-nominal.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';

const hbase = require('hbase')
@Controller('migracion')
export class MigracionController {
    constructor(@InjectRepository(SeguimientoNominalEntity)
    private seguimiento_rep: Repository<SeguimientoNominalEntity>, @InjectRepository(ActividadEntity)
        private actividad_rep: Repository<ActividadEntity>) {

    }

    client = hbase({ host: 'localhost', port: 8180 })

    @Get('migra')
    async migra() {

        let actividades: ActividadInterface[] = await this.actividad_rep.find({ where: { ID_ACTIVIDAD: 207 } })


 
 actividades.map(async (actividad) => {


            let amigrar = await this.seguimiento_rep.find({ where: { id_ACTIVIDAD: actividad.ID_ACTIVIDAD } })


            amigrar.map(datamigra => {

                let fecha = ''
                if (datamigra.Fecha_Atencion == null) {
                    fecha = ''
                } else {

                    //   console.log(  new Date(datamigra.Fecha_Atencion))
                    fecha = '' + moment(new Date(datamigra.Fecha_Atencion)).format("DD/MM/YYYY")
                }

                this.client
                .table('seguimiento')
                .create('niño', function (err, success) {

                this.client
                    .table('seguimiento')
                    .row(datamigra.NUMERO_DOCUMENTO)
                    .put('niño:' + actividad.NOMBRE_ACTIVIDAD + ' FECHA ATENCION ', fecha, function (err, success) {

                        console.log(success)
                        console.log({...err,error:'fecha ataencion'})


                    })
                this.client
                    .table('seguimiento')
                    .row(datamigra.NUMERO_DOCUMENTO)
                    .put('niño:' + actividad.NOMBRE_ACTIVIDAD + ' IPRESS ', datamigra.renipress, function (err, success) {

                        console.log(success)
                        console.log({...err,error:'fecha ataencion'})


                    })
                })
                    

            })






        })

        /*const myPromise = new Promise((resolve, reject) => {  
            let condition;  
        
            this.client
            .table('seguimiento')
            .scan({
              
            }, function(err, rows:any[]){
              console.log(err, rows.length);
              resolve(rows),
              reject(err)
            });
          
        });
        
        
        
        let resp=await myPromise
        
        
                return await resp
                // return  await  this.seguimiento_rep.find({where:{id_ACTIVIDAD:207}})*/
        return { fin: 'fin' }
    }



}
