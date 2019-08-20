"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var emp = new Employee_1.Employee("venky", "ssa", 22, 50000);
console.log(emp.age);
Employee_1.companies.forEach(function (company) { return console.log(company); });
