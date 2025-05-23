# Example of Using Union and Intersection Types in TypeScript

## 🔹 Union Type

A **Union Type** in TypeScript allows a variable to hold values of multiple possible types. This means that if a value matches any one of the specified types, it will be considered valid for that variable.

It behaves similarly to the logical OR (`||`) operator in JavaScript, but in TypeScript, we use a single pipe symbol (`|`) for type declarations.

### Example:

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;

value = "Hello";
value = 123;  
```
### 🎯 Real-world example:

```tsx
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId(101);      
printId("A1234");  

```
🔸 **Note:** Union types are useful when a variable, function parameter, or return type can be more than one possible type.

---


## 🔹 Intersection Type

An **Intersection Type** allows you to combine multiple types into one. The resulting type must include all the properties and characteristics from the combined types.

This concept is similar to the AND (`&&`) operator in JavaScript in terms of combining conditions, but in TypeScript, it is expressed using a single ampersand (`&`).

### Example:

```tsx
type Name = {
  name: string;
};
type Age = {
  age: number;
};

type Person = Name & Age;

const user: Person = {
  name: "Alice",
  age: 25
};
```
### 🎯 Real-world example:

```
ts
CopyEdit
type Employee = Name & Age & { role: string };

const employee: Employee = {
  name: "Bob",
  age: 30,
  role: "Developer"
};

```
🔸 **Note:** Intersection types are useful when an object must meet multiple type constraints at the same time.

---

## 🔹 **Key Differences**

| Feature | `Union` | `Intersection` |
| --- | --- | --- |
| **Type Logic** | Value can be of **any one** of the listed types. | Value must satisfy **all** listed types simultaneously. |
| **Type Safety** | More flexible, accepts a **wider range** of types. | Stricter, enforces **all type requirements**. |
| **Use Case** | When a value could be **one of several types**. | When you need to **combine multiple type features**. |
| **Assignments** | Valid if the value matches **at least one** of the types. | Valid only if the value matches **every** type in the intersection. |
| **Common Use** | Useful for handling **varied input types or alternatives**. | Ideal for creating **composite objects** with multiple capabilities. |



## 🔹 Conclusion

- Use **Union Types** when a variable or parameter should accept **multiple alternative types**.
- Use **Intersection Types** when you need to **combine multiple type definitions** into one.
- Both are essential tools for building robust and flexible TypeScript applications.

By understanding when and how to use union and intersection types, you can write code that's both expressive and type-safe.

---


# Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

### 🔹 Any Type

In TypeScript, the **`any`** type allows a variable to store any kind of data, whether it's a string, number, boolean, or any other type, without causing any type errors. When a variable is declared as `any`, TypeScript does not enforce type checking on it, meaning the variable can hold values of any type without issue. While this offers flexibility, it also removes TypeScript's key feature: **type safety**. Therefore, using `any` too frequently can defeat the purpose of using TypeScript.

```tsx
let x: any;
x = 5;   
x = "hello"; 
x = true;
```

### 🔹 Unknown Type

The unknown type is used when the type of a variable is not known at the time of declaration. Unlike any, variables with the unknown type cannot be used until their type is explicitly checked and defined. This enforces type safety by requiring the user to verify the type before usage. It ensures that the variable's type is validated before any operations are performed on it, making it safer than any.

```tsx
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### 🔹Never Type

The never type represents values that will never occur. It is typically used for functions that never return a value or those that run indefinitely, such as functions with infinite loops or those that throw errors. Since never is used for scenarios where execution cannot complete normally, it doesn't accept any type of value.

```tsx
function throwError(): never {
  throw new Error("Something went wrong!");
}
```

## 🔹 **Key Differences**

| Feature | `any` | `unknown` | `never` |
| --- | --- | --- | --- |
| **Type Safety** | No type safety. Type checking is disabled. | Requires type checking before use, preserving type safety. | Does not allow any values; represents functions that never return. |
| **Use Case** | When you want maximum flexibility, but lose type safety. | When the type is unknown, but you want to enforce type checking. | For functions that don’t return a value (infinite loops, errors). |
| **Assignments** | Can assign any type freely without errors. | Must check the type before performing any operation. | Cannot be assigned any value. |
| **Common Use** | Used for dynamic, untyped data where type checking is not a priority. | Used when dealing with uncertain data where validation is required. | Used for functions or code paths that cannot finish normally (e.g., infinite loops or error-throwing functions). |

## 🔹 **Conclusion**

In summary, `any`, `unknown`, and `never` serve different purposes in TypeScript:

- **`any`** provides the most flexibility but sacrifices type safety. It should be used cautiously to avoid undermining TypeScript's core benefit of static type checking.
- **`unknown`** ensures type safety by requiring explicit type checks before using the value, making it a safer alternative to `any`.
- **`never`** is used for functions that never return a value or when an operation cannot be completed, such as in infinite loops or error-throwing situations.

By understanding and correctly using any, unknown, and never, developers can write more reliable, maintainable, and type-safe code.
