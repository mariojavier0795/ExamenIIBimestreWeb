import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm/decorator/columns/Column";

@Entity('db_usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    idUsuario:number;

    @Column({
        type:'varchar',
        length: 25,
        name:'nombre_usuario'
    })
    nombreUsuario:string;

    @Column({
        type:'varchar',
        length: 50,
        name:'pass_usuario'
    })
    passUsuario:string;

    @Column({
        type:'varchar',
        length: 11,
        name:'tipo_usuario'
    })
    tipoUsuario: 'Admin' | 'Usuario' | 'Despachador';



}