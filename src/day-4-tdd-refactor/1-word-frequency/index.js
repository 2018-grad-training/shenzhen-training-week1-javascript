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

const getResult = (inputStr) => {
  if (inputStr.split(' ').length === 1) {
    return `${inputStr} 1`
  }

  const arr = inputStr.split(' ').filter((input) => input)
  const inputList = arr.map((input) => new Input(input, 1))

  // get the map for the next step of sizing the same word
  const map = getListMap(inputList)
  const list = Object.keys(map)
    .map((entry) => new Input(entry, map[entry].length))
    .sort((w1, w2) => w2.getWordCount() - w1.getWordCount())

  return list
    .map((item) => `${item.getValue()} ${item.getWordCount()}`)
    .join('\n')
}

const getListMap = (inputList) => {
  const map = {}
  for (const input of inputList) {
    if (!map.hasOwnProperty(input.getValue())) {
      const arr = []
      arr.push(input)
      map[input.getValue()] = arr
    } else {
      map[input.getValue()].push(input)
    }
  }

  return map
}

module.exports = {
  getResult,
}
