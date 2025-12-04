/*
    자바스크립트의 타입변환 (Type Casting)
      - 자바스크립트의 타입변환은 기본타입간의 타입 변환
      - symbol은 다른 타입과 변환 불가 (TypeError)
      - 타입변환시에 어떤 연산인지가 가장 중요.
        어떤 연산인지에 따라서 피연산자의 타입이 알맞게 변경됨
      - 기본타입값은 불변(Immutable)
*/

let num = 100;
let numStr = num.toString();
console.log(typeof numStr, numStr); // string 100
console.log(typeof num, num); // number 100

console.log(typeof String(1)); // string
console.log(typeof String(NaN)); // string
console.log(typeof String(true)); // string
console.log(typeof Number('1')); // number
console.log(typeof Number(true)); // number
console.log(typeof Boolean('')); // boolean
console.log(typeof Boolean('a')); // boolean
console.log(typeof Boolean(NaN)); // boolean
console.log(typeof Boolean({})); // boolean
console.log(typeof Boolean([])); // boolean
console.log(typeof Boolean(function() {})); // boolean

console.log((1).toString()); // 1
console.log(NaN + ''); // NaN
console.log(+'0');  // 0
console.log(+true);  // 1
console.log(true*5); // 5
console.log(!!'x'); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!{}); // true
console.log(!![]); // true

console.log('10'+2); // 102
console.log(10*'10'); // 100
console.log(!0); // true
console.log(10/NaN); // NaN, NaN은 숫자와 숫자연산을하면 NaN
console.log(NaN*10); // NaN

console.log(0+''); // 0
console.log(-0+''); // 0
console.log(NaN+''); // NaN
console.log(Infinity+''); // Infinity
console.log(-Infinity+''); // -Infinity
console.log(true+''); //  true
console.log(false+''); // false
console.log(null+''); // null
console.log(undefined+''); // undefined
// console.log((Symbol())+''); // Symbol 타입은 변환 불가, TypeError
console.log(({})+''); // [object Object]
console.log(({name:'홍길동', age:20})+''); // [object Object]
console.log(Math+''); // [object Math]
console.log(typeof([]+''), []+''); // '' : null string

console.log([10, 20]+''); // 10,20
console.log((function(){})+''); // function(){} 
console.log(Array+''); // Array() {[native code]}
console.log(1-'1'); // 0
console.log(1*'10'); // 10 
console.log(1/'one'); // NaN
console.log('1'>0); // true
console.log(+''); // 0
console.log(+'0'); // 0
console.log(+'1'); // 1
console.log(+'string'); // NaN
console.log(+true); // 1
console.log(+false); // 0
// console.log(+Symbol()); // TypeError
console.log(+{}); // NaN, 객체는 프라퍼티가 있건 없건 숫자로 평가될때 NaN
console.log(+[]); // 0, 요소가 없는 배열은 숫자로 평가될때 0
console.log(+{name:'홍길동',age:20}); // NaN
console.log(+[1,2,3]); // NaN, 요소가 있는 배열은 숫자로 평가될때 NaN

console.log(+(function(){})); // NaN
console.log(+false); // 0
console.log(+undefined); // NaN
console.log(!null); // true
console.log(!undefined); // true
console.log(!0); // true
console.log(!-0); // true
console.log(!NaN); // true
console.log(!''); // true

// 타입변환은 판별식의 위치에 자주 사용됨
if (0) {} // => 0은 false로 판별되므로 수행 안되는 코드
if (1) {} // => 1은 true로 판별되므로 무조건 수행되는 코드
if ([]) {} // => []은 true로 판별되므로 무조건 수행되는 코드
// while (1) {} // => 1은 true로 판별되므로 무한 반복
// while ({}) // => {}은 true로 판별되므로 무한 반복

// 객체 탐지 (=객체 프라퍼티 탐지)
const obj = {
    name: '홍길동',
    age: 20
};
if (obj.name) { // obj.name은 '홍길동' => 문자가 1개 이상 있는 문자열 => true
    console.log(obj.name);
}
if (obj.address) {
    console.log(obj.address);
}

console.log(obj.age ? `나이는 ${obj.age} 입니다!` : '나이 정보가 없습니다!');

// 단축 평가 (Short Circuit Evaluation)
// 표현식의 일부를 수행해서 전체 결과를 얻을 수 있다면 나머지를 수행하지 않음

// &&연산은 앞의 항이 false이면 뒤의 항의 연산을 할 필요가 없음
console.log('Cat' && 'Dog'); // Dog

// ||연산은 앞의 항이 true이면 뒤의 항의 연산을 할 필요가 없음
console.log('Cat' || 'Dog'); // Cat












