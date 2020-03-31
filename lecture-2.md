
# Composition
---
### What is an abstraction?

Task 1: Find largest number in a list
```javascript
const list1 = [56, 12, 212, 25]
```
---
```javascript
const list1 = [56, -122, 12, -5, 212, 34, -25]

let max = -Infinity;
for (let i in list1) {
	if (list1[i] >= max) {
		max = list1[i]
	}
}
console.log(max)
```
___
Task 2: Find largest negative number in a list

```javascript
const list2 = [56, -122, 12, -5, 212, 34, -25]

let maxNeg = -Infinity;
for (let i in list1) {
	if (list2[i] < 0 && list2[i] >= maxNeg) {
		maxNeg = list2[i]
	}
}
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
eyJoaXN0b3J5IjpbLTM2Nzk0MzQzLC0xNjAyNzE5MzgsODY5Nj
QwMzEwLC05MjA4OTcwMCwtMTA4MjAyOTAwMSwxMDExOTM2NzM2
LC01MzEwNzQ4MzcsLTE1NTI1NzgzMTksLTE5Mjg0NDU5NDhdfQ
==
-->