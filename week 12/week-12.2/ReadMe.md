# Week 12.2 | Advance Typescript APIs

## Contents:
- [**Pre-requisities**](#pre-requisities)
    - [**Interface**](#interface)
    - [**Type**](#type)
    - [**Recap setup procedure**](#recap-setup-procedure)
- [**Pick**](#pick)
	- [**Understanding Pick**](#understanding-pick)
	- [**Example Usage of Pick**](#example-usage-of-pick)
	- [**Benefits of Using Pick**](#benefits-of-using-pick)
- [**Partial**](#partial)
- [**Readonly**](#readonly)
- [**Record and Map**](#record-and-map)
  - [**Record**](#record)
  - [**Map**](#map)
- [**Exclude**](#exclude)

### Pre-requisities
#### Interface
- In TypeScript, an interface is a way to define the structure of an object.
- It's a TypeScript-specific feature that helps in describing the shape of objects, including their properties and methods.
- Interfaces are purely a compile-time construct and do not generate any JavaScript code.
- example: Here, is a user object looks like 

```ts
interface User {
	name: string
	age: number
}

function sumOfAge(user1: User, user2: User) {
	return user1.age + user2.age
}

const age = sumOfAge({ name: 'Taro', age: 20 }, { name: 'Jiro', age: 30 })
console.log(age)
```

#### Type
- In TypeScript, types allow us to aggregate data together in a manner very similar to interfaces. They provide a way to define the structure of an object, similar to how interfaces do.
```ts
type User = {
  firstName: string;
	lastName: string;
	age: number
}
```
#### Recap setup procedure
to start a typescript project locally, please do the following:
1. Initialize TS
```bash
npx tsc --init
```
2. Change tsconfig as per your needs. Usually changing rootDir and outDir is a good idea
```json
{
	"rootDir": "./src",
	"outDir": "./dist"
}
```

### Pick
- The **Pick** utility type in TypeScript is a powerful feature that allows us to construct new types by selecting a subset of properties from an existing type. 
- This can be particularly useful when we need to work with only certain fields of a complex type, enhancing type safety and code readability without redundancy.

#### Understanding Pick
- The Pick utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for Pick is as follows:
	```ts
	Pick<Type, Keys>
	```
	- **Type:** The original type we want to pick properties from.
	- **Keys:** The keys (property names) we want to pick from the Type, separated by | (the union operator).

#### Example Usage of Pick
- Consider an interface User that represents a user in our application.
	```ts
	interface User {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
	}
	```
- Suppose we're creating a function to display a user profile, but we only need the name and email properties for this purpose. We can use Pick to create a new type, UserProfile, that includes only these properties:
	``` ts
	// For a profile display, only pick `name` and `email`
	type UserProfile = Pick<User, 'name' | 'email'>;

	const displayUserProfile = (user: UserProfile) => {
	console.log(`Name: ${user.name}, Email: ${user.email}`);
	};
	```
- In this example, UserProfile is a new type that has only the name and email properties from the original User interface. The displayUserProfile function then uses this UserProfile type for its parameter, ensuring that it can only receive objects that have name and email properties.

#### Benefits of Using Pick
1. **Enhanced Type Safety**: By creating more specific types for different use cases, we reduce the risk of runtime errors and make our intentions clearer to other developers.
2. **Code Readability**: Using `Pick` to create descriptive types can make our code more readable and self-documenting.
3. **Reduced Redundancy**: Instead of defining new interfaces manually for subsets of properties, `Pick` allows us to reuse existing types, keeping our code DRY (Don't Repeat Yourself).

**Note:** The Pick utility type in TypeScript allows us to create types that are subsets of existing types. It allows us to be explicit about what properties a function or component expects, leading to more maintainable and error-resistant code.

### Partial
- The `Partial` utility type in TypeScript is used to create a new type by making all properties of an existing type optional. 
- This is particularly useful when we want to update a subset of an object's properties without needing to provide the entire object.
- **Partial** makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
![](images/partial.png)
#### Understanding `Partial`
- The `Partial` utility type takes a single type argument and produces a type with all the properties of the provided type set to optional. Here's the syntax for using `Partial`.
```ts
Partial<Type>
```
- `Type`: The original type you want to convert to a type with optional properties.

#### Example Usage of `Partial`
Let's say we have a `User` interface representing a user in our application:
```ts
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
```
If we're creating a function to update a user, we might only want to update their name, age, or email, and not all properties at once. We can use Pick to select these properties and then apply Partial to make them optional:
``` ts
// Selecting 'name', 'age', and 'email' properties from User
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
}

// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call
```
In this example, **UpdatePropsOptional** is a new type where the **name**, **age**, and **email** properties are all optional, thanks to **Partial**. The **updateUser** function can then accept an object with any combination of these properties, including an empty object.

#### Benefits of Using `Partial`
1. **Flexibility in Updates**: `Partial` is ideal for update operations where we may only want to modify a few properties of an object.
2. **Type Safety**: Even though the properties are optional, we still get the benefits of type checking for the properties that are provided.
3. **Code Simplicity**: Using `Partial` can simplify function signatures by not requiring clients to pass an entire object when only a part of it is needed.

**Note:** The **Partial** utility type in TypeScript is useful where we need to work with objects that might only have a subset of their properties defined. It allows us to create types that are more flexible for update operations while still maintaining type safety.

### Readonly
- When we have a configuration object that should not be altered after initialization, making it **Readonly** ensures its properties cannot be changed.
```js
const obj = {
  name: 'Anoop'
  age: 23
}
const arr = [1,2,3,4]
```
- In the about code we cannot change the value of **obj** and **arr*, but we can change the value inside the both.
```js
obj.name = 'Harkirat'
arr[2] = 10
```
- Suppose we want to ensures its properties cannot be changed, that as where **Readonly** comes to the rescue.
```ts
interface User {
	readonly name: string
	readonly age: number
}
```
- By enforcing **readonly**, we can't change the the value of **name** or **age** of a user.
![](images/readonly.png)
- Suppose we already have a type which we need to make readonly then we could do like this
```ts
interface User {
	name: string
	age: number
}

const user: Readonly<User> = { name: 'Taro', age: 20 }
```
- Readonly is used when we want to ensure the even the inner values must be const.
- **Note:** This is compile time checking, not runtime (unlike const).

### Record and Map
#### Record
```ts
type User = {
	id: string
	username: string
}
  
type Users = {
	[key: string]: User
}
  
const users: Users = {
	'ras@rtti': {
	  id: 'ras@rtti',
	  username: 'anoop'
	},
	'ras@harki': {
		id: 'ras@harki',
		username: 'harkirat'
	},
}
```
- We could use the above approach to give type to objects, but **record** lets us do in a cleaner way.
```ts
type User = {
	id: string
	username: string
}

type Users = Record<string, User>

const users: Users = {
	'ras@rtti': {
	  id: 'ras@rtti',
	  username: 'anoop'
	},
	'ras@harki': {
		id: 'ras@harki',
		username: 'harkirat'
	},
}

console.log(users['ras@rtti']); 
```
- **Note:** **Record** is typescript feature not a javascript feature.

#### Map
- **Maps** gives us an even fancier way to deal with objects. 
- Very similar to **Maps** in C++.

```ts
type User = {
	id: string
	username: string
}

const users = new Map<string, User>()

users.set('ras@rtti', { id: 'ras@rtti', username: 'anoop' })
users.set('ras@harki', { id: 'ras@harki', username: 'harkirat' })

const user = users.get('ras@rtti')
console.log(user)
```

### Exclude
- In a function that can accept serveral types of inputs but we want to exclude specific types from being passed to it.
```ts
type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType, 'scroll'>

const handleEvent = (event: ExcludeEvent) => {
	console.log(`Handling event: ${event}`);
}

handleEvent('click')
```
![](images/exclude.png)
