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


### DOM Tree
- The DOM is a tree-like representation of the web page that gets loaded into the browser.

    ``` html
        <html>
            <head>
                <title> My title </title>
            </head>

            <body>
                <h1> My header </h1>
                <a href='www.google.com'> My link </a>
            </body>
        </html>
    ```

    ![DOM Tree](./images/dom-tree.gif)

- When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

### The Document Object
- This is the top most object in the DOM.
- It has properties and methods which you can use to get information about the document using a rule known as dot notation.

    ![Document Object](./images/document-object.gif)
- example
    ``` html

        <!DOCTYPE html>
        <html>
            <body>
                <form id="LoginForm" action="/action_page.php">
                    First name: <input type="text" name="fname" value="Donald">
                    <br>

                    Last name: <input type="text" name="lname" value="Duck">
                    <br>
                    
                    <input type="submit" value="Submit">
                </form>

                <p> Click the "Try it" button to display the number of elements in the form.</p>

                <button onclick="myFunction()"> Try it </button>

                <p id=""displayspace></p>

                <script>
                    function myFunction() {
                        var x = document.getElementById("LoginForm").elements.length;
                        var y = document.getElementById("LoginForm").elements[0].value;

                        document.getElementById("displayspace").innerHTML = "Found " + x + " elements in the form. " + "first name is " + y;
                    }

                </script>
            </body>
        </html>

    ```