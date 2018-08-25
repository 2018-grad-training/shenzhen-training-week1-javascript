# 练习：FizBuzzWhizz

## 练习目标

- 练习基本的编写测试用例（Test Case）的能力
- 练习测试驱动开发（TDD）

## 练习要求

你是一名体育老师，在某次课距离下课还有五分钟时，你决定搞一个游戏。此时有 100 名学生在上课。游戏的规则是:

1. 你首先说出三个不同的特殊数，要求必须是个位数，比如 3、5、7。

2. 让所有学生拍成一队，然后按顺序报数。

3. 学生报数时，如果所报数字是第一个特殊数(3)的倍数，那么不能说该数字，而要说 Fizz；如果所报数字是第二个特殊数(5)的倍数，那么要说 Buzz；如果所报数字是第三个特殊数(7)的倍数，那么要说 Whizz。

4. 学生报数时，如果所报数字同时是两个特殊数的倍数情况下，也要特殊处理，比如第一个特殊数和第二个特殊数的倍数，那么不能说该数字，而是要说 FizzBuzz, 以此类推。如果同时是三个特殊数的倍数，那么要说 FizzBuzzWhizz。

5. 学生报数时，如果所报数字包含了第一个特殊数，那么也不能说该数字，而是要说相应的单词，比如本例中第一个特殊数是 3，那么要报 13 的同学应该说 Fizz。如果数字中包含了第一个特殊数，那么忽略规则 3 和规则 4，比如要报 35 的同学只报 Fizz，不报 BuzzWhizz。

现在，我们需要你完成一个程序来模拟这个游戏，它首先接受 3 个特殊数，然后输出 100 名学生应该报数的数或单词。比如，

输入

```
3,5,7
```

输出(片段)

```
1
2
Fizz
4
Buzz
Fizz
Whizz
8
Fizz
Buzz
11
Fizz
Fizz
Whizz
FizzBuzz
16
17
Fizz
19
Buzz
...
直到100
```

### 输出结果

将个人练习代码库地址提交到教练指定的位置。

代码库需包含：

1. 说明如何运行和测试代码的 README.md 文件
2. 运行结果截图的 result.png 文件

## 如何开始：

1. `git clone https://github.com/tws-practice/fizbuzzwhizz.git`
2. 修改`src`目录下的`main.js`和`main-test.js`文件，打开`run.html`运行测试，完成练习。

## 学习资源

- 测试驱动开发(Test-Driven Development)：[https://baike.baidu.com/item/TDD/9064369](https://baike.baidu.com/item/TDD/9064369)
- Jasmine：[https://jasmine.github.io/2.0/introduction.html](https://jasmine.github.io/2.0/introduction.html)
