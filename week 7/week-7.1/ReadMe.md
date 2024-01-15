Week 7.1 | Routing, prop-drilling, context api

### Topics to be cover:
- **Routing**
- **Props Drilling**
- **Context API**

### Routing - React Router DOM
- **React Router DOM** is a library for handling routing in React applications. Routing is the process of determining which components should be rendered based on the current URL or location of the application. React Router DOM provides a set of components and utilities to enable navigation and rendering of different components based on the URL.
- Key components provided by React Router DOM include:
1. **BrowserRouter**: **BrowserRouter** is a component that provides the context for routing in the React application. It uses the HTML5 history API to keep the UI in sync with the URL.
2. **Routes**: **Routes** is a component that acts as a container for the route definitions. It's used to declare different routes and their corresponding components.
3. **Route**: **Route** is a component that defines a route within the Routes container. It takes a path prop to specify the URL path, and an element prop to specify the component to be rendered when the path is matched.

4. **Link**: **Link** is a component that provides declarative navigation. It renders an anchor tag (```<a>```) with the appropriate href, preventing the default behavior of the anchor tag and allowing the application to handle navigation. It helps in creating navigation links without causing a full page reload.

Putting it all together:

``` jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

### Lazy Loading in React
- In React, lazy loading refers to the technique of loading components only when they are needed, typically to improve the initial loading time of the React application. This is particularly useful when dealing with large and complex applications where loading all components at once might lead to unnecessary performance overhead.

### React.Lazy()
- The **React.lazy** function is a feature in React that allows us to load components lazily. It works by dynamically importing a module, which means the code for the component is only fetched when the component is actually rendered.
- Here's a simple example:
    ``` jsx
        const MyComponeny = () => {
            return <div> I am a lazy-loaded component! </div>
        }

        export default MyComponent
    ```
    Now, in The main file or the component where we want to use lazy loading:
    ``` jsx
        import {lazy, Suspense} from 'react'

        const MyLazyComponent = lazy(() => import('./MyComponent'))
        const App = () => {
            return (
                <div>
                    {/* Wrap the lazy-loaded component in Suspense */}
                    <Suspense fallback={<div> Loading... </div>}>
                        {/* Render the lazy-loaded component */}
                        <MyLazyComponent />
                    </Suspense>
                </div>
            )
        }

        export default App
    ``` 
    In this example:
    1. **React.lazy(() => import('./MyComponent'))** is used to create a lazy-loaded version of **MyComponent**.
    2. The lazy-loaded component is then wrapped in a **Suspense** component, and a **fallback** prop is provided. The fallback component is rendered while the lazy component is being loaded.
