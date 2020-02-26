import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Pedido from "./pedido.js"
import Cliente from "./cliente.js";

export default class PedidoF {
    constructor(fecha = new Fecha, hora = new Tiempo, Pedido = new Pedido, cliente = new Cliente){
        this.fecha = fecha
        this.hora = hora
        this.Pedido = Pedido
        this.cliente = cliente
        this.elementos = new Array
    }

    getResumen() {
       return`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.Pedido.cantidad} productos - Total: $${(this.elementoPedido.producto.precio.valor * this.Pedido.cantidad).toFixed(2)}` 
    }
    getCostoTotal(){
        return`El costo de las pizzas $${(this.Pedido.producto.precio.valor * this.Pedido.cantidad).toFixed(2)}`
    }
    getProductos(){
        return`El usted pidio ${this.Pedido.cantidad} productos`
    }
    getNumeroElementos(){
        return``
    }
    agregarElemento(Pedido){
        this.elementos.push(Pedido)
    }

    listarElementos(){
        this.elementos.forEach((Pedido, i) => {
            console.log(`${i + 1} ${Pedido.getDescripcion()}`)
        }
        )
    }
}