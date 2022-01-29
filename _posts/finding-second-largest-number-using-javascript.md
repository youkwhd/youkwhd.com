---
title: Finding The Second Largest Number Using JavaScript
tags:
  - javascript
date: "2021-10-22"
excerpt: after finding the biggest number in an array, if you are wondering how to get the second largest number, then this article might be the one that you're looking for, plus i will explain how it works.
---

after finding the **biggest** number in an array, if you are wondering how to get the **second** largest number, you're in the right place.

### get started

if you don't have an array, generate the array using [this website](https://array-generator.vercel.app) ;D

using first method:

```js
const nums = [78, 2, 61, 33, 97, 69, 54, 86, 90, 35, 79, 30, 80, 81, 80, 58, 51, 32, 9, 8, 59, 34, 50];

const findSecondLargestNum = (arr) => {
    // sort the array first (ascending)
    const sortedArr = arr.sort((x, y) => { return x - y });

    // iterate through the array from the last index
    // knowing that it has been sorted
    for (let i = sortedArr.length - 1; i >= 0; i--) {
        // check if the current value - 1 (next value) 
        // is not a duplicate of the current value
        // and if it's not `undefined`
        if (sortedArr[i - 1] !== sortedArr[i] && sortedArr[i - 1] !== undefined) {
            return sortedArr[i - 1];
        }
    }

    // return undefined or null
    // if second largest num is not found
    return; 
};

```

### how does this method work?

the function `findSecondLargestNum` will take a parameter, an array filled with numbers.

then the array will be sorted ascendingly, why sorting it tho? by sorting the array, the biggest number position should be at the last. same as if you were sorting it descendingly, the biggest number position would be at the first. 

what's the conclusion of sorting the array? knowing that we would have the biggest number at the last index, we'll have an *assumption* that the second biggest number is the index of the biggest number - 1 (ascending) or + 1 (descending).

then we could just say: `return sortedArr[i - 1]` (without looping)

but, on the shown code above, we're iterating through the `sortedArr`, but why? *assuming* that the array would be `const nums = [10, 10, 10, 10]` if we were sorting it, i mean, it already is sorted, so the function would just return **10**, but there is no 'second largest number', what the function should do is that, it would return an error, so then we could just return nothing / undefined.

that's why we need to iterate through the array, to avoid unwanted errors, by decrementing the current number index by 1, we would know the next value of the array, if it's not the same as the current value, meaning it's not `[10, 10]` but rather be `[<any other number>, 10]` if so, then we could just return the `<any other number>` as the second largest number.

why even bother to check if the next index of `sortedArr[i - 1]` is not undefined? the reason behind this is that, if all the values of a given array is the same, as if `const num = [10, 10, 10, 10]`, then when the itterator or index hits the `nums[0] // 10` then it will check if the `nums[0 - 1] // undefined` is the same as `nums[0]`, of course the condition is met, then it would just return **10** as the result. so that is why we need to iterate through and check if the next value is not undefined.

what's the last `return;` does? if the itteration condition doesn't met the requirement, then just return nothing / undefined.

using the second method:

```js
const nums = [78, 2, 61, 33, 97, 69, 54, 86, 90, 35, 79, 30, 80, 81, 80, 58, 51, 32, 9, 8, 59, 34, 50];

const findSecondLargestNum = (arr) => {
    let biggestNum = arr[0];
    let secondLargest = 0;

    // keep track of `secondLargest` num iteration
    let historyArr = [];
    
    // find the biggest number first
    for (let i = 0; i < arr.length; i++) {
        // if the current number is bigger than
        // the current biggest num then assign
        // `biggestNum` as current number
        if (arr[i] > biggestNum) {
            biggestNum = arr[i];
        }
    }

    // then find the second largest number
    for (let i = 0; i < arr.length; i++) {
        // check if current iteration is less than the biggest number
        // and if the number has not iterated through
        if (arr[i] < biggestNum && !historyArr.includes(arr[i])) {
            // push each number to remember looped nums 
            historyArr.push(arr[i]);
            secondLargest = arr[i];
        }
    }

    // at last, return the answer (second largest num)
    return secondLargest;
};
```

### how does this method work?

same as the first method, the function `findSecondLargestNum` will take a parameter, an array filled with numbers.

then as the code above said, it will find the largest number first.

after so, it will try to find the second largest number by iterating over the array.

the condition is here explained:  
if the current array index value is less than the `biggestNum`, and not already in the `historyArr` (historyArr is an array of all the numbers that has been iterated through) then the `secondLargest` will be the current index. so then the final output would be: *90*.

if you see the variable `secondLargest`, it contains the number **0**, but why? the number **0** could mean `false`, so if there is no 'the second largest number', it would just return **0** instead of `arr[0]`.  

### conclusion

there is a lot of ways to get the second largest number, here i provide some of the 'easy way to understand' methods, hapi hacking.
