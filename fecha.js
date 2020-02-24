export default class fecha {
    /**
     * 
     * @param {Number} Años 
     * @param {Number} fecha 
     * @param {Number} meses 
     */
    constructor(Años,fecha,meses){
        this.fecha=new Date(año,mes -1, dia);
        this.dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Vierenes","Sábado"]
        this.meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    }

    getFecha(){
        return(`${this.fecha.getDay()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`)
    }

    getAños(){
        let Años = Date.now()- this.fecha;
        let msegAño= 1000*60*60*24*365;
        let sd  = Math.trunc(Años/msegAño)
        return(`${sd}`)
    }
    getMeses(){
        let mes = this.meses[this.fecha.getDay()];
        let fn = Date.now() - this.fecha.getFullYear();
        let fd = Math.trunc(mes - fn);
        return(`${fd}`)

    }

    getSemanas(){
        let semanas = 4
        let sem = 2020 /semanas
        return(`${sem}`)
    }

    getDiaFecha(){
        let dia=this.dias[this.fecha.getDay()];
        let mes=this.meses[this.fecha.getMonth()];
        return(`${dia} ${this.fecha.getDate()} de ${mes} del ${this.fecha.getFullYear()}`);

    }

    getDias(){
        let da =365
        let total = 2020 /da

        return(`${total}`)
    }

    
   

}