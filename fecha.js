class Fecha{
    constructor(Año,Mes,Dia){
        this.Fecha = new Date (Año,Mes -1, Dia);
        this.Dia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Vierenes","Sábado"]
        this.Mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        this.Actual = new Date (Date.now())
    }


    getAños(){
        return `los años que han pasado son ${this.Actual.getFullYear()-this.Fecha.getFullYear()} desde ${this.Fecha.getFullYear()}`
    }
    getMeses(){
        return `los meses que han pasado son ${this.Actual.getFullYear()-this.Fecha.getFullYear()*12} desde ${thisFecha.getFullYear()} `
    }
    getSemanas(){
        return `las semanas que han pasado son ${this.Actual.getFullYear()-this.Fecha.getFullYear()*48} desde ${this.Fecha.getFullYear}`
    }
}