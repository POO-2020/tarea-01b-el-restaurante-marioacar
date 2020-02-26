import Precio from "./precio.js"
class Main{

    constructor(){

    }

    probarPrecio(){
        console.log("PRECIO")
        let precio = new Precio (125.50)
        console.log(precio.getPrecio())
    }
}

let app = new Main
app.probarPrecio()