# Fetch API
- JavaScript fetch() method is used to request data from a server. 
- The request can be of any type of API that returns the data in JSON or XML. 
- The fetch() method requires one parameter, the URL to request, and returns a promise.

### Syntax:

``` javascript

    fetch('url') //api for the get request
        .then(response => response.json())
        .then(data => console.log(data));

```

### Parameters:
- URL: It is the URL to which the request is to be made.
- Options: It is an array of properties. It is an  **optional** parameter.

### Return Value:
- It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. 
- It can be an array of objects or simply a single object.

**NOTE:** Without options, Fetch will always act as a get request.

### Making Post Request using Fetch

``` javascript 

    user = {
        "name": "Harkirat Singh",
        "age": "28"
    }

    // Options to be given as parameter 
    // in fetch for making requests
    // other then GET
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    // Fake api for making post requests
    fetch(
        "http://dummy.restapiexample.com/api/v1/create",
        options
    ).then(res =>
        res.json()).then(d => {
            console.log(d)
        })

```
