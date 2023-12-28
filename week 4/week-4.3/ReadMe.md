# Week 4.3 Mongo Deep dive & Assignments
- Understanding CRUD, mongoose and building an end to end authenicated app.

#### What is database?
- It is a place where data is stored persistently.
- Browser interact with HTTP servers and HTTP servers are transient, these severs can go up and down (Scale up or scale down).

#### Why can't we hit the database directly? What extra does the HTTP server provides exactly?
- Databases are created using protocols that browser don't understand.
- Databases don't have granual access as a first class citizen. Very hard to do user specific access in them.
- Who all have access to the username and password will have access to the whole database.
- Databases give access to everything or nothing.
- Express server has complete access to the database it need to restrict access based on whoever is send the request.
- If the request is send by Anoop he will see his own post.
- The server will hit the database with a sub-query stateing give me all the posts of Anoop only.
- There are some databases (firebase) that let us get rid of the http server and try their best to provide granola access.

### Data requests
- Databases usually allow access to 4 primitives -
    1. Create Data
    2. Read Data
    3. Update Data
    4. Delete Data
- Popularly know as CRUD

### Mongoose Library
- Mongoose is a ORM (Object Relation Model) library to talk with the MongoDB.
- In mongoose first we have to define a schema. even though mongodb is a schemaless, mongoose makes us define a schema for things like autocompletions/ validating data before it goes in the DB to make sure the we are doing things right. 
- Schemaless DBs can be very dangerous, using schemas in mongo makes it slightly less dangerous.

### Terminolgies
- **Cluster**:
    - In MongoDB, a cluster refers to a group of servers or nodes that work together to store and manage data.
    - This is a more general term and can include one or more MongoDB instances, which are individual running MongoDB processes. 
    - Clusters can be set up for high availability and fault tolerance.

- **Database**:
    - In MongoDB, a database is a logical container for collections.
    - It is where you store and organize your data.
    -  Each database can have multiple collections, and collections are similar to tables in relational databases.However, MongoDB is schema-less, meaning each document within a collection can have a different structure.

- **Table**:
    - In MongoDB, a collection is a grouping of MongoDB documents.
    - It is equivalent to a table in a relational database. 
    - Each document within a collection can have a different structure, and MongoDB collections do not enforce a schema. 
    - Collections are where you store and retrieve data in MongoDB.