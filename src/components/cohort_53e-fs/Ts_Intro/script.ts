// npm = Node Package Manager
let isLoading: boolean = false;
isLoading = true;

console.log("Is loading: ", isLoading);

// типізація по значенню
type Loading = "loading";
type Success = "success";
type Err = "error";

type Status = Loading | Success | Err;
// type Status = 'loading' | 'success' | 'error';

let stat: Status = "loading"; 

// typeof - function
console.log("Type of (stat): ", typeof(stat));

Array.isArray(stat);
console.log("Is array - stat: ", Array.isArray(stat));

// modern option to use of typeOf
console.log("Type of (Err): ", typeof isLoading);

interface IPersone {
    name: string,
    isProgrammer?: boolean;
}

interface Employee extends IPersone{
    salary: number;
}

const employ1: Employee = {
    salary: 2200,
    name: "Jack",
    isProgrammer: true,
};
// too big / long
// const newEmployee: {
//     name: string;
//     salary: number;
//     isProgrammer?: boolean;
// } = {
//     name: 'John',
//     salary: 2500,
// };

// type - часто для примітивів і можна об'єднувати як в 12 строчці, але не описує функції, це робить інтерфейс
// inetrface - зачасту працюють з об'єктами

// tsc fileName.ts => to js file
// node fileName.js => to console log this file