class FizzBuzz {
  constructor(first) {
    this.first = first
  }

  say(number) {
    return number === 1 ? this.first : 'Fizz'
  }
}

module.exports = {
  FizzBuzz,
}
