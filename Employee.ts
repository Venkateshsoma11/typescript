export class Employee{

    constructor(private _firstname:string, private _lastname:string, private  _age?:number,  private _salary?:number)
    {}

    get age():number{
        return this._age;
    }

    set age(age:number){
        this._age = age;
    }

    get name():string{
        return this._firstname;
    }

    set name(name:string){
        this._firstname = name;
    }
}
export const companies=["Wipro","Tcs","dbs"]
const employee:Employee = new Employee("Rakesh",'Kumar')

employee.name = "Harish";
console.log(`Name is ${employee.name}`);