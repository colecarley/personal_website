
# Implementing the Rust result type in TypeScript

Do you see a problem with this TypeScript code?
  
```ts
const response: Response = await fetch('https://website.com/');  
const data: any = response.json();  
console.log(data);  
```

Do you have it? That’s right. There is no error handling, and there is no way to know if an error is going to be thrown.

## TYPESCRIPT’S TERRIBLE ERROR HANDLING

TypeScript is one of the most desired languages in the software industry, and arguably one of my favorite language to write in. JavaScript’s flexibility, paired with TypeScript’s expressive type system, speeds up workflow and leaves more time for solving real problems.

Although it is one of my favorite languages, TypeScript — or JavaScript — has a significant flaw: it gives no warning about what may or may not throw an error. This either leads to hours of reading documentation or poorly written code.

This is where Rust comes in. Rust is the most loved language by developers and has been for the last eight years. With its ability to prevent memory-related bugs, vast type system, and speed, it was bound to find its way to the top of the language food chain.

One particularly beautiful feature of Rust is its error handling type, `Result`. The `Result` holds either the valid value or the error. See the definition from [the Rust website]([https://doc.rust-lang.org/std/result/](https://doc.rust-lang.org/std/result/))

> `Result<T, E>` is the type used for returning and propagating errors. It is an enum with the variants, `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

## WHY I WANTED TO CREATE MY OWN RESULT TYPE

Rust’s `Result` type forces the programmer to handle an error before using the resulting value. This makes it impossible to write code that isn't at least *aware* of the errors that could occur. Our goal is to create a `Result` type in TypeScript to have the robust error handling of Rust while keeping the freedom of JavaScript.

Let’s rewrite our code shown above to use the result type we will be creating:

```ts
const result: Result<Response, Error> = await safeFetch('https://website.com/');  
// we can’t do anything with the value in the result until we address the possibility of an error

if (response.isOk()) {  
	 const response: Response = result.unwrap();   
	 const data: any = await response.json();  
	 console.log(data);
} else {  
	 console.log(result.getErr().message);
}  

// OR 

const response = result.expect("Could not get response"); // will throw if error is present
const data: any = await response.json();
console.log(data);
```

Beautiful!

## IMPLEMENTATION

Rust’s `Result` is implemented as an enum, but because TypeScript does not have enums, we will implement ours as a class. The class's functions are relatively trivial, but the types are where it gets interesting.

Here is our class signature:

```ts
 class Result<T, E extends Error> {  
	 #ok: T | null; // value  
	 #err: E | null; // error
	
	 constructor(ok: T | null, err: E | null): Result<T, E>
	
	 unwrap(): T;  
	   
	 expect(msg: string): T;  
	   
	 isOk(): this is Result<T, never>;  
	   
	 isErr(): this is Result<never, E>;  
	   
	 getErr(): this extends Result<never, E> ? E : E | null;  
 }  
```

The `#ok` and `#err` attributes are private, so the class user cannot access the values directly, but only through the ways we allow. Let’s look at each of these functions to see what they do.

The `constructor` function:  

```ts
constructor(ok: T | null, err: E | null) {  
	 if (!ok && !err) {  
		 throw new Error('Result must have a value or an error');  
	 }
	 if (ok && err) {
		 throw new Error('Result cannot have both a value and and error')
	 }
   
	 if (ok !== null) {  
		 this.#ok = ok;  
	 } else {  
		 this.#err = err as E;  
	 }  
 }  
```

The constructor is fairly self-explanatory. There can either be a valid value or an error, so the constructor must take *either* a value or an error, and it must not allow both values to be `null` or both values to be present.

The `unwrap` and `expect` functions:  

```ts
unwrap(): T {  
	if (this.isOk()) {  
		return this.#ok as T;  
	}  
	
	if (this.isErr()) {  
		throw this.#err as E;  
	}  
	
	throw new Error(“Unknown error”);  
}  
```

```ts
expect(msg: string): T {  
	 if (this.isOk()) {
		 return this.#ok as T;  
	 }  
	   
	 if (this.isErr()) {  
		 const err = this.#err as E;  
		 throw (err.message = msg + “:\n “ + err.message);  
	 }   
	   
	 throw new Error(msg);  
}  
```

Both the `unwrap` and `expect` functions return the valid value or throw the error that was returned instead. The `expect` function is almost the same, but it adds a user-supplied message to the error to give more context in the console when debugging.

The `isOk` and `isErr` functions:  
```ts
isOk(): this is Result<T, never> {  
	return this.#ok !== null;  
}  
```

```ts
isErr(): this is Result<never, E> {  
	return this.#err !== null;  
}  
```

The `isOk` function and the `isErr` function check to see if the result is a value or an error, respectively. Both of these functions are type predicates used for type narrowing. Usually, type predicates look like this...

```ts
function isString(x: unknown): x is string {  
	return typeof x === ‘string’;  
}  
```

where the value whose type is being validated is passed as a parameter, but in the context of a class, we can do something a little more interesting. Instead of validating a parameter, we can validate the class type with the `this` object.

When the `isOk` function is called, the class type is redefined to be `Result<T, never>` if the value is valid. If the result is good, and there can never be an error. Similarly, when the `isErr` function is called, the class is redefined as `Result<never, E>` if an error is present.

The `getErr` function:  
```ts
getErr(): this extends Result<never, E> ? E : E | null {  
	return this.#err as E;  
}  
```

I wanted to add a way to get the error so the user can do whatever they need to do with it. Although I could make the `#err` attribute public, the types wouldn’t be quite right. This function allows us to have nice type narrowing.

When calling `getErr`, we have a conditional type for the result. If the class is of type `Result<never, E>` — if `isErr` was called and was true — then the result is guaranteed to be an error. This gives us some intuitive typing when used correctly:

See the following example:

```ts
const result: Result<Response, Error> = await fetch('https://website.com/');

const err: Error | null = this.getErr(); // unknown if error is present

if (response.isErr()) {  
	const err: Error = this.getErr();   // error is guaranteed to be present
}

if (response.isOk()) {  
	const err: null = this.getErr();  // there can never be an error
}  
```

Now, we have reliable type narrowing while allowing our user to access the error!

## A PRACTICAL EXAMPLE USING OUR TYPESCRIPT RESULT
We will implement a `safeFetch` function with our new `Result` type. This function will act as a wrapper around the global Fetch API  `fetch` function. All of our error handling happens exclusively in this function, and our wrapper will return a `Promise<Result<Response, Error>>`, instead of a `Promise<Response>`.

```ts
export async function safeFetch(  
 input: RequestInfo | URL,  
 init?: RequestInit | undefined  
): Promise<Result<Response, Error>> {  
	try {  
		const response: Response = await fetch(input, init);  
		return new Result<Response, Error>(response, null);  
	
	} catch (error: unknown) {  
		if (error instanceof Error) {  
			return new Result<Response, Error>(null, error);  
		}  
	
		return new Result<Response, Error>(null, new Error(“Unknown error”));  
	}  
}  
```

Perfect! Now we have a `safeFetch` function that will prevent users from not handling errors. It just propagates the responsibility right onto the users lap, just as we want it to.

## CONCLUSION

This project has some practical and powerful use cases while being reasonably easy to implement. It will reduce errors throughout your codebase and give you the peace of mind you deserve while writing. Feel free to use this code, and let me know if you try something like this out for yourself!