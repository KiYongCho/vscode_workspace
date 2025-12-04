/*
    일급객체 (first-class object)
      - 값으로 사용할 수 있는 객체
      - 대표적으로 함수는 일급객체
      - 값이므로 변수에 저장 가능, 배열의 요소로 사용 가능, 함수에 인자로 전달 가능, 함수의 반환값으로 사용 가능
*/

// 콜백함수 : 고차함수의 인자로 전달되는 함수
const func = function() {
    console.log('Hello');
};

// 고차함수 : 콜백함수를 인자로 전달받는 함수
const main = function(f1, f2) {
    f1();
    f2();
};

main(func, func);

// 함수의 데이터 프라퍼티
const add = function(a, b) {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2 }, 전달받은 인자들을 가진 유사배열객체, 화살표함수에는 없음
    console.log(arguments.length); // 2, 인자의 개수
    console.log(arguments.callee); // [Function: add], 호출당한 함수, 비표준
    console.log(add.caller); // [Function (anonymous)], 호출한 함수, 비표준
    console.log(add.name); // add, 함수의 이름, ES6에 추가됨
    // add함수의 __proto__ 프라퍼티는 Function 생성자함수의 prototype
    console.log(add.__proto__); // [Function (anonymous)] Object
    // add함수의 prototype 프라퍼티는 empty object
    console.log(add.prototype); // {}
};
add(1, 2);

// add함수의 프라퍼티서술자(property descriptor) 객체
// value: 프라퍼티가 가진 값
// writable : 쓰기 가능 여부 (writable: false => 읽기전용 프라퍼티)
// enumerable : 반복(열거) 가능 여부, enumerable이 false인 경우 for ~ in에서 프라퍼티 반복(열거) 불가능
// configurable : 삭제 가능 여부
// {
//   length: { value: 2, writable: false, enumerable: false, configurable: true },
//   name: {
//     value: 'add',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   },
//   arguments: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   caller: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// }
console.log(Object.getOwnPropertyDescriptors(add));

// add함수의 length프라퍼티에 대한 프라퍼티서술자 객체
//{ value: 2, writable: false, enumerable: false, configurable: true }
console.log(Object.getOwnPropertyDescriptor(add, 'length'));

const hong = {
    name: '홍길동',
    age: 20
};

// {
//   name: {
//     value: '홍길동',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 20, writable: true, enumerable: true, configurable: true }
// }
console.log(Object.getOwnPropertyDescriptors(hong));

//{ value: 20, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(hong, 'age'));

// hong 객체의 프라퍼티인 name과 age는 enumerable이 true이므로 반복 가능
// name 홍길동
// age 20
for (prop in hong) {
    console.log(prop, hong[prop]);
}

/*
  __proto__, prototype 프라퍼티

    - 모든 객체는 __proto__라는 접근자 프라퍼티를 가지고 있으며 접근자 프라퍼티를 통해서
      prototype의 정보를 가진 [[Prototype]] 내부슬롯에 접근함, 즉, __proto__는 prototype의 참조를 가짐
    - 객체가 가진 __proto__라는 접근자 프라퍼티를 통해서 prototype에 접근함
    - 리터럴로 생성한 객체의 __proto__는 Object.prototype을 참조함
    - 모든 생성자 함수는 prototype이라는 프라퍼티를 가지고 있음
*/
console.log(hong.__proto__ === Object.prototype) ; // true

const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

console.log(hong.__proto__ == obj.__proto__); // true

// Object.prototype을 출력
console.log(Object.prototype); // {}

// 객체 생성시에 정의한 프라퍼티
// own property : 객체 생성시에 사용자가 정의한(소유한) 프라퍼티
console.log(hong.hasOwnProperty('name')); // true
console.log(hong.hasOwnProperty('age')); // true
console.log(hong.hasOwnProperty('__proto__')); // false
























