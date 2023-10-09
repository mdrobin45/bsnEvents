
## Question 1

Answer: **A**

```bash
let greeting;
greetign = {};
console.log(greetign);
```
This code output is {} because without let, const, var before a variable assignment it becomes a global variable. And javascript is  case-sensitive that's why there has two different varible. First one is decleared but not assign any value that's why it will give 'undefined' and second one will be global variable it will give {}


## Question 2

Answer: **C**

```bash
function sum(a, b) {
  return a + b;
}
sum(1, "2");
```

This code output is "12" because in two parameters first one is number type and second one is string type. It can't make total sum with two type.



## Question 3

Answer: **A**

```bash
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);
```

The answer will be A because there already assign a food variable with an array. Then assign an info object with the first element of the array and it's another variable still not modify food variable. Then there has added another item in favoriteFood of info object which replace the favoriteFood value with new assigned item but still not modify food. So the ultimate output is option A

## Question 4

Answer: **B**

```bash
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
```

The output is be "Hi there, undefined" because sayHi function take a parameter but when console without parameter that means parameter name is undefined. And before parameter there has string and comma(,) which is hard coded.

## Question 5

Answer: **C**

```bash
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
```

Here count will be 3 because with the forEach method itereate all items in the nums array. Then it check if array items is truthy count will increament by 1. We can see in nums array there has 3 item but 0 is falsy value that's why count will increament 3 times by 1. And ultimate output is 1+1+1=3;