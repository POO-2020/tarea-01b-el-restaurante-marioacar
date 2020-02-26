import Precio from "./precio.js"
import Fecha from "./fecha.js"
class Main{

    constructor(){
    }

    probarPrecio(){
        console.log("**PRECIO**")
        let precio = new Precio (125.50)
        console.log(precio.getPrecio())
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

}

let app = new Main
app.probarPrecio()
app.probarFecha()