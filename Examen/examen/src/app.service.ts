import { Injectable } from '@nestjs/common';
import {Autor} from './Autores/Interfaces/autor';

import {Libro} from './Libros/interfaces/libro';

@Injectable()
export class AppService {
  nombre:string="";
  id: number=0
  bdAutores: Autor[]=[]
  bdLibros: Libro[]=[]
  librosSeleccionados: Libro[]= []
  constructor(){
    const auxAutor: Autor={
      id: 2,
      nombre: 'Sofia',
      apellidos: 'Guerrero Burbano',
      ecuatoriano: true,
      fechaNacimiento: new Date(),
      numeroLibros: 34

    }


  }

  getHello(): string {
    return 'Hello World!';
  }
}
