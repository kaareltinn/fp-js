
# Composition
---
Functional programming is all about composing small functions into bigger ones.

### Why?
* Helps to reuse

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
Notice the currying!

---
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjc0OTM4NTI1LC0xNjAyNzE5MzgsODY5Nj
QwMzEwLC05MjA4OTcwMCwtMTA4MjAyOTAwMSwxMDExOTM2NzM2
LC01MzEwNzQ4MzcsLTE1NTI1NzgzMTksLTE5Mjg0NDU5NDhdfQ
==
-->