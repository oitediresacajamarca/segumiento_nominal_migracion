import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AppService } from './app.service';
import { SeguimientoNominalEntity } from './seguimiento-nominal.entity';
const hbase = require('hbase')
// Instantiate a new client


@Controller()
export class AppController {
  constructor( ) { }

  client = hbase({ host: '172.18.20.37', port: 8180 })

  @Get()
  async getHello(): Promise<any> {

    const myPromise = new Promise((resolve, reject) => {  
      let condition;  

      this.client
      .table('seguimiento')
      .row('41935041')
      .get('niño', function (err, cell) {

    
        console.log(cell)

        resolve(cell)


      })
    
  });

 let resp=await myPromise



      return resp;
  }

  
  
}
