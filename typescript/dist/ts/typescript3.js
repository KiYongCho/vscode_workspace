"use strict";
/*
타입 추론 (type inference)
- Typescript에서 개발자가 타입을 명시하지 않아도 트랜스컴파일러가 타입을 추론할 수
  있는 경우에는 타입을 명시하지 않아도 됨
- 타입추론을 사용하면 타입을 선언하는 코드가 줄어서 가독성을 높일 수 있음
- 변수 초기화, 함수의 매개변수 기본값, 함수의 반환 시에 타입추론 가능
*/
// 변수 초기화 시 타입 추론
let str1; // any타입으로 추론됨 (비추)
let str2 = 'hello'; // string중의 'hello'타입으로 추론됨
let num1 = 100; // number중의 100타입으로 추론됨
// 함수 반환값 타입 추론
// number인 a와 number인 b의 덧셈 결과는 당연히 number이므로
// 함수의 반환값의 타입은 명시하지 않아도 number
function add(a, b) {
    return a + b;
}
// 함수 매개변수 기본값 타입 추론
// a는 number타입, b는 number타입, a+b는 number타입
function add2(a = 1, b = 2) {
    return a + b;
}
const person = {
    name: '홍길동',
    hobby: ['축구', '농구']
};
/*
타입 단언 (type assertion)
  - Typescript의 타입 추론을 사용하는 대신 개발자가 직접 타입을 명시(지정)
  - as(assertion)키워드를 사용해서 개발자가 직접 타입을 명시
  - 이미 개발된 Javascript 코드를 마이그레이션하는 경우에 어쩔 수 없는 경우만 사용하자!
*/
// hong의 타입은 string이라고 단언
const hong = '홍길동';
// Human타입은 string타입인 name프라퍼티와 number타입인 age프라퍼티가 있어야 함
// let human: Human = {};
// human은 Human타입이라고 단언
let human = {};
function getId(id) {
    return id;
}
// getId함수의 반환값의 타입을 string으로 단언
const myId = getId('hong');
// 타입단언 중첩
// 10을 any타입으로 단언하고 다시 number타입으로 단언
const num2 = 10;
// !. : non-null 단언 (null이 아니라고 단언)
function shuffleBooks(books) {
    const result = books === null || books === void 0 ? void 0 : books.shuffle();
    // const result = books!.shuffle(); // 트랜스파일 시에는 노에러, 실행 시에는 에러
    return result;
}
/*
타입 가드 (type guard)
  - 여러 타입 중 하나일 수 있는 경우 하나의 타입으로 한정
  - typeof, instanceof, in, is 를 통해서 타입의 범위를 좁힘
*/
const v1 = 'hello';
// v1의 타입을 string으로 가드
if (typeof v1 === 'string') {
    console.log(v1.toUpperCase()); // string일때는 에러 없음
}
// 타입단언을 이용해 param1의 타입을 number로 한정 (위험)
function func1(param1) {
    console.log(param1.toFixed(2));
}
// instanceof를 활용한 타입가드
// interface는 Typescript에만 존재, 실행시에는 존재하지 않음
// instanceof 뒤에 interface를 사용할 수 없음
class Bird {
    constructor(name) {
        this.name = name;
    }
}
class Mammal {
    constructor(name, breastfeed) {
        this.name = name;
        this.breastfeed = breastfeed;
    }
}
const animal = new Mammal('고래', true);
if (animal instanceof Mammal) {
    console.log('포유류');
    console.log(animal.name, animal.breastfeed);
}
if (animal instanceof Bird) {
    console.log('새');
    console.log(animal.name);
}
// Book 타입 (autor프라퍼티가 존재)
const book = {
    name: '타입스크립트가이드',
    author: '마이크로소프트'
};
if ('author' in book) { // Book 타입
    console.log(book);
}
if ('tutor' in book) { // Lecture 타입
    console.log(book);
}
// 함수의 반환값의 타입은 boolean (someone이 Hong타입이면 true)
// someone as Hong : someone을 Hong타입으로 타입단언
function isHongOrPark(someone) {
    return someone.age != undefined;
}
const designer = {
    name: '홍길순',
    age: 20,
    jobName: 'designer'
};
const programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'
};
// 프라퍼티의 값으로 타입 가드
if (designer.jobName === 'designer') {
    console.log(designer.jobName);
}
if (programmer.jobName === 'programmer') {
    console.log(programmer.jobName);
}
