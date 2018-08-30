const getResult = (words) => {
  if (words.split(' ').length === 1) {
    return `${words} 1`
  }

  const result = splitWords(words).reduce(
    (total, input) =>
      Object.assign(total, {
        [input]: total.hasOwnProperty(input) ? total[input] + 1 : 1,
      }),
    {}
  )

  return Object.keys(result)
    .map((item) => ({ word: item, counts: result[item] }))
    .sort((one, another) => another.counts - one.counts)
    .map(({ word, counts }) => `${word} ${counts}`)
    .join('\n')
}

function splitWords(words) {
  return words.split(' ').filter((input) => input)
}

module.exports = {
  getResult,
}
