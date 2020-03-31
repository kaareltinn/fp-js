
# Composition

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
eyJoaXN0b3J5IjpbLTkyMDg5NzAwLC0xMDgyMDI5MDAxLDEwMT
E5MzY3MzYsLTUzMTA3NDgzNywtMTU1MjU3ODMxOSwtMTkyODQ0
NTk0OF19
-->