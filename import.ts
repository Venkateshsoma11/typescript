import {Employee as E,companies} from "./Employee";

const emp=new E("venky","ssa",22,50000)
console.log(emp.age);

companies.forEach(company=>console.log(company))