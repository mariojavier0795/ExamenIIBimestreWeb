import {Body, Controller, Get, Post, Req, Res, Session} from '@nestjs/common';
import {AppService} from './app.service';
import {Usuario} from './usuario/interfaces/usuario';


@Controller('/api')
export class AppController {

    constructor(private readonly appService: AppService) {
    }

    @Get('/login')
    login(@Res() res,) {
        //  console.log("hdflksdlsfjlskdj")


        res.render('login/login')

    }

    @Get('salir')
    salir(@Res() res) {
        res.clearCookie('nombreUsuario')
        return res.render('login/login')
    }

    @Get('crearAutor')
    crearVista(@Res() res, @Req() req) {
        const tempNombre = req.signedCookies.nombreUsuario
        if (tempNombre) {
            return res.render('gestion/crearAutor', {tempNombre})
        } else {
            return res.render('login/login')
        }
    }

    @Post('crearLibro')
    crearVistaLibro(@Res() res, @Req() req, @Body() body) {
        const tempNombre = req.signedCookies.nombreUsuario
        const id = body.id
        return res.render('gestion/crearLibro', {tempNombre, id})
    }

    @Get('gestionarAutores')
    gestionarAutores(@Res() res, @Req() req) {

        const arregloAutores = this.appService.bdAutores
        const tempNombre = req.signedCookies.nombreUsuario;
        if (tempNombre) {
            console.log("mi nombre esssss", tempNombre)
            this.appService.nombre = "NADAAA"
            return res.render('gestion/gAutor', {tempNombre, arregloAutores})
        } else {
            return res.render('login/login')
        }
    }

    @Post('entrar')
    entrar(@Res() res, @Body() nombre, @Req() req) {
        console.log(req.signedCookies.nombre)
        this.appService.nombre = nombre.nombre;
        const tempNombre = this.appService.nombre;



            // res.cookie(
            //     "nombreUsuario", nombre.nombre, {
            //         signed: true
            //     }
            // )
            // console.log(this.appService.nombre)
            //

            return res.render('menu/menu', {tempNombre})

    }



}
