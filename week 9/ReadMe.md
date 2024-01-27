# Week 9 | Typescript and Custom Hooks

### Custom Hooks
In React, a custom hook is a JavaScript function that starts with the word "use" and may call other hooks. Custom hooks allow you to extract and reuse logic in your components. They are a way to share stateful logic between components without using class components or duplicating code.

Here's a simple example of a custom hook:
``` jsx
import { useState, useEffect } from 'react';

function useCounter(initialValue, step) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    return {
        count,
        increment,
        decrement,
    };
}

// Using the custom hook in a component
function CounterComponent() {
    const { count, increment, decrement } = useCounter(0, 1);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```
In this example, **useCounter** is a custom hook that manages a counter state, provides functions to increment and decrement the count, and updates the document title when the count changes. The **CounterComponent** then uses this custom hook to manage its state and behavior.

Custom hooks follow the naming convention of starting with "use" to signal that they may use React hooks internally. It's a way to encapsulate and reuse logic across different components, promoting code organization and maintainability.