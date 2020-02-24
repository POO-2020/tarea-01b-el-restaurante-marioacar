export default class Precio{
    /**
     * 
     * @param {number} precio 
     */


    constructor(precio){
        this.precio = precio
    }
    
    getPrecio(){
        return (`$${this.precio.getPrecio()}`)
    }



}