# Week 6.2 | Common Hooks in React

### Topics to be covered
- **useEffect Hook**
- **useCallback Hook**
- **useMemo Hook**
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
-The key hooks in React include:
    - **useState**: Manages state in functional components.
    - **useEffect**: Performs side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
    - **useCallback**: Memoizes a callback function to prevent unnecessary re-renders of child components.
    - **useMemo**: Memoizes the result of a computation to prevent unnecessary recalculations.
    - **useRef**: Provides a mutable object with a **current** property, useful for persisting values between renders of a functional component without triggering re-renders.
    - **useContext**: Consumes values from a React context, providing a way to share data across components.