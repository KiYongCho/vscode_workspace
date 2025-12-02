/*
    함수 (function)
      - 재사용(reusing)하기 위해 코드들을 묶어 놓은 코드 블록
      - 함수는 생성해 두고 필요할 때 불러서(호출해서, call, invocation) 사용
      - 자바스크립트에서 함수는 매우 중요한 프로그래밍 단위
      - 이름이 있는 함수(named function), 이름이 없는 함수(anonymous function)으로 구분
*/

// 함수 생성법

// 1. 함수 선언식
//   - 함수명이 반드시 있어야 함
//   - 호이스팅이 됨 (선언전에 사용이 가능)
function add(a, b) {
    return a + b;
}
console.log(add); // [Function: add]
console.log(add()); // NaN : undefined + undefined의 결과
console.log(add(1)); // NaN : 1 + undefined의 결과
console.log(add(1,2)); // 3
console.log(add(1,2,3)); // 3, 세번째 인자 3은 무시

// 2. 함수 표현식
//   - 값으로서의 함수 (일급객체 first class object:값이 되는 객체)
//   - 변수에 할당도 가능하고 다른 함수에 인자로 전달도 가능
//   - 호이스팅이 안됨
//   - 익명함수의 경우 이름이 내부적으로 결정됨, 즉 아래 함수의 이름은 mul이 아님
const mul = function(a, b) {
    return a * b;
};
console.log(mul); // [Function: mul]
console.log(mul()); // NaN, undefined * undefined의 결과
console.log(mul(1)); // NaN, 1 * undefined의 결과
console.log(mul(1, 2)); // 2
console.log(mul(1, 2, 3)); // 2, 세번째 인자 3은 무시

// 3. Function 생성자 함수
const dev = new Function('a', 'b', 'return a/b');
console.log(dev); // [Function: anonymous]
console.log(dev()); // NaN, undefined / undefined의 결과
console.log(dev(1)); // NaN, 1 / undefined의 결과
console.log(dev(1, 2)); // 0.5
console.log(dev(1, 2, 3)); // 0.5, 세번째 인자 3은 무시

// 4. 화살표 함수 (arrow function)
//   - 함수 선언문의 문법을 간략히
//   - 자체 스코프를 가지지 않음
//   - 호이스팅 안됨
//   - 파라미터가 1개일 때는 () 생략 가능 (예> x => x*x)
const minus1 = (a, b) => a - b; // 함수 몸체가 한 줄인 경우
const minus2 = (a, b) => { // 함수 몸체가 여러 줄인 경우
    console.log('minus2 함수 입니다!');
    return a - b;
};
console.log(minus1); // [Function: minus1]
console.log(minus1()); // NaN, undefined - undefined의 결과
console.log(minus1(1)); // NaN, 1 - undefined의 결과
console.log(minus1(1, 2)); // -1
console.log(minus1(1, 2, 3)); // -1, 세번째 인자 3은 무시

// 자바스크립트에서 함수표현식, 화살표함수는 값이므로 함수에 인자로 전달 가능 !

