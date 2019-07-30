import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";
import {UsuarioService} from "./usuario.service";
import {PedidoModule} from '../pedido/pedido.module';
import {PedidoEntity} from '../pedido/pedido.entity';
import {LibrosService} from '../Libros/libros.service';
import {LibrosModule} from '../Libros/libros.module';
import {AutoresModule} from '../Autores/autores.module';

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                UsuarioEntity
            ],
            'default'
        ), PedidoModule, LibrosModule, AutoresModule
    ],
    controllers:[UsuarioController],
    providers:[UsuarioService],
    exports:[]
})
export class UsuarioModule {

}