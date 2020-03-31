
# Composition
---
### What is an abstraction?

Consider having a need to iterate over a list of numbers and  
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
eyJoaXN0b3J5IjpbLTE3MjYwNjg1NzYsLTE2MDI3MTkzOCw4Nj
k2NDAzMTAsLTkyMDg5NzAwLC0xMDgyMDI5MDAxLDEwMTE5MzY3
MzYsLTUzMTA3NDgzNywtMTU1MjU3ODMxOSwtMTkyODQ0NTk0OF
19
-->