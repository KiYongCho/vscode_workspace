"use strict";
/*
타입 호환 (type compatability)
  - 좁은 타입에서 넓은 타입으로의 타입호환은 OK
  - 넓은 타입에서 좁은 타입으로의 타입호환은 ERROR
*/
// 좁은 타입과 넓은 타입간의 타입호환
let s1 = 'hi'; // s1은 string 일반 타입 (넓은 타입)
let s2 = 'hello'; // s2는 'hello' 리터럴 타입 (좁은 타입)
// s2 = s1; // ERROR
s1 = s2; // OK
let i4 = { name: '홍길동' };
let i5 = { name: '강감찬' };
i4 = i5; // OK
i5 = i4; // OK
let i6 = { name: 100 };
let animal5 = { name: '동물' };
let dog5 = { name: '강아지', sound: '왈왈' };
let bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // ERROR, dog5가 되려면 sound프라퍼티가 있어야 함
// bird5 = dog5; // ERROR, bird5가 되려면 leg프라퍼티가 있어야 함
// dog5 = animal5; // ERROR, dog5가 되려면 sound프라퍼티가 있어야 함
// bird5 = animal5; // ERROR, bird5가 되려면 leg프라퍼티가 있어야 함
animal5 = dog5; // OK, animal5가 되려면 name프라퍼티만 있으면 됨
animal5 = bird5; // OK, animal5가 되려면 name프라퍼티만 있으면 됨
let dog6 = { name: '강아지', sound: '왈왈' };
let bird6 = { name: '새', leg: 2 };
dog6 = bird6; // OK, dog6의 sound프라퍼티는 옵셔널
bird6 = dog6; // OK, bird6는 name프라퍼티만 있으면 됨
// 함수에서의 타입 호환
// 파라미터의 보장 여부를 따져야 함
// 파라미터가 적은 쪽에서 많은 쪽으로는 호환 가능
// 파라미터가 많은 쪽에서 적은 쪽으로는 호환 불가
let func6 = function (a, b) { return a + b; };
let func7 = function (a) { return a; };
func6 = func7; // OK, func6는 a파라미터가 있음
// func7 = func6; // ERROR, func7은 b파라미터가 없음
// enum타입의 타입 호환
// enum타입은 구조가 같아도 호환 불가
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 0] = "A";
    Enum1[Enum1["B"] = 1] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 2] = "C";
})(Enum2 || (Enum2 = {}));
;
let e1 = Enum1.A; // 0
let e2 = Enum2.A; // 0
let inter1 = 'string';
let inter2 = 30;
inter1 = inter2; // OK
inter2 = inter1; // OK
let inter3 = { data: 'hello' };
let inter4 = { data: 30 };
// inter3 = inter4; // ERROR, inter4의 data프라퍼티의 타입은 number > string (X)
// inter4 = inter3; // ERROR, inter3의 data프라퍼티의 타입은 string > number (X)
