const getResult = (words) => {
  if (words.split(' ').length === 1) {
    return `${words} 1`
  }

  const result = splitWords(words).reduce(
    (total, input) =>
      Object.assign(total, {
        [input]: (total[input] || 0) + 1,
      }),
    {}
  )

  return Object.keys(
    splitWords(words).reduce(
      (total, input) =>
        Object.assign(total, {
          [input]: (total[input] || 0) + 1,
        }),
      {}
    )
  )
    .map((item) => ({ word: item, counts: result[item] }))
    .sort((one, another) => another.counts - one.counts)
    .map(({ word, counts }) => `${word} ${counts}`)
    .join('\n')
}

const splitWords = (words) => words.split(' ').filter((input) => input)

module.exports = {
  getResult,
}
