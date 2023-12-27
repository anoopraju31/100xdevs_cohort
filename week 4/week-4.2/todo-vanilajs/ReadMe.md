# creating a ToDo List with document object
- Document object does provide us with different methods to manipulate DOM. such as **getElementBy(), createElement(), appendChild, setAttribute() and so on**.
- The problem with this approach is that, its really hard to add and remove elements from the DOM and there is no central state for managing.
- Suppose the group todo application, where multiple people can have access to the same todo. The todos are stored in remote server's database. if someone updates the todo, we will get back a array of todos on the frontend. Now to problem arises, how to update the DOM.
- In our implementation, we have added only **addTodo** function. we don't have **update todo** and **remove todo** function yet.