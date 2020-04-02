### Data: Structure and control flow
___
#### Agenda
* Immutability
* Controlling side-effects
* Functional control flow
___
### Immutability

In FP all data structures are considered immutable, meaning you cannot change contents of any structure.

#### Why?

Because mutating existing data is side-effect and not allowing this removes neccessity to guard against it.

Of course, JS data structures are not immutable by default, but this doesn't prevent treating them as such

---
### But data needs to changed?
Instead of mutating data, return new copy of it with changed contents.

We have been using our data structures immutably when using `Array.prototype.map` function

```javascript
let arr1 = [1, 2, 3]
let arr2 = arr1.map(x => x * 2)
console.log(arr1, arr2) // [1, 2, 3], [2, 4, 6]
```
---
### `const` keyword

Declaring variables with const doesn't mean that the data its referencing is immutable. 

```javascript
const foo = 2
foo += 1  // TypeError: Assignment to constant variable
const bar = [1, 2, 3]
bar[1] += 1
console.log(bar) // [1, 3, 3]
```

It only prevents reassignment of a variable.

---
### You have been using immutable data structures!

Strings in JS are immutable as are all other primitive data types.

```javascript
const str = "foobar"
str[0] = "F" // silently fails
console.log(str) // "foobar"
```
Running code in strict mode will cause an error (`"use strict"`)

---
### Using spread operator
Spread operator is useful for adding additional data to arrays/objects and returning new copies.

```javascript
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5 ] // [1, 2, 3, 4, 5]

const obj = { foo: 'foo', bar: 'bar' }
console.log({ ...obj, bar: 'BAR' } // { foo: 'foo', bar: 'BAR' }
```

---
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjE2OTAwNTg4XX0=
-->