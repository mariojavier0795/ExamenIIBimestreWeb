import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_pedido')
export class PedidoEntity {

    @PrimaryGeneratedColumn()
    ipPedido:number;

    @Column({
        type:'varchar',
        length: 70,
        name: 'nombre_usuario_pedido'
    })
    nombreUsuario:string;

    @Column({
        type:'varchar',
        length: 70,
        name: 'direccion_usuario_pedido',
        nullable: true
    })
    direccionUsuario:string;

    @Column({
        type:'varchar',
        name:'telefono_usuario_pedido',
        nullable:true
    })
    telefonoUsuario:string;

    @Column({
        type:'varchar',
        name:'ci_usuario_pedido'
    })
    ciUsuario:string;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'total_sin_impuesto_pedido'
    })
    totalSinImpuesto:number;

    @Column({
        type:'decimal',
        precision: 10,
        scale:2,
        name:'total_con_impuesto_pedido'
    })
    totalConImpuesto:number;

    @Column({
        type:'varchar',
        length:'13'
    })
    estadoPedido: 'Iniciado' | 'Por despachar' | 'Despachado' | 'Cancelado'


}