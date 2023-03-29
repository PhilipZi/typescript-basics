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

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // [d, a, b, c]
