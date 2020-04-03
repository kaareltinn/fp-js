import movies from './movies'

const node = document.getElementById('app')

// Impure and imperative
const renderMovie1 = (movie) => {
  const outerDiv = document.createElement('div')
  outerDiv.setAttribute('class', 'my-5 flex items-center rounded-lg shadow-md bg-gray-100')

  const innerDiv1 = document.createElement('div')
  innerDiv1.setAttribute('class', 'flex items-center m-4 h-12 w-12 border rounded-full border-black')

  const innerDiv2 = document.createElement('div')
  innerDiv2.setAttribute('class', 'p-2')

  const span = document.createElement('span')
  span.setAttribute('class', 'mx-auto')

  const p = document.createElement('p')
  p.setAttribute('class', 'font-bold')

  const textNode1 = document.createTextNode(movie.abbr)
  const textNode2 = document.createTextNode(movie.title)

  span.appendChild(textNode1)
  p.appendChild(textNode2)

  innerDiv1.appendChild(span)
  innerDiv2.appendChild(p)

  outerDiv.appendChild(innerDiv1)
  outerDiv.appendChild(innerDiv2)

  node.appendChild(outerDiv)
}

renderMovie1(movies[1])

// Imperative
const renderMovie2 = (movie) => {
  const outerDiv = document.createElement('div')
  outerDiv.setAttribute('class', 'my-5 flex items-center rounded-lg shadow-md bg-gray-100')

  const innerDiv1 = document.createElement('div')
  innerDiv1.setAttribute('class', 'flex items-center m-4 h-12 w-12 border rounded-full border-black')

  const innerDiv2 = document.createElement('div')
  innerDiv2.setAttribute('class', 'p-2')

  const span = document.createElement('span')
  span.setAttribute('class', 'mx-auto')

  const p = document.createElement('p')
  p.setAttribute('class', 'font-bold')

  const textNode1 = document.createTextNode(movie.abbr)
  const textNode2 = document.createTextNode(movie.title)

  span.appendChild(textNode1)
  p.appendChild(textNode2)

  innerDiv1.appendChild(span)
  innerDiv2.appendChild(p)

  outerDiv.appendChild(innerDiv1)
  outerDiv.appendChild(innerDiv2)

  return outerDiv
}

const movie3 = renderMovie2(movies[2])
node.appendChild(movie3)

// Declarative

// Using let because we are going to over-write it down
let div = (...args) => {
  const divElem = document.createElement('div')

  if (args.length === 1) {
    const children = args[0]
    children.map(child => divElem.append(child))
  }

  const attributes = args[0]
  divElem.setAttribute('class', attributes.className)
  const children = args[1]
  children.map(child => divElem.append(child))

  return divElem
}

let span = (...args) => {
  const spanEl = document.createElement('span')

  if (args.length === 1) {
    const children = args[0]
    children.map(child => spenEl.append(child))
  }

  const attributes = args[0]
  spanEl.setAttribute('class', attributes.className)
  const children = args[1]
  children.map(child => spanEl.append(child))

  return spanEl
}

let p = (...args) => {
  const pEl = document.createElement('p')

  if (args.length === 1) {
    const children = args[0]
    children.map(child => spenEl.append(child))
  }

  const attributes = args[0]
  pEl.setAttribute('class', attributes.className)
  const children = args[1]
  children.map(child => pEl.append(child))

  return pEl
}

const text = (content) => document.createTextNode(content)

const renderMovie3 = (movie) => (
  div({ className: 'my-5 flex items-center rounded-lg shadow-md bg-gray-100' },
    [
      div({ className: 'flex items-center m-4 h-12 w-12 border rounded-full border-black' },
        [
          span({ className: 'mx-auto' }, [text(movie.abbr)])
        ]
      ),
      div({ className: 'p-2' },
        [
          p({ className: 'font-bold' }, [text(movie.title)])
        ]
      )
    ]
  )
)

const movie4 = renderMovie3(movies[3])
node.appendChild(movie4)

// Use currying to extract repetition
const elementCreator = (tagName) => (...args) => {
  const tag = document.createElement(tagName)

  if (args.length === 1) {
    const children = args[0]
    children.map(child => tag.append(child))
  }

  const attributes = args[0]
  tag.setAttribute('class', attributes.className)
  const children = args[1]
  children.map(child => tag.append(child))

  return tag
}

div = elementCreator('div')
span = elementCreator('span')
p = elementCreator('p')

const movie5 = renderMovie3(movies[4])
node.appendChild(movie5)

// Use hyperscript library
import h from 'hyperscript'
import hh from 'hyperscript-helpers'

const tags = hh(h) // normally would do `const { div } = hh(h)`

const renderMovie4 = (movie) => (
  tags.div({ className: 'my-5 flex items-center rounded-lg shadow-md bg-gray-100' }
    , [ tags.div({ className: 'flex items-center m-4 h-12 w-12 border rounded-full border-black' }
        , tags.span({ className: 'mx-auto' }, movie.abbr))
        , tags.div({ className: 'p-2' }, tags.p({ className: 'font-bold' }, movie.title))
      ]
  )
)

const movie6 = renderMovie4(movies[5])
node.appendChild(movie6)
