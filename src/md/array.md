# 배열 관련 메소드

## 1. sort

배열을 오름차순/내림차순으로 정렬한다.

const arr = [5,3,2,4,6,1];
const res;

res = arr.sort(); = sort((a, b) => a - b);
console.log(res) // [1,2,3,4,5,6];

res = arr.sort((a, b) => b - a);
console.log(res) // [6,5,4,3,2,1];

## 2. join

배열의 모든 요소를 연결해 하나의 문자열로 만든다.

array.join(); // 구분자를 넣지 않으면 쉼표로 구분된다.
array.join('.') // 구분자를 넣어주면 아이템 사이에 구분자를 넣어서 구분된다.

const fruits = ['apple', 'banana', 'orange'];
let res;

res = fruits.join();
console.log(res);
// 'apple,banana,orange'

res = fruits.join(' ');
console.log(res);
// 'apple banana orange'

## 3. split

문자열을 배열로 변환한다.

string.split(); // 구분자를 넣지 않으면 문자열 한 덩어리가 배열의 아이템 1개로 들어간다.
string.split('.'); // 구분자를 기준으로 쪼개져서 배열로 변환된다.

const fruits = 'apple, banana, orange';
const arr = fruits.split(',');
console.log(arr);
// ['apple', 'banana', 'orange'];

const fruits = 'apple, banana, orange';
const arr = fruits.split();
console.log(arr);
// ['apple, banana, orange'];

## 4. reverse

배열의 아이템 순서를 뒤집는다.

array.reverse();

const array = [1,2,3,4,5];
const res = array.reverse();
console.log(res);
// [5,4,3,2,1];
console.log(array); // 원래 배열도 변경되어있음
// [5,4,3,2,1];

## 5. slice

배열의 특정한 부분을 리턴한다.

array.slice(시작 인덱스, 끝 인덱스); // 끝 인덱스의 앞자리까지만 리턴

const array = [1,2,3,4,5];
let res;

res = array.slice(2) // 인덱스 2부터 리턴
console.log(res);
// [3,4,5]

res = array.slice(1, 3) // 인덱스 1부터 인덱스 3 앞까지 리턴
console.log(res);
// [2,3];

## 6. splice

배열의 기존 요소를 삭제,교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
단! 반환값은 삭제한요소 배열이다.
배열을 직접적으로 수정한다.

array.splice(인덱스, 삭제할개수, 추가할 아이템...);

const array = [1,2,3,4,5];
let res = array.splice(1, 3);

console.log(res);
// [2,3,4];

console.log(array);
// [1,5]

## 7. concat

파라미터로 받은 배열이나 값들을 기존의 배열에 합쳐서 새로운 배열을 만들어 리턴한다.

array.concat([value1[, value2...]]);

const array = [1,2,3];
const res = array.concat('a', ['b', 'c'], 'abc');
console.log(res);
// [1,2,3,'a','b','c','abc']

- pop, push, shift, unshift, splice : 배열을 직접적으로 수정(리액트에서 거의 사용x)
- concat, slice : 새로운 배열을 만들어냄
