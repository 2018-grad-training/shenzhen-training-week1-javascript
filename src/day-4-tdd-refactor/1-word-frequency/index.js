class Input {
  constructor(word, count) {
    this.value = word
    this.count = count
  }

  getValue() {
    return this.value
  }

  getWordCount() {
    return this.count
  }
}

const getResult = (words) => {
  if (words.split(' ').length === 1) {
    return `${words} 1`
  }

  const inputList = words
    .split(' ')
    .filter((input) => input)
    .map((input) => new Input(input, 1))

  // get the map for the next step of sizing the same word
  const map = getListMap(inputList)

  return Object.keys(map)
    .map((entry) => new Input(entry, map[entry].length))
    .sort((w1, w2) => w2.count - w1.count)
    .map((item) => `${item.value} ${item.count}`)
    .join('\n')
}

const getListMap = (inputList) => {
  const map = {}
  for (const input of inputList) {
    if (!map.hasOwnProperty(input.value)) {
      map[input.value] = [input]
    } else {
      map[input.value].push(input)
    }
  }

  return map
}

module.exports = {
  getResult,
}
