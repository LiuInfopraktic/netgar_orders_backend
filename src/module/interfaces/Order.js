export class Order{
    dni;
    name;
    tel;
    emp;
    type;
    
    constructor(dni, name, tel, emp, type){
        this.dni = dni;
        this.name = name;
        this.tel = tel;
        this.emp = emp;
        this.type = type;
    }
}