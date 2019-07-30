import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Client} from 'socket.io';

// ws://localhost:3001/websockets
@WebSocketGateway(3010,
    {
        namespace: '/websockets'
})
export class ClienteGateway {

    @WebSocketServer() server;


    constructor() {
        console.log(this.server);
    }

    //SERVIDOR
    @SubscribeMessage('adiviname')
    adiviname(cliente:Client | any, data: any){
        console.log("LLEGUE AL GATEWARY", data )
        cliente.broadcast.emit('hola', data)
        return  data
    }

    @SubscribeMessage('holaMundo')
    holaMundo(client: Client | any, data: any) {
        console.log(data);
        console.log('Nos hacen la peticion');
        //console.log("server: ",this.server);

        client.broadcast.emit('saludaron', data);// broadcast a todos los sockets del servidor
        return 'Hola: ' + data.nombre;
    }
    @SubscribeMessage('recarga')
    recargarPAgina(client: Client | any, data: any) {
        console.log("AQUI  VA A REGARGAR LA PAGINA")
        console.log(data);
        console.log('Nos hacen la peticion');
        //console.log("server: ",this.server);

        client.broadcast.emit('recarga', data);// broadcast a todos los sockets del servidor
        return 'Hola' ;
    }   @SubscribeMessage('recargaPedido')
    recargarPAginaPedido(client: Client | any, data: any) {
        console.log("AQUI  VA A REGARGAR LA PAGINA")
        console.log(data);
        console.log('Nos hacen la peticion');
        //console.log("server: ",this.server);

        client.broadcast.emit('recargaPedido', data);// broadcast a todos los sockets del servidor
        return 'Hola' ;
    }
    @SubscribeMessage('realizoPedido')
    findAll(client:Client | any,data:any){
        console.log("LLEGUE AL CLIENTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")
        client.broadcast.emit('comprado',data);
        return 'Hola '+ data.nombre;
    }

}