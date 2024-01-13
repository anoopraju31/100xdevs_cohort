# Week 6.2 | Common Hooks in React

### Topics to be covered
- **useEffect Hook**
- **useMemo Hook**
- **useCallback Hook**
- **custom Hooks**
- **Prop Drilling**

### Side Effects
- In React, the concepts of side effects encompasses any operations that reach outside the functional scope of a React component. These operations can affect other components, interact with the browser, or perform asychronous data fetching.
- Here are some common scenarios where side effects occur in React, and how to handle them:
1. **Data Fetching**:
    ``` jsx
    import React, { useState, useEffect } from 'react';

    function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();

        return () => {
        // Cleanup function (unsubscribe, cancel, etc.)
        };
    }, []); // Empty dependency array means the effect runs once after the initial render
    }
    ```
2. **Event Listeners**:
    ``` jsx
    import React, { useEffect } from 'react';

    function MyComponent() {
    useEffect(() => {
        const handleResize = () => {
        // Handle window resize event
        };

        window.addEventListener('resize', handleResize);

        return () => {
        // Cleanup function (remove event listener)
        window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means the effect runs once after the initial render
    }
    ```

### Hooks
- Hooks are a feature introduced in React 16.8 that allow us to use state and other React features without writing a class. They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components. This has led to a more concise and readable way of writing components in React.
- Hooks are functions that allow functional components to manage state, handle side effects, and access other React features that were previously only available in class components.
- The key hooks in React include:
    - **useState**: Manages state in functional components.
    - **useEffect**: Performs side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
    - **useCallback**: Memoizes a callback function to prevent unnecessary re-renders of child components.
    - **useMemo**: Memoizes the result of a computation to prevent unnecessary recalculations.
    - **useRef**: Provides a mutable object with a **current** property, useful for persisting values between renders of a functional component without triggering re-renders.
    - **useContext**: Consumes values from a React context, providing a way to share data across components.

### useState Hook
- In React, the useState hook is a function that allows functional components to manage state.
- The useState hook is used to declare state variables in a functional component.
- Example:
    ``` jsx
    import React, { useState } from 'react';

    function App() {
        // useState returns an array with two elements:
        // 1. The current state value.
        // 2. A function that allows you to update the state.

        const [count, setCount] = useState(0);

        return (
            <div>
                <button onClick={() => setCount(count + 1)}> Click Me {count} </button>
            </div>
        );
    }

    export default App;
    ```
    In this example:
    1. **count** is the state variable, and **setCount** is the function used to update its value.
    2. **useState(0)** initializes the **count** state variable with an initial value of 0.
    3. The component renders the current value of **count** and a button. When the button is clicked, the **setCount** function is called to update the **count** state, and the component re-renders with the updated value.

### useEffect hook
- The **useEffect** hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, and other tasks that need to happen outside the usual flow of a component's rendering.
- The **useEffect** hook serves the same purpose as **componentDidMount**, **componentDidUpdate** and **componentWillUnmount** in React class components but unified into a single API.
- Here's a basic example of how to use the **useEffect** hook:
    ```jsx
    import React, { useState, useEffect } from 'react';

    function App() {
        const [data, setData] = useState(null);

        // The useEffect hook takes two arguments:
        // 1. A function that contains the code to run as a side effect.
        // 2. An optional array of dependencies, which controls when the effect runs.

        useEffect(() => {
            // This code will run after the component has mounted.

            // Example: Fetching data from an API
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data));

            // If you want to perform cleanup when the component unmounts, you can return a function from useEffect.
            // This function will be called when the component is unmounted or when the dependencies change.

            return () => {
                // Cleanup code (optional)
                // For example, cancelling subscriptions or clearing intervals.
            };
        }, []); // The empty dependency array means the effect runs only once after the initial render.

        return (
            <div>
                {
                    data? 
                    ( <p>Data: {data}</p> ):
                    ( <p>Loading...</p> )
                }
            </div>
        );
    }

    export default App;
    ```
    In this example:
    1. The **useEffect** hook is used to fetch data from an API when the component mounts. The function passed to **useEffect** is the side effect code.
    2. The empty dependency array (**[]**) indicates that the effect should only run once after the initial render. If you omit the dependency array, the effect will run after every render.
    3. The **return** statement inside **useEffect** is optional and is used for cleanup. If you need to perform cleanup when the component is unmounted or when certain dependencies change, you can return a cleanup function.

### useMemo hook
- The useMemo hook in React is used to memoize the result of a computation, preventing unnecessary recalculations and improving the performance of the components. It is particularly useful when dealing with expensive calculations or complex operations that don't need to be repeated on every render.
- Example:
    ``` jsx
    import React, { useMemo } from 'react';

    function ExampleComponent({ data }) {
        // useMemo takes two arguments:
        // 1. A function representing the computation to memoize.
        // 2. An array of dependencies. The memoized value will only be recalculated if these dependencies change.

        const memoizedValue = useMemo(() => {
            // Expensive computation or operation
            return computeValue(data);
        }, [data]); // Recalculate when 'data' changes

        return (
            <div>
                <p>Memoized Value: {memoizedValue}</p>
            </div>
        );
    }

    export default ExampleComponent;
    ```
    In this example:
    1. The **useMemo** hook is used to memoize the result of the **computeValue** function based on the data prop.
    2. The function provided to **useMemo** will only be re-executed when the value of **data** changes. If **data** remains the same between renders, the memoized value will be reused, saving unnecessary computations.

### useCallback hook
- The **useCallback** hook in React is used to memoize functions, particularly useful when passing functions as props to child components. It helps in preventing unnecessary re-creations of functions, which can be important for performance optimization.
- Here's a basic example of how to use the **useCallback** hook:
    ``` jsx
    import React, { useState, useCallback } from 'react';

    function ParentComponent() {
        const [count, setCount] = useState(0);

        // The useCallback hook takes two arguments:
        // 1. The function to memoize.
        // 2. An array of dependencies. The memoized function will only be re-created if these dependencies change.

        const handleClick = useCallback(() => {
            setCount(count + 1);
        }, [count]); // Recreate the function when 'count' changes

        return (
            <div>
                <p>Count: {count}</p>
                <ChildComponent onClick={handleClick} />
            </div>
        );
    }

    function ChildComponent({ onClick }) {
        return (
            <button onClick={onClick}>
            Increment Count
            </button>
        );
    }

    export default ParentComponent;
    ```
    In this example:
    1. The **useCallback** hook is used to memoize the **handleClick** function, which increments the **count** state.
    2. The **handleClick** function will only be re-created if the **count** value changes. This helps in preventing unnecessary re-renders of the **ChildComponent** due to a new function reference.

- It's important to use **useCallback** when you have a function that is passed as a prop to child components, especially if those child components use **React.memo** or have their own **shouldComponentUpdate** logic that depends on the function reference. Without **useCallback**, a new function reference would be created on each render, potentially causing unnecessary re-renders in child components.