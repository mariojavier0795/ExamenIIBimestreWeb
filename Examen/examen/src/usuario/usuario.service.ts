import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity)
                private readonly _tragosRepository: Repository<UsuarioEntity>) {
    }

    buscarUsuario(parametrosBusqueda?):Promise<UsuarioEntity[]>{
        return this._tragosRepository.find(parametrosBusqueda);
    }


}