# Functions

> **“Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.”**  ~John Carmack (Id Software, Oculus VR)
---
### What is a function?

Simple definition: block of code which can be called multiple times.
```javascript
function addUser(userData) {
	const user = new User(userData)
	user.save() // saving to DB
	return user
} 

addUser({ name: 'John' })
addUser({ name: 'Mary' })
```
Notes: procedure vs function. procedure may take no inputs and produce no output, has side-effects

---
Is `addUser` a function?

Technically speaking, yes.

```javascript
addUser() // What happens?
```
Error? New user record created?

Notes: JS gives no error if function with arguments is called without any passed

---
In FP we treat a function as main building block. For that it is needed that function satisfies certain rules.

Function in FP terms is treated like a mapping, e.g like in math.
It takes **inputs** and always **returns** some **output** (and this without having effect on outer world)

> *"A function relates an input to an output."* ~[https://www.mathsisfun.com/sets/function.html](https://www.mathsisfun.com/sets/function.html)

---
### Pure functions
1. Always returns same output for a given input (referential transparency)
2. Produces no side-effects (no `console.log`, DB changes, changing global program state, etc)

---
Separation by purity
```javascript
// pure
function newUser(userData) {
	return new User(userData)
}

// impure
function saveUser(user) {
	user.save()
}

const john = newUser({ name: 'John' })
addUser(john)
addUser() // => error
```
---
#### Why?
1. Easier to reason about.
2. Makes programs more predictable.

There are more advanced techniques/possibilities that pure functions enable, but for now lets keep it simple.

Notes: caching/memoization, parallel computing, delaying evaluation

Notes: It does not mean we always need write pure functions since any useful application requires having side-effects. But we should thrive for using pure functions as mush as possible and separate pure code from impure so we could have better control over side-effects.

---
### Functions are data
In FP functions are data type like any other.

#### How?

* You can assign function to variable
* Pass function to as an parameter to another function
* Return function as an return value of another function
* Make function as an object property

See? Like any other data

---
### Higher order functions

Functions that take functions as an argument or return function as a return value are called **higher order functions**.

Most famous (and probably most useful) higher order function is `map`
```javascript
const arr = [6, 2, 7]
function double(num) {
	return num * 2
}

arr.map(double) // [12, 4, 14]
arr.amp(num => num * 3) // [18, 6, 21]
```
`map` is a higher order function because it accepts function as an argument

Other useful HOF's: `filter`, `reduce`

---
```javascript
function power(base) {
	return function(num) {
		return num ** base
	}
}

const square = power(2)
const cube = power(3)
square(5) // 25
cube(5) // 125
```
---
### ES6 arrow functions
ES6 introduced more concise syntax for defining anonymous functions.
```javascript
const power = (base) => (num) => num ** base
```
---

### Currying
Curried functions accept arguments one by one, every time returning new function waiting for next argument.

In many functional languages all functions are curried by default. 
In JS this can be emulate with higher order functions.
```javascript
const power = base => num => num ** base
// Note order of arguments
const square = power(2)
square(4) == power(2)(4) // true
power(2, 4) // error -> sadly not possible!

import { curry } from 'lodash'
const power = curry((base, num) => num ** base)
power(2, 4) // 16 -> Yay!
```
---
### Homework #1

Mäng vana tuttava Maarduga, kellel on eelmisest hooajast kõrgliiga kogemus all, tuleb kindlasti põnev ja pingeline. Mäletan 3 aasta tagust mängu Elvas, kus suutsime viimase minuti väravaga Maardu alistada 4-3. Loodan, et suudame seekordki võidu koju jätta ja hea emotsiooniga hooaega jätkata.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk3MjY2ODczOSwtMTgzNjg2MTU1OSwxMz
k4NDY3MTIxLC0xMjA0NTQwNTY0LDE5MDExNTc2MjFdfQ==
-->