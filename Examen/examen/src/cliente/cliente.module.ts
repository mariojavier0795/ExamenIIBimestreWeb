import {Module} from '@nestjs/common';
import {ClienteGateway} from './cliente.gateway';

@Module({
    providers:[
        ClienteGateway
    ]
})
export class ClienteModule {

}