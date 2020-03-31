
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
eyJoaXN0b3J5IjpbLTk4MjY0MDkxNCwyMDQ4ODk4MjE1LDE4Mj
I2NjA4MzUsLTk1MDQxMjk5NywtMTYwMjcxOTM4LDg2OTY0MDMx
MCwtOTIwODk3MDAsLTEwODIwMjkwMDEsMTAxMTkzNjczNiwtNT
MxMDc0ODM3LC0xNTUyNTc4MzE5LC0xOTI4NDQ1OTQ4XX0=
-->