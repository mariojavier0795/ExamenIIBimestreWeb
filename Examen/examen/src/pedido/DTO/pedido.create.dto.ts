import {IsDate, IsEmpty, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class PedidoCreateDto {

    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;


    @IsNumber()
    precio:number

}