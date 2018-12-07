export { 
  isEmpty, 
  partial, 
  debounce, 
  compact,
  escape,
  map
} from "lodash"

export * from './api'

// не менять шафл на lodash иначе не работает, это все не просто так))

export const shuffle = array => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex = 0
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

