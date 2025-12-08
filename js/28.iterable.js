/*
    이터러블 (iterable) : 반복의 대상이 되는 객체
      - 문자열, 배열 DOMCollection, Map, Set, arguments ...
      - 이터러블의 특성
        1) for of 문법으로 반복 가능
        2) 스프레드문법 사용 가능
        3) 구조분해할당 가능 (객체는 이터러블은 아니지만 특별히 구조분해할당이 가능)
*/

// 배열은 이터러블
const arr = [1, 2, 3];

// 배열은 Symbol.iterator(이터레이터 메소드)를 가지고 있으므로 이터러블
console.log(Symbol.iterator in arr); // true

// 이터레이터 획득 (배열을 반복할 수 있는 반복자객체 획득)
const iterator = arr[Symbol.iterator]();

// 이터레이터는 next메소드를 가지고 있음
console.log('next' in iterator); // true

// 이터페이터의 next메소드를 호출해서 반복시의 값과 반복완료상태를 얻을 수 있음
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for of를 통한 이터러블 반복
for (ele of arr) {
    console.log(ele); // 1 2 3
}
for (ele of 'Hello') {
    console.log(ele); // H e l l o
}

// 스프레드 문법 (spread syntax) : 이터러블의 요소들을 흩어 뿌림
console.log([...arr]); // [1, 2, 3]
console.log([...arr, 4, 5]); // [1, 2, 3, 4, 5]
console.log([...'Hello']); // ['H', 'e', 'l', 'l', 'o']
console.log([...[1, 2], ...[3, 4, 5]]); // [1, 2, 3, 4, 5]
console.log({...{x:1, y:2}}); // {x:1, y:2}, 객체는 이터러블은 아니지만 스프레드 문법이 가능
console.log({...{x:1, y:2}, z:3}); // {x:1, y:2, z:3}, 기존 객체의 프라퍼티에 새로운 프라퍼티 추가
console.log({...{x:1, y:2}, y:3}); // {x:1, y:3}, 기존 객체의 프라퍼티의 값을 대체
console.log({...{x:1, y:2}, ...{y:3, z:4}}); // {x:1, y:3, z:4}

// 구조분해할당 (Destructuring Assignment)
const [first, second] = [1, 2]; // first = 1, second = 2
console.log(first, second); // 1 2
const [h, e, l1, l2, o] = 'hello'; // 
console.log(h, e, l1, l2, o); // h e l l o

// Rest요소를 사용한 구조분해할당
const [x, ...y] = [1, 2, 3]; // x = 1, y = [2, 3]
console.log(x, y); // 1 [ 2, 3 ]

// 구조분해할당시 기본값 설정
const [aa, bb=2, cc] = [1, , 3]; // aa = 1, bb = 2, cc = 3
console.log(aa, bb, cc); // 1 2 3

// 구조분해할당을 통해 문자열 객체의 length 프라퍼티 추출
const str = 'Hello Javascript!';
const {length} = str; // 객체에서 특정 프라퍼티 추출할 때 구조분해할당이 유용함
console.log(length); // 17

// 객체 구조분해할당
const person = {
    name:  '홍길동',
    age: 30
};
const {name, age} = person; // name = '홍길동', age = 30
console.log(name, age); // 홍길동 30

const persons = [
    {pname: '홍길동', page: 20},
    {pname: '강감찬', page: 30},
    {pname: '이순신', page: 40}
];

// 필요한 객체만 취득
const [hong,,] = persons;
console.log(hong); // { pname: '홍길동', page: 20 }
const [,,lee] = persons;
console.log(lee); // { pname: '이순신', page: 40 }

// 실습

// 1. persons배열에서 두번째 객체인 강감찬의 이름만 추출
const [, {pname},] = persons;
console.log(pname);

// 2. persons배열에서 세번째 객체인 이순신의 나이만 추출
const [,,{page}] = persons;
console.log(page);






























