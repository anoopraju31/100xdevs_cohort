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
