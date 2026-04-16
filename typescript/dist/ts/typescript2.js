"use strict";
/* 인터페이스 */
// 객체의 타입을 정의할때 사용
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_name;
// 객체 생성
const user1 = {
    name: '홍길동',
    age: 20
};
// 함수의 파라미터와 리턴타입으로 인터페이스 사용
function getUserInfo(user) {
    return user;
}
const user3 = { name: '이순신', age: 40 };
const user4 = { name: '이순신' };
const bird1 = { name: '독수리', legCnt: 2, hasWing: true };
const student = {
    1: '홍길동',
    2: '강감찬'
};
const student2 = { '1': '홍길동', '2': '강감찬' };
const student3 = ['홍길동', '강감찬'];
// const student4: Student4 = ['홍길동', '강감찬'];
// 유니언 타입 (union type)
// 여러 타입 중 하나
let un;
un = '홍길동';
un = 100;
function getInfo(obj) {
    if ('color' in obj) { // 객체 프라퍼티 조사 (타입가드:type guard)
        console.log(obj.name, obj.color);
    }
    else {
        console.log(obj.name, obj.pages);
    }
}
const is1 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};
const mystr = '홍길동';
const mynum = 30;
const mt1 = '홍길동';
const mt2 = 30;
const mt3 = false;
const int1 = { name: '홍길동', age: 30 };
// enum 타입
// 상수 정의를 위한 타입
// 초기값을 할당하지 않으면 기본 값은 선언된 순서대로 0, 1, 2 ...
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS"; // 3
})(Planet || (Planet = {}));
const earth = Planet.EARTH;
const mars = Planet.MARS;
var Planet2;
(function (Planet2) {
    Planet2[Planet2["MERCURY"] = 1] = "MERCURY";
    Planet2[Planet2["VENUS"] = 2] = "VENUS";
    Planet2[Planet2["EARTH"] = 3] = "EARTH";
    Planet2[Planet2["MARS"] = 4] = "MARS";
})(Planet2 || (Planet2 = {}));
var Planet3;
(function (Planet3) {
    Planet3["MERCURY"] = "\uC218\uC131";
    Planet3["VENUS"] = "\uAE08\uC131";
    Planet3["EARTH"] = "\uD5EC";
    Planet3["MARS"] = "\uD654\uC131";
})(Planet3 || (Planet3 = {}));
// 클래스
// 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의해야만 함
// 생성자의 파라미터 타입과 메서드의 반환타입을 미리 정의해야만 함
class Person {
    constructor(name, age) {
        _Person_name.set(this, void 0); // private (ES2020 이상)
        __classPrivateFieldSet(this, _Person_name, name, "f");
        this.age = age;
    }
    getName() {
        return __classPrivateFieldGet(this, _Person_name, "f");
    }
    setName(name) {
        __classPrivateFieldSet(this, _Person_name, name, "f");
    }
}
_Person_name = new WeakMap();
const person1 = new Person('홍길동', 30);
console.log(person1);
person1.setName('홍길순');
console.log(person1.getName());
// 제네릭 (generic)
// 타입을 실행시점(runtime)에 정의하기 위한 문법
// 제네릭을 사용하면 타입의 유연성이 생김
// T : 타입매개변수 (type parameter)
function getText(text) {
    return text;
}
getText('hi'); // 실행시점에 T는 string
getText(100); // 실행시점에 T는 number
const animal2 = {
    name: '호랑이',
    body: { color: '얼룩덜룩', legCount: 4 }
};
// 제네릭에 제약 부여
// T extends string : string이거나 string을 상속받는 어떤 타입
function printName(name) {
    return name;
}
printName('홍길동');
// extends : 뒤에 나오는 타입과 호환타입을 허용
// {length: number} : number타입인 length프라퍼티를 가진 타입
// T extends {length: number} : {length: number}이거나 {length: number}을 상속받은 타입
function lengthOnly(value) {
    return value.length;
}
lengthOnly('123'); // 문자열은 length프라퍼티를 가지고 있음
lengthOnly([1, 2, 3]); // 배열은 length프라퍼티를 가지고 있음
// lengthOnly(123); // 숫자는 length프라퍼티를 가지고 있지 않음
// 제네릭과 유니온 결합
// <T extends string | number> : string이거나 number이거나 string을 상속받은 타입이거나 number를 상속받은 타입
function lengthOnly2(value) {
    if (typeof value === 'string') { // 문자열이면
        return value.length; // 문자열의 길이를 리턴
    }
    else { // 숫자라면
        return value; // 숫자값을 리턴
    }
}
lengthOnly2('123'); // 3
lengthOnly2(123); // 123
// keyof : 인터페이스 프라퍼티들의 키를 문자열로 추출해서 문자열들의 유니언 타입 반환
// keyof {name: string; skill: string;} : 'name' | 'skill'
// T extends keyof {name: string; skill: string;} : 'name' | 'skill' 타입이거나 타입의 하위 타입인 어떤 타입
function printKeys(value) {
    console.log(value);
}
printKeys('name');
printKeys('skill');
//printKeys('hobby');
