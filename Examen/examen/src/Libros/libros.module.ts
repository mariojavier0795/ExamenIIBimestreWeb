import {Module} from '@nestjs/common';
import {AutoresController} from '../Autores/autores.controller';
import {AutoresService} from '../Autores/autores.service';
import {LibrosController} from './libros.controller';
import {LibrosService} from './libros.service';
import {AppService} from '../app.service';
import {AutorEntity} from '../Autores/autor.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {LibroEntity} from './libro.entity';

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    LibroEntity
                ],
                'default'
            )
        ],
        controllers: [LibrosController],
        providers: [LibrosService, AppService],
        exports:[LibrosService]

    }
)
export class LibrosModule {

}