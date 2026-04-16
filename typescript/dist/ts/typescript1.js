"use strict";
/*
    타입스크립트 기본 타입
    - 변수에 타입 지정시 변수명 뒤에 :을 사용, : 뒤에 타입 명시
*/
// sting
let hello = 'hello';
console.log(hello);
//hello = 100;
// number
let num = 10;
//num = 'hello';
// boolean
let bool = true;
//bool = 3;
// object
let obj = {
    name: '홍길동',
    age: 20
};
console.log(obj);
// array
let arr1 = ['홍길동', '강감찬', '이순신'];
let arr2 = ['홍길동', '강감찬', '이순신'];
// tuple
let tup = ['홍길동', 20];
// any
let at = 100;
at = '백';
at = [1, 2, 3];
// null
let nul = null;
// undefined
let und = undefined;
// function
function getStr(str) {
    return 'hi' + str;
}
getStr('홍길동');
function getInfo1(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo1('홍길동', 20, '축구');
//getInfo1('홍길동', 20);
function getInfo2(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo2('홍길동', 20, '축구');
getInfo2('홍길동', 20);
//getInfo2('홍길동');
