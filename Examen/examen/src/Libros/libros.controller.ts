import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {AutoresService} from '../Autores/autores.service';
import {AppService} from '../app.service';
import {LibrosService} from './libros.service';
import {Autor} from '../Autores/Interfaces/autor';
import {Libro} from './interfaces/libro';
import {LibroEntity} from './libro.entity';

@Controller('/api/libros')
export class LibrosController {

    constructor(private readonly librosService: LibrosService, private readonly appService: AppService) {

    }
    @Get('verLibros')
    ver(@Res() res, @Req() req){
        const tempNombre= req.signedCookies.nombreUsuario

        const arregloTemp= this.appService.bdLibros
        console.log("ARREGLO LIBROOOOOOOS", arregloTemp)
        return res.render('gestion/gLibro', {arregloTemp, tempNombre})
    }

    @Post('encontrar')
    encontrar(@Res() res, @Body() body,  @Req() req){
        const tempNombre=req.signedCookies.nombreUsuario
        const arregloHijos=this.librosService.encontrar(body.nombre, body.id)
        const id=body.id
        res.render('gestion/gLibro', {arregloHijos, tempNombre, id})
    }
    @Post('crear')
    crear(@Res() res, @Body() libro:LibroEntity, @Req() req){


        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", libro)
        this.librosService.crearLibro(libro);
        const arregloHijos= this.appService.bdLibros.filter(
            value => {
                return value.autor==libro.autor
            }
        )

        const id=libro.autor
        res.redirect('/api/autores/verHijos/'+libro.autor)
    }
    @Post('eliminar')
    eliminarLibro(@Res() res, @Body() body, @Req() req){


        this.librosService.eliminarLibro(body.id);
        const id=body.idAutor
        res.redirect('/api/autores/verHijos/'+id)
    }

}