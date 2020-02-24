import precio from "./precio.js"
class Main{

    constructor(){
        this.precio = new precio (121.45)
    }


    probarPrecio(){
        console.log(`${this.precio.getPrecio()}`)
    }

}

let app = new Main()
app.probarPrecio()