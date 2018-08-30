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
  const inputList = []

  for (const s of arr) {
    const input = new Input(s, 1)
    inputList.push(input)
  }

  // get the map for the next step of sizing the same word
  const map = getListMap(inputList)
  const list = []

  for (const entry of Object.keys(map)) {
    const input = new Input(entry, map[entry].length)
    list.push(input)
  }
  const newList = list.sort((w1, w2) => w2.getWordCount() - w1.getWordCount())

  const result = []
  for (const w of newList) {
    result.push(`${w.getValue()} ${w.getWordCount()}`)
  }

  return result.join('\n')
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
