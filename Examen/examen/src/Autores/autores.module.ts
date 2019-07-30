import {Module} from '@nestjs/common';
import {AutoresController} from './autores.controller';
import {AutoresService} from './autores.service';
import {LibrosController} from '../Libros/libros.controller';
import {LibrosService} from '../Libros/libros.service';
import {AppService} from '../../../../Examen/examen/src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AutorEntity} from './autor.entity';
import {LibrosModule} from '../Libros/libros.module';

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [
                    AutorEntity
                ],
                'default'
            ), LibrosModule
        ],
        controllers: [AutoresController],
        providers: [AutoresService, AppService],
        exports:[AutoresService]

    }
)
export class AutoresModule {

}
