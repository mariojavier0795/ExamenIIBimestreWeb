import {Libro} from '../../Libros/interfaces/libro';

export interface AutorLibro {
    id?: number,
    nombre: string,
    apellidos: string,
    fechaNacimiento: Date,
    numeroLibros: number,
    ecuatoriano: boolean,
    libros: Libro[]
}