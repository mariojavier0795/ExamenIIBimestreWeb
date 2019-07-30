export interface Pedido {
    ipPedido?:number;
    nombreUsuario:string;
    direccionUsuario:string;
    telefonoUsuario:string;
    ciUsuario:string;
    totalSinImpuesto:number;
    totalConImpuesto:number;
    estadoPedido: 'Iniciado' | 'Por despachar' | 'Despachado' | 'Cancelado'
}