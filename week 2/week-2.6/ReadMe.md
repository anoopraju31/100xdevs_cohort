# Filter, Map, Arrow Function

#### Arrow Function
- An arrow function in JavaScript is a concise way to write anonymous or named functions using a simplified syntax with the **=>** arrow notation.

``` javascript
    // Regular Function
    function sum(a,b) {
        return a + b
    }
```
``` javascript
    // Arrow Function
    const sum = (a, b) => a + b
```

#### Map
- The **map()** method is used to create a new array by applying a provided function to each element of the original array.

``` javascript
    // Given an array, return a new array in which every value is multiplied by 2.
    // [1, 2, 3, 4, 5] >>> [2, 4, 6, 8, 10]
    
    const arr = [1, 2, 3, 4, 5]
    const newArr = arr.map(e => e * 2)

    console.log(newArr) // [2, 4, 6, 8, 10]
```