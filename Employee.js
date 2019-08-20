"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(_firstname, _lastname, _age, _salary) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._age = _age;
        this._salary = _salary;
    }
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._firstname;
        },
        set: function (name) {
            this._firstname = name;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
exports.companies = ["Wipro", "Tcs", "dbs"];
var employee = new Employee("Rakesh", 'Kumar');
employee.name = "Harish";
console.log("Name is " + employee.name);
