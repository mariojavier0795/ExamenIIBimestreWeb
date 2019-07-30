import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {LibroEntity} from '../Libros/libro.entity';



@Entity('bd_autor') //Podemos pasr el nombre de la tabla
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'nombres_autor',
    })
    nombres: string;

    @Column({
        type: 'varchar',
        length: 300,
        name: 'apellidos_autor',
    })
    apellidos: string


    @Column({
        type: 'date',
        name: 'fechaNacimiento',
    })
    fechaNacimiento: Date;

    @Column({
        type: 'int',
        name: 'numeroLibros',
    })
    numeroLibros: number;
    @Column({
        type: 'boolean',
        name: 'ecuatoriano',
    })
    ecuatoriano: boolean;

    @OneToMany( type => LibroEntity, libro => libro)
    libro: LibroEntity[]

}