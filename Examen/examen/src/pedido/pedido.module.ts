import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PedidoEntity} from "./pedido.entity";
import {PedidoController} from './pedido.controller';
import {PedidoService} from './pedido.service';
import {AutorEntity} from '../Autores/autor.entity';
import {LibroEntity} from '../Libros/libro.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            PedidoEntity, AutorEntity, LibroEntity
        ],'default')

    ],
    controllers:[PedidoController],
    providers:[PedidoService],
    exports:[PedidoService]
})
export class PedidoModule {
}