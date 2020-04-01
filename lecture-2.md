
# Composition
---
### What is an abstraction?

#### :TODO:
---
Task 1: For every number in a list increase it by its own value
```javascript
const list1 = [56, -122, 12, -5, 212, 34, -25]

let list2 = []
for (let i in list1) {
	list2[i] = list1[i] + list[i]
}
console.log(list2) // [ 112, -244, 24, -10, 424, 68, -50 ]
```
___
Task 2: Turn every negative number to its positive counter part

```javascript
let list3 = []
for (let i in list2) {
	if (list2[i] < 0) {
		list3[i] = list2[i] * -1
	} else {
		list3[i] = list2[i]
	}
}
console.log(list3) // [ 112, 244, 24, 10, 424, 68, 50 ]
```
---
Generalization: find similarities and hide them behind the abstraction

```javascript
const iterateOverList = (lst) => {
	result = []
	for (let i in lst) {
		result[i] = fn(lst[i])
	}
	return result
}
```
___
Specialize: using abstraction provide only what is neccessary for an use-case

```javascript
const increastByItself = x => x + x
const makePositive = x => x < 0 ? x * -1 : x

list2 = iterateOverList(list1, increastByItself)
list3 = iterateOverList(list2, makePositive)
```
---
We can do better by using already existing abstraction.

```javascript
const map => (list, fn) => list.map(fn)
const double => (x) => x * 2
const abs = x = x < 0 ? x * -1 : x

list2 = map(map(list1, double), abs)
```
This helps to generalize code even more so making more useful in other scenarios.

---
Of course this is even better
```javascript
list2 = list1.map(double).map(abs)
```
But not every time so lucky to work only on arrays.

But luckily enough we have higher order functions to help us.
___
### Enter composition

Functional programming is all about composing small functions into bigger ones.

What does it mean?

Basically, taking two or more functions, smashing them together to get a new function.

Notes: For example, imperative code (e.g for-loops, very hard to compose)

---
### Detour to scary math-land

Having two functions
`f: A --> B`
`g: B --> C`

Then there must exist function `h: A --> C`

This function can be defined as composition of `f` and `g`:
`f . g = x => f(g(x)``

---
Let's try in practice.

```javascript
const Binary = x => ({
	value: x.toString(),
	inspect: `B${x}`,
}) 
console.log(Binary(1010)) // B1010

const toBinary = (x) => Binary(x) // String -> Binary
const toDecimal = (x) => parseInt(x.value, 2) // Binary -> Decimal

toBinary(1010) // B1010
toDecimal(Binary(1010)) // 10
```
How to get from `String -> Decimal` ?

---
```javascript
// String -> Decimal
const fromBinaryStringToDecimal = x => toDecimal(toBinary(x))
fromBinaryStringToDecimal('1010') // 10
```
But we can generalize `toDecimal(toBinary(x))`

```javascript
const compose = (f, g) => x => f(g(x))
// And we can redefine
const fromBinaryStringToDecimal = compose(toDecimal, toBinary)
fromBinaryStringToDecimal('1010') // 10
```
 ---
 Coming back to iteration over list
```javascript
```javascript
const map => (list, fn) => list.map(fn)
const double => (x) => x * 2
const abs = x = x < 0 ? x * -1 : x

list2 = map(map(list1, double), abs)
```
Let's redefine our map: swap the arguments and use currying
```javascript
const map2 = fn => list => list.map(fn)
```
and define a new function using `compose`
```javascript
const doubleAbs = compose(map2(double), map2(abs))
doubleAbs(list1) === map(map(list1, double), abs) // true
```
Notes: data-last for currying,

---
### Why composition?
* Composing two or more functions return also function (e.g preserves its form, like a Lego brick)
* Helps to abstract common logic and re-use it where needed
* Improves readability (no nesting function calls)
---
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczMTA3MDMzNiwxNjc5OTE5MTg4LDE2Mj
I0OTQ5NzMsODIxNDA3NzU2LDkzMzkxMzkxMSwtMTc3NjgzMDgw
NSwtMjA3MzIyNjk3Niw5ODAyODA4NzQsLTIyNTg2MzM3NSwyMD
Q4ODk4MjE1LDE4MjI2NjA4MzUsLTk1MDQxMjk5NywtMTYwMjcx
OTM4LDg2OTY0MDMxMCwtOTIwODk3MDAsLTEwODIwMjkwMDEsMT
AxMTkzNjczNiwtNTMxMDc0ODM3LC0xNTUyNTc4MzE5LC0xOTI4
NDQ1OTQ4XX0=
-->