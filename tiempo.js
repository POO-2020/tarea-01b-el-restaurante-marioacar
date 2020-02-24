export default class tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {number} periodoP 
     */
    constructor(hora,minuto,periodoP){
        this.minuto = minuto
        this.periodo = periodoP
        this.hora = hora
    }


    getFormato12(){
        return `${this.hora}:${this.minutos} ${this.periodoP}`

    }

    getFormato24(){
        if (this.periodoP === "PM" && this.hora != 12) {
            this.hora = this.hora + 12
        }
        return `${this.hora}:${this.minutos}`
    }
}