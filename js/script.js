"use strict";
class LavoratoreAutonomo {
    constructor(codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getInps() {
        let inps = this.redditoAnnuoLordo * 0.33;
        return inps;
    }
    getIrpef() {
        let irpef = this.redditoAnnuoLordo * (this.tasseIrpef / 100);
        return irpef;
    }
    getTasseTotale() {
        let tasseTotale = this.getIrpef() + this.getInps();
        return tasseTotale;
    }
    getUtileTasse() {
        let tasseNetto = this.redditoAnnuoLordo - this.getTasseTotale();
        return tasseNetto;
    }
}
class Avvocato extends LavoratoreAutonomo {
}
let giuann = new Avvocato(1, 54000, 33, 43);
console.log(giuann.getIrpef());
console.log(giuann.getInps());
;
console.log(giuann.getTasseTotale());
console.log(giuann.getUtileTasse());
