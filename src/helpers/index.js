export { isEmpty, partial } from "lodash"

export const shuffle = array => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex = 0
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export const getArrayOfSongs = arrayOfSongs => {
  const array = []
  arrayOfSongs.forEach(element => {
    array.push(element.song)
  })
  return array
}
