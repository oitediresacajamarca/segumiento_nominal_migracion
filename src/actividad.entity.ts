import { Column, ViewEntity } from "typeorm";

@ViewEntity('ACTIVIDAD')
export class ActividadEntity {
    @Column()
    ID_ACTIVIDAD: number;
    @Column()
    NOMBRE_ACTIVIDAD: string;
    @Column()
    DESCRIPCION_ACTIVIDAD: string;
    @Column()
    ID_INDICADOR: string;
    @Column()
    ID_ESTRATEGIA: string;
    @Column()
    TIPO: string;
    @Column()
    SEGUIMIENTO: string;
    @Column()
    ID_CURSO_DE_VIDA: string;
    @Column()
    ID_SUB_CURSO_DE_VIDA: string;
    @Column()
    TIPO_META: string

}
