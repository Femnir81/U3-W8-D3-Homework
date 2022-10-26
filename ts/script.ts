abstract class LavoratoreAutonomo {
    codRedd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(codRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef
    }  
    
    getInps(): number {
        let inps: number = this.redditoAnnuoLordo * 0.33;
        return inps
    }

    getIrpef(): number {
        let irpef: number = this.redditoAnnuoLordo * (this.tasseIrpef/100);
        return irpef        
    }

    getTasseTotale() {
        let tasseTotale: number = this.getIrpef() + this.getInps();
        return tasseTotale
    }

    getUtileTasse(): number {
        let tasseNetto: number = this.redditoAnnuoLordo - this.getTasseTotale();
        return tasseNetto
    }
}

class Avvocato extends LavoratoreAutonomo{    
}

let giuann = new Avvocato(1, 54000, 33, 43);
console.log(giuann.getIrpef());
console.log(giuann.getInps());;
console.log(giuann.getTasseTotale());
console.log(giuann.getUtileTasse());

