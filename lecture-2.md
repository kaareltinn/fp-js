
# Composition
---
### What is an abstraction?

Task: Find largest number in a list
```javascript
const list1 = [56, 12, 212, 25]
```
---
```javascript
const list1 = [56, 12, 212, 25]

let max = -Infinity;
for (let i in list1) {
	if (list1[i] >= max) {
		max = list1[i]
	}
}
console.log(max)
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
eyJoaXN0b3J5IjpbLTIyNjgyMTM2MSwtMTYwMjcxOTM4LDg2OT
Y0MDMxMCwtOTIwODk3MDAsLTEwODIwMjkwMDEsMTAxMTkzNjcz
NiwtNTMxMDc0ODM3LC0xNTUyNTc4MzE5LC0xOTI4NDQ1OTQ4XX
0=
-->