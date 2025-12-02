// 즉시실행함수 (IIFE : Immediately Invoked Function Expression)
//   - 익명함수를 생성과 동시에 한번만 실행할 목적으로 만들어 사용하는 함수
//   - 즉시실행함수의 실행 결과는 표현식(값)이므로 변수에 저장하거나 함수의 인자나 리턴값으로 활용 가능
//   - 실행시에 ()로 감싸서 문법에러를 방지해야 함

(function() {
    console.log('IIFE');
}());

const func = (function() {
    console.log('IIFE');
}());
// func(); // TypeError, 즉시실행함수의 실행결과는 값, 값은 호출할 수 없음

(function(num1, num2) {
    console.log(num1 + num2);
}(1, 2));

const func2 = (function(num1, num2) {
    console.log(num1 + num2);
}(1, 2));
// func2(); // TypeError, 즉시실행함수의 실행결과는 undefied 값, 값은 호출할 수 없음
// func2() => undefined()
console.log(func2); // 3, undefined 즉시실행함수의 수행결과 3이 출력되고 console.log의 리턴값인 undefined를 출력
console.log(console.log('hello')); // hello, undefined hello를 출력하고 console.log의 리턴값인 undefined를 출력


// 재귀 함수 (recursive function)
//  - 함수가 함수 내에서 자기 자신을 다시 호출하는 함수
//  - 무한 반복 호출하지 않도록 함수가 종료될 조건이 있어야 함

// 팩토리얼 : 5팩토리얼 = 1*2*3*4*5
function factorial(n) {
    if (n==0 || n==1) return 1;
    console.log(n);
    return n * factorial(n-1);
}
console.log(factorial(7));


// 중첩 함수 (nested function)
//   - 함수내에서만 사용할 기능이 있다면 함수내에 함수를 생성
//   - 이때 포함하고 있는 함수를 enclosed함수 또는 outer함수
//     포함되어 있는 함수를 nested함수 또는 inner함수
//   - 자바스크립트에서 변수는 "선언된 위치"에 따라 접근 가능여부가 결정됨
function outer() {
    let o = 1; // outer함수의 지역 변수 : outer함수가 종료되면 접근할 수 없음
    function inner() {
        console.log(o); // 1
        let i = 2; // inner함수의 지역 변수 : inner함수가 종료되면 접근할 수 없음
        console.log(i); // 2
    }
    console.log(o); // outer함수 스코프
    // console.log(i); // inner함수 스코프
    inner();
}
outer();


// 콜백함수(callback function) : 함수에 인자로 전달되는 함수
// 고차함수(high order function) : 함수를 인자로 전달받는 함수

// 고차함수 : f 파라미터를 통해서 함수를 전달받는 함수
const plusMain = function(val, f) {
    console.log(f(val));
};

// 콜백함수
const plus1 = a => a + 1;
const plus2 = a => a + 2;
const plus3 = a => a + 3;

// 고차함수를 호출하면서 콜백함수를 전달
plusMain(1, plus1); // 2
plusMain(1, plus2); // 3
plusMain(1, plus3); // 4

// 고차함수, 콜백함수 실습 1
// 두 수와 콜백함수를 입력하면 사칙연산을 수행하는 고차함수, 콜백함수 작성
const calcMain = (num1, num2, f) => console.log(f(num1, num2));
const addCallback = (num1, num2) => num1 + num2;
const subCallback = (num1, num2) => num1 - num2;
const mulCallback = (num1, num2) => num1 * num2;
const devCallback = (num1, num2) => num1 / num2;
calcMain(2, 5, addCallback);
calcMain(2, 5, subCallback);
calcMain(2, 5, mulCallback);
calcMain(2, 5, devCallback);

// 고차함수, 콜백함수 실습 2
// 두 수와 콜백함수 두개를 전달하고
// 앞의 수가 크면 첫번째 콜백함수를 호출
// 뒤의 수가 크면 두번째 콜백함수를 호출
// 두 수가 같다면 same이라는 문자열을 출력
// 첫번째 콜백함수는 두 수의 차를 연산
// 두번째 콜백함수는 뒤의 수의 제곱과 앞의 수의 제곱의 차를 연산
const calcMain2 = (num1, num2, f1, f2) => {
    if (num1>num2) console.log(f1(num1, num2));
    else if (num2>num1) console.log(f2(num1, num2));
    else console.log('same');
};
const f1 = (num1, num2) => num1 - num2;
const f2 = (num1, num2) => num2*num2 - num1*num1;
calcMain2(5, 3, f1, f2);
calcMain2(3, 5, f1, f2);
calcMain2(3, 3, f1, f2);

// 즉시실행함수 실습
// 고차함수, 콜백함수 실습 2를 즉시실행함수로 변환
(function (num1, num2, f1, f2) {
    if (num1>num2) console.log(f1(num1, num2));
    else if (num2>num1) console.log(f2(num1, num2));
    else console.log('same');    
}(3, 5, f1, f2));

// 고차함수, 콜백함수 실습 3
// 하나의 수를 입력받아 5배한 후 3을 빼고 2로 나누기
const calcMain3 = function (num, fn1, fn2, fn3) {
    console.log(fn3(fn2(fn1(num))));
}
const fn1 = num => num * 5;
const fn2 = num => num - 3;
const fn3 = num => num / 2;
calcMain3(3, fn1, fn2, fn3);

// 고차함수, 콜백함수 실습 4
// Math.random() : 0.0<=x<1.0 범위의 임의의 실수를 리턴하는 함수
// Math.ceil(x) : x보다 크지만 가장 작은 정수를 리턴하는 함수, 천장값, 3.14의 ceil값은 4
// Math.floor(x) : x보다 작지만 가장 큰 정수를 리턴하는 함수, 바닥값, 3.14의 floor값은 3
// 1부터 10까지의 임의의 정수를 생성
// console.log(Math.floor(Math.random()*10) + 1);
// 1. 1에서 4까지의 임의의 정수를 생성
// 2. 임의의 정수가 1이면 두번째 인자까지 덧셈
// 3. 임의의 정수가 2이면 세번째 인자까지 덧셈
// 4. 임의의 정수가 3이면 네번째 인자까지 덧셈
// 5. 임의의 정수가 4이면 연산하지 않고 종료
const adder = function (num1, num2, num3, num4, f) {
    console.log(f(num1, num2, num3, num4));
};
const add2 = (num1, num2) => num1 + num2;
const add3 = (num1, num2, num3) => num1 + num2 + num3;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

switch (Math.floor(Math.random()*4) + 1) {
    case 1: adder(1, 2, undefined, undefined, add2); break;
    case 2: adder(1, 2, 3, undefined, add3); break;
    case 3: adder(1, 2, 3, 4, add4); break;
    default : console.log('종료');
}

// 순수 함수 (pure function)
//   - 외부 변수의 값에 영향을 주지 않는 함수
//   - 일반적으로 라이브러리에서 기존 변수의 값에 영향을 주지 않고 기능만 수행하게 하기 위해 사용
//   - 순수 함수들로만 함수를 구성해서 프로그래밍하는 패러다임을 함수형 프로그래밍이라고 함
//   - 순수 함수가 되려면 기본타입값만 인자로 전달해야 함

let count1 = 0;

// 순수 함수 : 함수 수행 결과가 count1의 값을 변경하지 않음
function increase1(n) {
    return ++n;
}

console.log(increase1(count1)); // 1
console.log(increase1(count1)); // 1

// 비순수 함수 : 함수 수행 결과가 count1의 값을 변경함
function increase2() {
    return ++count1;
}

console.log(increase2()); // 1, count1이 0에서 1로 변경
console.log(increase2()); // 2, count1이 1에서 2로 변경

// 순수 함수 실습 1
// 함수에 이름을 입력하면 이름 앞에 'Hello! ' 를 추가하는 순수함수 작성
const name1 = '홍길동';
const name2 = '강감찬';

const pureFunc1 = function(name) {
    return 'Hello! ' + name;
};

console.log(pureFunc1(name1));
console.log(name1);
console.log(pureFunc1(name2));
console.log(name2);

// 순수 함수 실습 2
// 원래 객체에는 변경 없이 객체가 가진 age값을 20에서 30으로 변경하는 순수함수 작성
const hong = {
    name: '홍길동',
    age: 20
};

const pureFunc2 = function(hong, age) {
    return {
        name: hong.name,
        age: age
    };
};

console.log(pureFunc2(hong, 30));
console.log(hong);
