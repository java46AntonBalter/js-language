class Person {
    #id;
    #name;
    constructor(id, name) {
            this.#id = id;
            this.#name = name
    }
    getId() {
            return this.#id;
    }
    getName() {
            return this.#name
    }
    toString() {
            return `id: ${this.#id}; name: ${this.#name};`
    }
}

class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
            super(id, name); //call the constructor of the class Person
            this.#salary = salary;
    }
    computeSalary() {
            return this.#salary
    }
    toString() {
            return super.toString() + ` salary: ${this.computeSalary()}`
    }
}

class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
         super(id, name);
         this.#kindergarten = kindergarten   
    }
    getKindergarten() {
            return this.#kindergarten;
    }
    toString() {
            return `${super.toString()} kindergarten: ${this.#kindergarten}`
    }
}

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
            super(id, name, salary)
            this.#hours = hours;
            this.#wage = wage;
    }
    computeSalary() {
            return super.computeSalary() + this.#hours * this.#wage
    }
    

}

/**************************************************************HW #17 solution */
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', 'Boker'),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function countOfPersonType(array, type) {
    return array.filter(n => n.constructor.name === type).length;
}
const res = countOfPersonType(persons, 'WageEmployee');
console.log(res);

function computeSalaryBudget(array) {
    return array.reduce((acc, n) => acc += n.computeSalary ? n.computeSalary() : 0, 0);
}
const res1 = computeSalaryBudget(persons);
console.log(res1);

function countChildrenKindergarten(array, kindergarten) {
    return array.filter(n => n.getKindergarten && n.getKindergarten() === kindergarten).length;
}
const res2 = countChildrenKindergarten(persons, 'Shalom');
console.log(res2)
