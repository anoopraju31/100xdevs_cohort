# Week 3.3 - Databases and Authentication

### Using Middleware
- Express is a routing and middleware web framework that has minimal functionality of its own. An Express application is essentially a series of middleware function call.
- **Middleware** functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. the next middleware function is commonly denoted by a variable named next.
- Middleware functions can perform the following tasks:
    1. Execute any code.
    2. Make changes to the request and the response object.
    3. End the request-response cycle.
    4. Call the next middleware function in the stack.

- **Why make a middleware for functionality? why can't it be done it side one function instead of spliting the responsiblities?**
    - This helps reuse the same logic in multiple locations and keeps the code DRY.
    - This also allows to what the route intented to do only.