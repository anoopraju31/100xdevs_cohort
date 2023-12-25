# Week 4.1 DOM Introduction

- The DOM (Docuement Object Model) API is a programming interface for web documents.
- It represents the page so that programs can change the document structure, style and content. The DOM represents the document as a tree of objects, each object represents a part of the page.
- JavaScript is a implementation of ECMAScript, Document doesnot come with ECMAScript rather it is an API provided by the browser to parse the html document.
- The ECMAScript standard was orginally intended for a standard use cases script language. but the people how made web browser took the ECMAScript standard and made JavaScript but it lacked some key functionalities such asynchronous fetching, setting time intervals and timeouts. So They implemented these functionalities seperately and provided to JavaScript as Web APIs.



Making dynamic changes is hard -
- Changing the elements on the website once the website is loaded.
- Actually calculating the sum based on the inputs and rendering it on the screen.  

### Classes and Ids
- In the context of the Document Object Model (DOM), classes and IDs are used to interact with and manipulate HTML elements through JavaScript. The DOM represents the structure of an HTML document as a tree of objects, where each HTML element is an object with properties and methods that can be accessed and modified using JavaScript.

- **classes**
    - Classes are denoted by a period (.) followed by the class name.
    - Multiple elements can share the same class, and a single element can have multiple classes.
    - To apply a style to a class, you use the following syntax in your CSS:
        
        ``` css 
            
            .classname {
            /* styles go here */
            }

        ```
    
    - To apply a class to an HTML element, you use the class attribute:
    
        ``` html

            <div class="classname">This element has the class "classname".</div>

        ```
    
    **getElementsByClassName** method.
    - This method returns a collection of elements with the specified class name.

        ``` html

            <div class="myClass">Element 1</div>
            <div class="myClass">Element 2</div>

            <script>
                var elements = document.getElementsByClassName("myClass");
                // 'elements' is a collection of elements with class "myClass"
            </script>

        ```

- **id**
    - IDs are denoted by a hash (#) followed by the ID name.
    - IDs should be unique within an HTML document; each ID should be assigned to only one element.
    - To apply a style to an ID, you use the following syntax in your CSS:

        ``` css
        
            #idname {
            /* styles go here */
            }

        ```

    - To apply an ID to an HTML element, you use the id attribute:

        ``` html

            <p id="idname">This paragraph has the ID "idname".</p>

        ```

    -  To access an element by its ID, you can use the getElementById method.
    -  This method returns the element with the specified ID.
    - Example:

        ``` html
        
            <div id="myElement">This is an element with ID "myElement"</div>

            <script>
            var element = document.getElementById("myElement");
            // 'element' is the element with ID "myElement"
            </script>
        
        ```

### Why IDs are useful? Classes let us get rid of code repeatition what do IDs do?
- Ids let us access elements via DOM API.
- We can use IDd to do CSS, but it is usually used for DOM manipulation in JavaScript.
