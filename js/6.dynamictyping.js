/*
    동적 타이핑 (dynamic typing)
        - 인터프리터 언어의 특성 중 하나
        - 실행시간(동적)에 변수의 타입이 변경 가능
        - 변수에 할당되는 값의 타입에 따라서 변수의 타입 결정 및 변경됨
*/

// typeof 연산자 : 변수의 타입을 반환

let l;  // 변수 선언, 타입:undefined
console.log(l); // 값:undefined
console.log(typeof l); // 타입:undefined

l =1;
console.log(l); // 값:1
console.log(typeof l); // 타입:number

l = 'hello';
console.log(l); // 값:hello
console.log(typeof l); // 타입:string

l = false;
console.log(l); // 값:false
console.log(typeof l); // 타입:boolean

l = null;
console.log(l); // 값:null
console.log(typeof l); // 타입:object, null은 기본타입임, 자바스크립트의 버그

l = Symbol();
console.log(l); // 값:Symbol()
console.log(typeof l); // 타입:symbol

l = {};
console.log(l); // 값:{}
console.log(typeof l); // 타입:object

l = [];
console.log(l); // 값:[]
console.log(typeof l); // 타입:object

l = /abc/;
console.log(l); // 값:/abc/
console.log(typeof l); // 타입:object

l = function() {};
console.log(l); // 값:[Function: l]
console.log(typeof l); // 타입:function


// instanceof 연산자 : 참조타입의 상속관계 확인하는 연산자, 결과는 boolean
const obj = {};
console.log(obj instanceof Object); // true
console.log(obj instanceof Array); // false
console.log(obj instanceof Function); //false

const obj2 = null;
console.log(obj2 instanceof Object); // false, null은 기본타입

const obj3 = function() {};
console.log(obj3 instanceof Object); // true
console.log(obj3 instanceof Array); // false
console.log(obj3 instanceof Function); //true

const obj4 = /abc/;
console.log(obj4 instanceof Object); // true
console.log(obj4 instanceof Array); // false
console.log(obj4 instanceof RegExp); //true


