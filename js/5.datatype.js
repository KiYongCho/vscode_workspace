/*
    자바스크립트의 데이터 타입
    - 크게 기본타입과 참조타입으로 나뉨
    - 기본타입 7가지 : number, string, boolean, null, undefined, symbol, bigint
    - 기본타입 7가지 제외한 나머지 모든 타입은 참조타입
*/

// 기본타입

// number
console.log(5);
console.log(3.14);
console.log(0b0010);
console.log(0o10);
console.log(0x10);
console.log(Infinity);
console.log(1/Infinity);
console.log(-Infinity);
console.log(-1/Infinity);
console.log(NaN);
console.log(1/0);

// 컴퓨터는 데이터를 저장하는 메모리 크기의 한계를 가지고 있어서
// 소수연산시 정확도가 떨어짐
console.log(0.1 + 0.2);

// string
console.log('hello');
console.log("hello");
console.log(`${1+2+3+4+5}`);

// boolean
console.log(true);
console.log(false);

// null
console.log(null);

// undefined
console.log(undefined);

// symbol
console.log(Symbol());

// bigint
// number타입의 범위를 넘는 아주 크거나 작은 정수
let bi = 329847839274893274892378947389274389479n;
console.log(bi);


// 참조타입

// 객체
console.log({});

// 배열
console.log([]);

// 정규표현식
console.log(/abc/);

// 함수
console.log(function (){});

// 클래스
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const hong = new Person('홍길동', 20);
console.log(hong);

