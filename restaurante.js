import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Pedido from "./Pedido.js/"
import Cliente from "./cliente.js"
import PedidoF from "./pedidoF.js"
export default class restaurante{

    constructor(nombre,telefono,direccion = new Direccion,producto = new Producto, Pedido = new PedidoF){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.producto = producto
        this.Pedido = Pedido
    }

    registrarProductos(producto){
        this.producto.push(producto)
    }

    listarProdusctos(){
        this.listarProducto.forEch (Producto => {
            console.log(`${i +1 }${Producto.getDescripcion()}`);
        });
    }
    
    registrarPedido(pedidoF){
        this.pedidoF.push(pedidoF)
    }

    listarPedido(){
        this.listarPedidoF.forEch (PedidoF => {
            console.log(`${i +1 }${PedidoF.getProductos()}`);
        });
    }
}