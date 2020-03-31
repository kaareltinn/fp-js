
# Composition
---
### What is an abstraction?

#### :TODO:
---
Task 1: Multiply number in a list by itself
```javascript
const list1 = [56, -122, 12, -5, 212, 34, -25]

let result = []
for (let i in list1) {
	result[i] = list1[i] * list[1]
}
console.log(result) // 
```
___
Task 2: Find "largest" negative number in a list

```javascript
const list2 = [56, -122, 12, -5, 212, 34, -25]

let maxNeg = Infinity;
for (let i in list2) {
	if (list2[i] < 0 && list2[i] <= maxNeg) {
		maxNeg = list2[i]
	}
}
console.log(maxNeg) // -122
```
---
Generalization: find similarities and hide them behind the abstraction
```javascript
const iterateOverList = (lst) => {
	for (let i in lst) {
		???
	}
}
```
___
Specialize: using abstraction provide only what is neccessary for an use-case
```javascript

```
---
Functional programming is all about composing small functions into bigger ones.

### Why?
* Helps to re-use code
* Abstracts 

---

Having two functions
`f: A --> B`
`g: B --> C`

Then there must exist function `h: A --> C`

This function can be defined as composition of `f` and `g`:
`f . g = x => f(g(x)``

---
In JS world:

```javascript
const compose = (f, g) => x => f(g(x))
```


---
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDcyNDk3Mzc4LDIwNDg4OTgyMTUsMTgyMj
Y2MDgzNSwtOTUwNDEyOTk3LC0xNjAyNzE5MzgsODY5NjQwMzEw
LC05MjA4OTcwMCwtMTA4MjAyOTAwMSwxMDExOTM2NzM2LC01Mz
EwNzQ4MzcsLTE1NTI1NzgzMTksLTE5Mjg0NDU5NDhdfQ==
-->