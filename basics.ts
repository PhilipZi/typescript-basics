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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 21,
};

// person = {
//   isEmployee: true,      doesnt work cause not declared
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let kite = "Cabrinha";

// kite = 1234 doesnt work cause of inference
