# Week 6.1 React Deeper Dive

### React Component Returns
- A Component can only return a single top level XML.
- We could contain multiple children components inside the top level XML.
- The example shown below is wrong as there are two top level XML.
``` jsx
function App() {
    return(
        <Header title='My name is Anoop Raju' />
        <Header title='My name is Hemanth Kumar' />
    )
}

function Header({title}) {
    return <div> {title} </div>
}

export default App
```
- In the above scenario, we could wrap the two top level xml in a **React.Fragment (<></>)**.
``` jsx
function App() {
    return(
        <>
            <Header title='My name is Anoop Raju' />
            <Header title='My name is Hemanth Kumar' />
        </>
    )
}

function Header({title}) {
    return <div> {title} </div>
}

export default App
```
- The main reason behind a component returning a single top level XML is that, it makes react easy to do **reconciliation**.  
