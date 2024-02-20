# Week 9.3 - Generics, enums, imports & exports

### Contents: 
- **Enums**
- **Generics**
- **Exporting and importing modules**
    - **Contant Exports**
    - **Default Exports**


### Enums
- Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
- The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
#### Example 1
- Let’s say we have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
```js
function doSomething(keyPressed) {
	// do something.
}
```
What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?

The best thing to use in such a case is an enum.
```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
```

##### What values do you see at runtime for Direction.UP ?
```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
console.log(Direction.Up)
```
![](images/enum-output.png)
This tells you that by default, enums get values as 0 , 1, 2...

#####  How to change values?
``` ts
enum Direction {
    Up = 1,
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)
```
![](images/enumvaluechange.png)

##### Can also be strings
```ts
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)
```
##### Common usecase in express
```ts
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
```

### Generics
- Generics in TypeScript allow us to create reusable components and functions that can work with a variety of data types while maintaining type safety.
- They enable us to define placeholders for types that are specified when the component, function, or class is used.
- Here's a basic example of how generics work in TypeScript:
```ts
// A simple generic function that takes an argument of type T and returns it
function identity<T>(arg: T): T {
    return arg;
}

// Using the generic function with different types
let output1 = identity<string>("hello");
let output2 = identity<number>(123);

console.log(output1); // Output: hello
console.log(output2); // Output: 123
```
- In this example:
    - **<T>** declares a type parameter **T**, which acts as a placeholder for a specific type.
    - **identity<T>** is a function that takes an argument of type **T** and returns the same type **T**.
    - When calling identity, we specify the type we want to use within angle brackets (**<string>** or **<number>** in this case).
- Generics can also be used with classes and interfaces. Here's an example:
``` ts
// A generic class that holds a value of type T
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Using the generic class with different types
let box1 = new Box<string>("Hello");
let box2 = new Box<number>(123);

console.log(box1.getValue()); // Output: Hello
console.log(box2.getValue()); // Output: 123
```
- In this example, **Box<T>** is a generic class that can hold a value of any type. We can create instances of **Box** with different types, and the **getValue** method returns the value of the specified type.

### Importing & Exporting Modules
- TypeScript follows the ES6 module system, using **import** and **export** statements to share code between different files.

#### Constant exports
- **math.ts**
```ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
```
- **main.ts**
```ts
import { add } from "./math"

add(1, 2)
```

#### Default exports
- **calculator.ts**
```ts
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}
```
- **main.ts**
```ts
import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));
```