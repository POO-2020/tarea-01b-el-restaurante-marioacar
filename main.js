import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
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

    probarTiempo(){
        let tiempo = new Tiempo (1,55, "pm")
        console.log(tiempo.getFormato24())
    }

    probarDireccion(){
        let direccion = new Direccion ("villa bonita",571,"real Loma",28984,"villa","villa de Alvarez")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoLargo())
    }


}

let app = new Main
app.probarPrecio()
app.probarFecha()
app.probarTiempo()
app.probarDireccion()