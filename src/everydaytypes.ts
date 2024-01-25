export class EverydayTypes {
  main(): void {
    // primitives
    let number: number = 0;
    let string: string = "Ariel";
    let boolean: boolean = true;
    // arrays
    let arrayModel1: Array<number> = [0, 1, 2];
    let arrayModel2: number[] = [0, 1, 2];
    // any
    let any: any = [0, "Ariel", true];
    any = 1;
    // type annotations on variables
    let myNameModel1: string = "Ariel";
    let myNameModel2 = "Ariel";
    // functions parameter type annotations
    function greet(name:string) {
      console.log("Hello, " + name.toUpperCase() + "!!");
    }
    // functions return type annotations
    function getArrayNumberModel1(): number[]{
      return [0, 1, 2];
    };
    async function getArrayNumberModel2(): Promise<number[]>{
      return [0, 1, 2];
    };
    // anonymous functions
    const names = ["Alice", "Bob", "Eve"];
    // Contextual typing for function - parameter s inferred to have type string
    names.forEach(function (s) {
      console.log(s.toUpperCase());
    });

    // Contextual typing also applies to arrow functions
    names.forEach((s) => {
      console.log(s.toUpperCase());
    });
    // objects
    let object: object = { x: 0 };
  }
}
