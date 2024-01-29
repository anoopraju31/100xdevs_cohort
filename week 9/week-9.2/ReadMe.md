# Week 9.2 | Typescript


### Types of Languages (Strongly typed vs loosely typed)
- The terms **strongly typed** and **loosely typed** refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.

| Strongly Typed                            | Loosely Typed                             |
|-------------------------------------------|-------------------------------------------|
| Variables have a fixed type               | Variables can be change types             |
| Type checking is enforced at compile-time | Type checking is enforeced at runtime     |
| Stricter codebase                         | Faster to bootstrap                       |
| Lesser runtime errors                     | high chances for run time errors          |
| Examples: C++, Java, Rust                 | Examples: Javascript, Python, Perl, php   |


### What is Typescript?
- Typescript is a programming language developed and maintained by Microsoft.
- It is a **strict syntactical superset** of JavaScript and adds optional static typing to the language.
![](images/typescript.png)

### Where/How does typescript code run?
- Typescript code never runs in your browser. Your browser can only understand javascript. 
- Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime).
- Typescript is something that compiles down to javascript/
- When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails.
![](images/typescript-workflow.png)