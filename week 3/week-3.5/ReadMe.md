# Week 3.5 - Document Object Model (DOM) 

### What is DOM?
- DOM is a programming interface for web documents.
- DOM is not a programming language.
- DOM represents the page so the programs can change the document structure, style, and content.
- The DOM is a tree-like representation of the web page that gets loaded into the browser.
- The DOM represents the document as **nodes and object**.
- Without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their components parts.
- Web API used to build websites
- DOM is language independant. it is not a JavaScript thing.

### Accessing the DOM
- When you create a script, weather inline in a **&lt;script&gt;** element or included in the web page, you can immediately begin using the API for the document or window objects to manipulate the document itself.
- The DOM was designed to be independent of any particalar programming language, making the structure representation of the document available from a single consistent API.
- For example,

``` html
    <html lang='en'>
        <head>
            <script>
                // run this function when the document is loaded
                window.onload(() => {
                    // create a couple of elements in an otherwise empty HTML page
                    const heading = document.createElement('h1')
                    const headingText = document.createTextNode('Big Head!')

                    heading.appendChild(headingText)
                    
                    document.body.appendChild(heading)
                })
            </script>
        </head>
        <body></body>
    </html>
```

- It represents the web page using a series of objects. The main object is the document object which in turn houses other object which also house their own object, and so on.

``` html
    <html>
        <head>
            <title> My Document </title>
        </head>

        <body>
            <h1> Header </h1>
            <p> Paragraph </p>
        </body>
    </html>
```