# Zod 

- **Zod** is an npm package for input validation in JavaScript/TypeScript. It provides a fluent API for defining and validating data types, helping developers enforce rules for data structure and content in their applications

## Basic usage

### Creating a simple string schema
``` javascript
    
    const zod = require('zod)

    // creating a schema for strings
    const mySchema = zod.string();

    // parsing
    mySchema.parse("tuna"); // => "tuna"
    mySchema.parse(12); // => throws ZodError

    // "safe" parsing (doesn't throw error if validation fails)
    mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
    mySchema.safeParse(12); // => { success: false; error: ZodError }

```

### Creating an object schema

``` javascript

    const zod = require('zod)

    const User = zod.object({
        username: zod.string(),
    });

    User.parse({ username: "Ludwig" });

    // extract the inferred type
    type User = zod.infer<typeof User>;
    // { username: string }

```

## Primitives

``` javascript

    // primitive values
    zod.string();
    zod.number();
    zod.bigint();
    zod.boolean();
    zod.date();
    zod.symbol();

    // empty types
    zod.undefined();
    zod.null();
    zod.void(); // accepts undefined

    // catch-all types
    // allows any value
    zod.any();
    zod.unknown();

    // never type
    // allows no values
    zod.never();

```

## Coercion for primitives
- Zod now provides a more convenient way to coerce primitive values.

``` javascript
    
    const schema = zod.coerce.string();
    schema.parse("tuna"); // => "tuna"
    schema.parse(12); // => "12"
    schema.parse(true); // => "true"

```
- During the parsing step, the input is passed through the **String()** function, which is a JavaScript built-in for coercing data into strings.
- All primitive types support coercion.

``` javascript

    zod.coerce.string(); // String(input)
    zod.coerce.number(); // Number(input)
    zod.coerce.boolean(); // Boolean(input)
    zod.coerce.bigint(); // BigInt(input)
    zod.coerce.date(); // new Date(input)

```

#### Boolean Coercion
- Zod's boolean coercion is very simple! It passes the value into the Boolean(value) function.
- Any truthy value will resolve to true, any falsy value will resolve to false.

``` javascript

    zod.coerce.boolean().parse("tuna"); // => true
    zod.coerce.boolean().parse("true"); // => true
    zod.coerce.boolean().parse("false"); // => true
    zod.coerce.boolean().parse(1); // => true
    zod.coerce.boolean().parse([]); // => true

    zod.coerce.boolean().parse(0); // => false
    zod.coerce.boolean().parse(undefined); // => false
    zod.coerce.boolean().parse(null); // => false

```

## Literals
- Literal schemas represent a literal type, like "hello world" or 5.

``` javascript

    const tuna = zod.literal("tuna");
    const twelve = zod.literal(12);
    const twobig = zod.literal(2n); // bigint literal
    const tru = zod.literal(true);

    const terrificSymbol = Symbol("terrific");
    const terrific = zod.literal(terrificSymbol);

    // retrieve literal value
    tuna.value; // "tuna"

```

## String
- Zod includes a handful of string-specific validations.

``` javascript

    // validations
    zod.string().max(5);
    zod.string().min(5);
    zod.string().length(5);
    zod.string().email();
    zod.string().url();
    zod.string().emoji();
    zod.string().uuid();
    zod.string().cuid();
    zod.string().cuid2();
    zod.string().ulid();
    zod.string().regex(regex);
    zod.string().includes(string);
    zod.string().startsWith(string);
    zod.string().endsWith(string);
    zod.string().datetime(); // ISO 8601; default is without UTC offset, see below for options
    zod.string().ip(); // defaults to IPv4 and IPv6, see below for options

    // transformations
    zod.string().trim(); // trim whitespace
    zod.string().toLowerCase(); // toLowerCase
    zod.string().toUpperCase(); // toUpperCase

```

## Custom Error Messages
- We can customize some common error messages when creating a string schema.

``` javascript
    
    const name = zod.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
    });

```

- When using validation methods, we can pass in an additional argument to provide a custom error message.

``` javascript

    zod.string().min(5, { message: "Must be 5 or more characters long" });
    zod.string().max(5, { message: "Must be 5 or fewer characters long" });
    zod.string().length(5, { message: "Must be exactly 5 characters long" });
    zod.string().email({ message: "Invalid email address" });
    zod.string().url({ message: "Invalid url" });
    zod.string().emoji({ message: "Contains non-emoji characters" });
    zod.string().uuid({ message: "Invalid UUID" });
    zod.string().includes("tuna", { message: "Must include tuna" });
    zod.string().startsWith("https://", { message: "Must provide secure URL" });
    zod.string().endsWith(".com", { message: "Only .com domains allowed" });
    zod.string().datetime({ message: "Invalid datetime string! Must be UTC." });
    zod.string().ip({ message: "Invalid IP address" });

```

## Numbers
- Zod includes a handful of number-specific validations.

``` javascript

    zod.number().gt(5);
    zod.number().gte(5); // alias .min(5)
    zod.number().lt(5);
    zod.number().lte(5); // alias .max(5)

    zod.number().int(); // value must be an integer

    zod.number().positive(); //     > 0
    zod.number().nonnegative(); //  >= 0
    zod.number().negative(); //     < 0
    zod.number().nonpositive(); //  <= 0

    zod.number().multipleOf(5); // Evenly divisible by 5. Alias .step(5)

    zod.number().finite(); // value must be finite, not Infinity or -Infinity
    zod.number().safe(); // value must be between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER

```

- We can customize certain error messages when creating a number schema.

``` javascript

    const age = zod.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
    });

```

- Optionally, We can pass in a second argument to provide a custom error message.

``` javascript

    zod.number().lte(5, { message: "this👏is👏too👏big" });

```

## BigInts
- Zod includes a handful of bigint-specific validations.

``` javascript

    zod.bigint().gt(5n);
    zod.bigint().gte(5n); // alias `.min(5n)`
    zod.bigint().lt(5n);
    zod.bigint().lte(5n); // alias `.max(5n)`

    zod.bigint().positive(); // > 0n
    zod.bigint().nonnegative(); // >= 0n
    zod.bigint().negative(); // < 0n
    zod.bigint().nonpositive(); // <= 0n

    zod.bigint().multipleOf(5n); // Evenly divisible by 5n.

```

## NaNs
- We can customize certain error messages when creating a nan schema.

``` javascript

    const isNaN = zod.nan({
        required_error: "isNaN is required",
        invalid_type_error: "isNaN must be not a number",
    });

```

## Booleans
- We can customize certain error messages when creating a boolean schema.

``` javascript
    
    const isActive = zod.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be a boolean",
    });

```

## Dates
- Use **zod.date()** to validate Date instances.

``` javascript
    zod.date().safeParse(new Date()); // success: true
    zod.date().safeParse("2022-01-12T00:00:00.000Z"); // success: false

```
- We can customize certain error messages when creating a date schema.

``` javascript
    
    const myDateSchema = zod.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    });

```

- Zod provides a handful of date-specific validations.

``` javascript

    zod.date().min(new Date("1900-01-01"), { message: "Too old" });
    zod.date().max(new Date(), { message: "Too young!" });

```
