import {Injectable} from '@nestjs/common';
import {AppService} from '../app.service';
import {Autor} from './Interfaces/autor';
import {LibroEntity} from '../Libros/libro.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AutorEntity} from './autor.entity';

@Injectable()
export class AutoresService {
    idnum:number=3;
    constructor(private readonly appService: AppService,@InjectRepository(AutorEntity)
    private readonly _autorRepositroy: Repository<AutorEntity>){

    }
    crear(nuevoAutor: Autor){
        nuevoAutor.id=this.idnum

        this.appService.bdAutores.push(nuevoAutor)
        this.idnum++
    }
    autenticar(user: String, password: String){

    }
    async buscar(parametrosBusqueda?){
        var listaLibros= await this._autorRepositroy.find()

        if (parametrosBusqueda) {
            var x=listaLibros.filter(
                value => {

                    return value.nombres.toUpperCase().includes(parametrosBusqueda.toString().toUpperCase())

                }
            )

            console.log("lista", x)

            return x
        } else {
            return this._autorRepositroy.find()
        }


    }
    encontrar(nombreTmp){
        console.log(nombreTmp.toString())
        const arreglo= this.appService.bdAutores.filter(
            value => {
                return value.nombre.toUpperCase().includes(nombreTmp.toString().toUpperCase())
            }

        )
        return arreglo
    }
}