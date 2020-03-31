
# Composition
---


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
eyJoaXN0b3J5IjpbLTE2MDI3MTkzOCw4Njk2NDAzMTAsLTkyMD
g5NzAwLC0xMDgyMDI5MDAxLDEwMTE5MzY3MzYsLTUzMTA3NDgz
NywtMTU1MjU3ODMxOSwtMTkyODQ0NTk0OF19
-->