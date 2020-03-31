
# Composition

---

Having two functions
`f: A --> B`
`g: B --> C`

Then there must exist function `h: A --> C`

This function can be defined as composition of `f` and `g`:
`f . g = x => f(g(x)``

---
In JS world

```javascript
const compose = (f, g) => x => f(g(x))
```
Not
---
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwODIwMjkwMDEsMTAxMTkzNjczNiwtNT
MxMDc0ODM3LC0xNTUyNTc4MzE5LC0xOTI4NDQ1OTQ4XX0=
-->