# Week 12.2 | Advance Typescript APIs

## Contents:
- [**Pre-requisities**](#pre-requisities)
    - [**Interface**](#interface)
    - [**Type**](#type)
    - [**Recap setup procedure**](#recap-setup-procedure)
- [**Pick**](#pick)

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
- **Pick** allows us to create a new type by selecting a set of properties (**Keys**) from an existing type (**Type**).
- Imagine we have a User model with several properties, but for a user profile display, we only need a subset of these properties.
```ts
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
```
- This will also ensure that if the type of any key in **User** type changes, those changes will be reflect back to **UserProfile**.