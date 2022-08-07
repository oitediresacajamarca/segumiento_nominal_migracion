import { Column, ViewEntity } from "typeorm";

@ViewEntity('SEGUIMIENTO_NOMINAL_NINIO')
export class SeguimientoNominalEntity {

    @Column()
    NUMERO_DOCUMENTO: string;
    @Column()
    id_ACTIVIDAD:     number;
    @Column()
    id_CURSO_DE_VIDA: number;
    @Column()
    EDAD:             number;
    @Column()
    TIPO_EDAD:        string;
    @Column()
    renipress:        string;
    @Column()
    CUMPLE:           string;
    @Column()
    MES:              number;
    @Column()
    anio:             number;
    @Column()
    Fecha_Atencion:   Date;
    @Column()
    Id_cita:          string;

}
