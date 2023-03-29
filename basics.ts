// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sport", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

// person = {
//   isEmployee: true,      doesnt work cause not declared
// };

let people: Person[];

// Type inference

let kite: string | number = "Cabrinha";

kite = 1234;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
