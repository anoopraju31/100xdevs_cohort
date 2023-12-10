# Week 1.4

## Loops 
- For loop

    ``` javascript
    for (let i = 1; i <= n; i++) {
            ans += i
        }
    ```

## Functions
- A function in javascript is a set of statement that performs a task or calculate a value.
- It should take some input and return an output where there is some obvious relationship between the input and the output.

    ``` javascript
    function findSum(n) {
        let ans = 0

        for (let i = 1; i <= n; i++) {
            ans += i
        }

        return ans
    }
    ```
- Need for functions - Don't Repeat Yourself (DRY)
- One function can be call from inside another function.

## Callback Functions
- In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some operation.
- Callback functions are a common pattern in asynchronous programming, allowing you to perform actions once certain tasks are completed, such as fetching data from a server, handling user input, or handling events.

    ``` javascript
    function square (n) {
        return n * n
    }

    function cube(n) {
        return n*n*n
    }

    function sum(a,b,fn) {
        const val1 = fn(a)
        const val2 = fn(b)

        return val1 + val2
    }

    console.log(sum(1,2,square))

    ```

## Anonymous Functions
- An anonymous function in JavaScript is a function that is defined without a name.
- Anonymous functions are often used in situations where a function is needed temporarily or for a short duration and does not need to be reused elsewhere in the code. 
- They are commonly used as arguments to other functions, such as in the case of callback functions or immediately-invoked function expressions (IIFE).
- Few examples of anonymous functions:
    1. As a Function Expression:
        ``` javascript
            // Anonymous function as a function expression
            var add = function(x, y) {
            return x + y;
            };

            console.log(add(3, 5)); // Output: 8
        ```

    2. As a Callback Function:
        ``` javascript
            // Using an anonymous function as a callback
            setTimeout(function() {
                console.log("This function is executed after 1000 milliseconds.");
            }, 1000);
        ```

    3. Immediately-Invoked Function Expression (IIFE):
        ``` javascript
            // IIFE with an anonymous function
            (function() {
                console.log("This function is immediately invoked.");
            })();
        ```

    4. As an Arrow Function
        ``` javascript
            // Anonymous function as an arrow function
            var multiply = (a, b) => a * b;

            console.log(multiply(4, 6)); // Output: 24
        ```