// 자바스크립트는 코드상에서 선언된 위치에 따라 변수의 스코프(참조 범위)가 결정됨!
// => lexical scope = static scope

var v1 = 1; // 전역 변수
console.log(v1); // 1
// console.log(window.v1); // node환경에는 window 객체가 없음

function func1() {
    var v1 = 2; // func1함수의 지역 변수, var는 스코프에 관계없이 재선언 가능
    console.log(v1); // 2
}
func1();

var v2 = 1; // 전역 변수

function func2() {
    // var v2; 생략된 형태, var로 선언한 변수는 초기화하지 않으면 undefined로 초기화 됨
    console.log(v2); // undefined, 함수내에 선언된 v2가 없으므로 v2가 호이스팅됨
    var v2 = 2; // func2함수의 지역 변수
    console.log(v2); // 2
}
func2();

var v3 = 1; // 전역 변수
let l1 = 1; // 전역 변수

// block scope
{
    var v3 = 2; // 전역 변수, var로 선언된 변수는 block scope을 갖지 않음 => 위 전역 변수를 재선언한 것
    let l1 = 2; // 지역 변수, let이나 const로 블럭안에서 선언한 변수는 block scope를 가짐
}


// 동일한 스코프 내에서 var는 재선언 가능
var v4 = 1; // 전역 변수
var v4 = 2; // 전역 변수
console.log(v4);

// 동일한 스코프 내에서 let이나 const 재선언 불가
let l2 = 1; // 전역 변수
//let l2 = 2; // 전역 변수
console.log(l2);

{
    let l2 = 2; // 지역 변수, let이나 const도 스코프가 다르면 선언 문제 없음
    console.log(l2);
}

// node환경에서의 전역객체 : global이나 globalThis가 생성한 빈 객체
console.log(this); // {}, 전역 스코프에서 현재 참조되고 있는 객체 => 전역 객체
console.log(global);
console.log(globalThis);
console.log(this==global); // false
console.log(this==globalThis); // false
console.log(global==globalThis); // true






































