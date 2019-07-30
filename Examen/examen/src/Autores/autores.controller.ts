import {Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import {AppService} from '../app.service';
import {AutoresService} from './autores.service';
import {Autor} from './Interfaces/autor';
import {LibrosService} from '../Libros/libros.service';
import {LibroEntity} from '../Libros/libro.entity';
import {Libro} from '../Libros/interfaces/libro';

@Controller('/api/autores')
export class AutoresController {
    arregloAutores: Autor[]=[]
    constructor(private readonly autoresService: AutoresService, private readonly appService: AppService,
                private readonly librosService: LibrosService) {
        this.arregloAutores=appService.bdAutores
    }
    @Get('verHijos/:id')
    async ver(@Res() res, @Req() req, @Param() params){
        var arregloHijos=await this.librosService.getLibros(params.id)
        const id=params.id
        console.log(arregloHijos)
        res.render('gestion/gLibro', {arregloHijos, id})
    }
    @Post('buscarHijos/:id')
    async buscarHijos(@Res() res, @Req() req, @Param() params, @Body() body){
        var arregloHijos=await this.librosService.getLibros(params.id)
        const id=params.id
        arregloHijos= arregloHijos.filter(
            value => {
                return value.nombre.toUpperCase().includes(body.buscar.toUpperCase()) || value.nombreEditorial.toUpperCase().includes(body.buscar.toUpperCase())
            }
        )

        res.render('gestion/gLibro', {arregloHijos, id})
    }
    @Post('actualizar')
    async actualizar(@Res() res, @Req() req, @Param() params, @Body() body: LibroEntity){

        this.librosService.editar(body)
       return  res.redirect('/api/autores/verHijos/'+body.autor)
    }
    @Post('crear')
    crear(@Res() res, @Body() autor:Autor, @Req() req){

        autor.ecuatoriano=true;
        this.autoresService.crear(autor);
        const arregloAutores= this.appService.bdAutores
        console.log(autor)
        const tempNombre=req.signedCookies.nombreUsuario
        return res.render('gestion/gAutor',{tempNombre, arregloAutores} )

    }
    @Post('encontrar')
    encontrar(@Res() res, @Body() body,  @Req() req){
        const tempNombre=req.signedCookies.nombreUsuario
        if(tempNombre){
        const arregloAutores=this.autoresService.encontrar(body.nombre)
        res.render('gestion/gAutor', {arregloAutores, tempNombre})
        }else{
            res.render('login/login')
        }
    }

    // @Get('gestionHijos/:id')
    // gestionHijos(@Res() res, @Param() param, @Req() req){
    //
    //     const arregloHijos= this.appService.bdLibros.filter(
    //         value => {
    //             return value.autor==param.id
    //         }
    //     )
    //
    //     const id=param.id;
    //     this.appService.id=id;
    //     var x="s"
    //     console.log(arregloHijos)
    //    // return res.render('gestion/gLibro', {x, arregloHijos, id})
    //
    // }
    @Post('eliminar')
    eliminar(@Res() res, @Body() body,  @Req() req){



        const tempNombre=req.signedCookies.nombreUsuario

        const index= this.appService.bdAutores.findIndex(
            value => {
                console.log("valor", value.id, body.id)
                return value.id==body.id
            }
        );
        console.log("El indice que voy a eliminar es", index)

        this.appService.bdAutores.splice(index,1)

        const arregloAutores= this.appService.bdAutores
        return res.render('gestion/gAutor',{tempNombre, arregloAutores} )


    }

}