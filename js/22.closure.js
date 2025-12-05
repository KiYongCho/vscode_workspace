/*
    클로져 (closure)
      - 외부함수가 함수 실행을 종료할때 외부함수가 가진 변수를 내부함수에 실어서 내부함수를 리턴
      - 리턴된 내부함수를 통해 이미 메모리에서 소멸된 외부함수의 변수가 가졌던 값에 접근 가능
      - 캡슐화(encapsulation), 정보은닉(information hiding)을 위해 사용하는 개념/기법
      - 클로져를 통해서 변수의 값이 외부에서 임의로 변경되는 것을 막을 수 있음
      - jQuery, React, Vue, Angular 등등 자바스크립트 기반의 프레임워크/라이브러리에서 굉장히 많이 사용됨
*/

function outer() { // 외부함수
    let x = 10; // 외부함수의 지역변수
    return function() { // 외부함수의 지역변수를 내부함수가 사용
        console.log(++x);
    };
}
// outer함수의 호출이 끝나면 outer의 지역변수인 x가 소멸되어야 하는데
// outer함수가 리턴하는 함수(클로져)가 outer의 지역변수 x를 사용하고 있으므로
// outer함수가 종료되어도 outer의 지역변수인 x가 소멸되지 않음
// 그를 통해 outer의 지역변수 x에 접근하는 방법을 outer를 호출해서
// x를 사용하는 방법만으로 제한함 (x를 사용하려면 반드시 outer를 사용해야함! = 정보은닉 또는 캡슐화)
// 순수함수 (동일한 입력값에 대해 동일한 출력값을 얻는 외부 변수에 영향을 주지 않는 함수)로 사용
(outer()()); // 11
(outer()()); // 11

// 클로져 활용 예)
const count = (function() {
    let counter = 0;
    return function(f) {
        counter = f(counter);
        return counter;
    };
}());

const increase = function(n) { return ++n; };
const decrease = function(n) { return --n; };

console.log(count(increase)); // 1
// 즉시실행함수내의 counter변수의 값을 변경할 방법? 없음... 
// 외부로부터 함수내의 변수가진 값을 보호 (정보은닉 또는 캡슐화)
console.log(count(increase));  // 2
console.log(count(decrease));  // 1
console.log(count(decrease));  // 0


// 클로져를 사용하지 않은 예)
let counter2 = 0;
function addCounter() {
    return ++counter2;
}
function subCounter() {
    return --counter2;
}

console.log(addCounter()); // 1
counter2 = 3; // 외부에서 counter2 변수의 값 변경이 언제든 가능
console.log(addCounter()); // 4
console.log(subCounter()); // 3
console.log(subCounter()); // 2





































