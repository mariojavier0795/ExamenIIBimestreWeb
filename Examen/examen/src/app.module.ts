import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LibrosService} from './Libros/libros.service';
import {AutoresService} from './Autores/autores.service';
import {LibrosModule} from './Libros/libros.module';
import {AutoresModule} from './Autores/autores.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AutorEntity} from './Autores/autor.entity';
import {LibroEntity} from './Libros/libro.entity';
import {UsuarioEntity} from './usuario/usuario.entity';
import {PedidoEntity} from './pedido/pedido.entity';
import {UsuarioModule} from './usuario/usuario.module';
import {ClienteModule} from './cliente/cliente.module';
import {PedidoModule} from './pedido/pedido.module';

@Module({
  imports: [LibrosModule, AutoresModule, UsuarioModule, ClienteModule, PedidoModule,
    TypeOrmModule.forRoot({
      name: 'default', //Nombre por defecto del TYPEORM
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_examen',
      entities: [AutorEntity, LibroEntity, UsuarioEntity, PedidoEntity],
      synchronize: true,

      //  insecureAuth: true



    }),],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {

}
