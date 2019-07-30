import {Injectable} from '@nestjs/common';
import {AppService} from '../app.service';
import {Autor} from '../Autores/Interfaces/autor';
import {Libro} from './interfaces/libro';
import {LibroEntity} from './libro.entity';
import {getConnection, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class LibrosService {
    idnum:number=2;
    constructor(private readonly appService: AppService, @InjectRepository(LibroEntity)
    private readonly _libroRepository: Repository<LibroEntity> ){

    }
    crearLibro(nuevoLibro: LibroEntity): Promise<LibroEntity>{
        const objetoEntidad = this._libroRepository.create(nuevoLibro);
        return this._libroRepository.save(objetoEntidad)

    }

    async eliminarLibro(idLibro) {
        console.log('----------------------', idLibro)
        try {
            await getConnection().createQueryBuilder().delete().from(LibroEntity)
                .where("id = :id", {id: idLibro})
                .execute()
        } catch (e) {
            console.log(e)
        }

    }
    crear(nuevoLibro: Libro){
        nuevoLibro.id=this.idnum


        this.appService.bdLibros.push(nuevoLibro)
        this.idnum++
    }
   editar(libro:LibroEntity){
        return this._libroRepository.update(libro.id, libro)
    }
    getLibros(idAutor:number){
        return this._libroRepository.find({where: {autor: idAutor}})

    }
    encontrar(nombreTmp, id){
        // console.log(nombreTmp.toString())
        // const arreglo= this.appService.bdLibros.filter(
        //     value => {
        //         return value.nombre.toUpperCase().includes(nombreTmp.toString().toUpperCase()) && value.autorId==id
        //     }
        //
        // )
        // return arreglo
    }
    async buscar(parametrosBusqueda?){
       var listaLibros= await this._libroRepository.find()

            if (parametrosBusqueda) {
                var x=listaLibros.filter(
                    value => {

                        return value.nombre.toUpperCase().includes(parametrosBusqueda.toString().toUpperCase())

                    }
                )

                console.log("lista", x)

                return x
            } else {
                return this._libroRepository.find()
            }


    }
    eliminar(id:number){
        const index=this.appService.bdLibros.findIndex(
            value => {
                return value.id==id
            }


        )
        this.appService.bdLibros.splice(index,1)
        return this.appService.bdLibros.filter(
            value => {
                return
            }
        )
    }


}
