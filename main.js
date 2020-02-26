import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Pedido from "./Pedido.js/"
import Cliente from "./cliente.js"
import Restaurante from "./restaurante.js"
class Main{

    constructor(){
    }

    probarFecha(){
        console.log(`**FECHA**`)
        let fecha = new Fecha (20,12,2000)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    probarTiempo(){
        console.log("**TIEMPO**")
        let tiempo = new Tiempo (1,55, "pm")
        console.log(tiempo.getFormato24())
    }

    probarDireccion(){
        console.log("**DIRECCION**")
        let direccion = new Direccion ("villa bonita",571,"real Loma",28984,"villa","villa de Alvarez")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoLargo())
    }

    probarPrecio(){
        console.log("**PRECIO**")
        let precio = new Precio (125.50)
        console.log(precio.getPrecio())
    }

    probarProducto(){
        console.log("**PRODUCTO**")
        let producto = new Producto ("pizza de peperoni grande", new Precio (250.50))
        console.log(producto.getDescripcion())
    }

    probarPedido(){
        console.log("**ELEMENTO PEDIDO**")
        let pedido = new Pedido (3, new Producto("pizzas chicas de salchicha"), new precio (350))
        console.log(pedido.getDescripcionP())
    }

    ProbarPerfil(){
        console("**PERFIL**")
        let cliente = new Cliente (new Nombre ("Mario Carvantes"), new Direccion ("Loma Bonita"), new Telefono (312-125-01-44))
        console.log(cliente.getPerfil())
    }

    probarPedidoF(){
        console.log("**PedidoF**")
        let pedido = new Pedido(new Fecha(2,12 ,2020 ), new Tiempo(9,40,"pm"), this.Pedido, this.cliente)
        console.log(pedido.getCostoTotal())
        console.log(pedido.getResumen())
        console.log(pedido.getProductos())
        pedido.agregarElemento(this.producto)
        pedido.listarElementos()
    }

}

let app = new Main
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probarPrecio()
app.probarProducto()
app.probarPedido()
app.probarPerfil()
app.probarPedidoF()