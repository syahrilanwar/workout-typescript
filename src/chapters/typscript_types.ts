export default function main() {
  // primitive types
  primitiveTypes();
  // object types
  objectTypes();
  // other types
  otherTypes();
  // assertions
  assertions();
}

function primitiveTypes() {
  // boolean
  let isTrue: boolean = true;
  let isFalse: boolean = false;
  // number
  let numberValue: number = 0;
  let floatValue: number = 0.5;
  // string
  let name: string = "Syahril Anwar";
  // void
  function noop() {
    return;
  }
  // undefined or null
  let x: string | null;
}

function objectTypes() {
  // interface
  interface Person {
    name: string;
    age: number;
  }
  // class
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    drive() {
      console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    }
  }
  // enum ?
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
  // array
  const numbers: number[] = [1, 2, 3];
  // tuple ?
  type StringNumberPair = [string, number];

  const pair: StringNumberPair = ["hello", 42];

  const first = pair[0];
  const second = pair[1];

  // Error: Index out of bounds
  // const third = pair[2];
}

function otherTypes() {
  // any
  let obj: any = { x: 0 };
  obj.foo();
  obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;
  // object
  let person: { name: string; age: number };
  person = {
    name: "Syahril Anwar",
    age: 24,
  };
  // unknown
  let objUnknown: unknown;
  // never
  function fail(): never {
    throw console.log("error");
  }
}

function assertions() {
  // as const
  const colors = ["red", "green", "blue"] as const; // as read-only value
  // as type
  let someValue: any = "Hello, TypeScript!";
  let strLength: number = (someValue as string).length;
  // as any
  let anyValue: any = 42;
  anyValue = "Hello, world!"; // can assign any value to anyValue, regardless of its type
  // non-null
  let name: string | null = null;
  let nameLength = name!.length; // use the non-null assertion operator to tell the compiler that name will never be null
  // satisfies keyword
}
