require('colors')

Array.of(1, 2, 3)

class A {
  b

  constructor(bstr) {
    this.b = bstr
  }
}

const a = new A('test')
console.log(a.b.blue)

{
  const double = [1, 2, 3].map((num) => num * 2)
  console.log(...double)
}

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
console.log(x)
console.log(y)
console.log(z)

console.log('Hello,'.red, 'npm!'.green)
