# Authentication

### Concepts to know before getting into authentication
1. Hashing
2. Encryption
3. Json Web Tokens
4. Local Storage

### Hashing
- Hashing is a process of converting input data (often referred to as a "message") into a fixed-size string of characters, which is typically a hexadecimal or binary representation.
- The output, known as the hash value or hash code, is unique to the input data.
- Instead of storing passwords in plaintext, systems often store the hash of the password. During login, the entered password is hashed, and the hash value is compared with the stored hash.
- Common hash functions include MD5, SHA-1, and SHA-256. However, MD5 and SHA-1 are considered insecure for cryptographic purposes due to vulnerabilities, and SHA-256 is often recommended for security-sensitive applications.
- Hashing is one way, it is computationally infeasible to reverse the hash value to obtain the original input.
- For a given input it produces a unique hash value, changing the input by a bit changes the output by a lot.

![Password Hashing](./images/password-hashing.png)


### Encryption
- Encryption is the process of converting information or data into a code to prevent unauthorized access.
- It plays a crucial role in securing communication and protecting sensitive information. 
- Encryption is two way process, meaning we can decrypt the encrypted output to the original input using the key.
- There are two main types of encryption: 
    1. Symmetric Encryption: In symmetric encryption, the same key is used for both encryption and decryption.
    2. Asymmetric Encryption: Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption.


### Json Web Tokens (JWT)
- Its neither encryption nor hashing it is actually a digital Signature.
- Anyone can see the original output given the signature.
- Signature can be verified using a password.

### Local Storage
- Local storage refers to a web storage solution that allows websites to store data locally on a user's device.
- This storage mechanism is part of the web storage API and provides a way for web applications to store data persistently on a user's browser.
- There are two main types of local storage in web development:
    1. LocalStorage:
        - This is a simple key-value pair storage system. 
        - It stores data as strings and has a larger storage capacity compared to cookies. 
        - The data stored in localStorage remains accessible even after the user closes the browser window or navigates away from the website.

        ``` javascript

            // Store data
            localStorage.setItem('key', 'value');

            // Retrieve data
            var storedValue = localStorage.getItem('key');


        ```
    
    2. SessionStorage: 
        - Similar to localStorage, sessionStorage is a key-value pair storage system. 
        - The key difference is that data stored in sessionStorage is only accessible for the duration of the page session. 
        - Once the user closes the browser tab or window, the data is deleted.

        ``` javascript
        
            // Store data
            sessionStorage.setItem('key', 'value');

            // Retrieve data
            var storedValue = sessionStorage.getItem('key');

        ```