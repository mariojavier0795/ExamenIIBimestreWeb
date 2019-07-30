import {IsDate, IsEmpty, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class PedidoUpdateDto {

    @IsEmpty()
    ipPedido:number;

    @IsNotEmpty()
    @IsString()
    nombreUsuario: string;



}