/*
    literal (리터럴)
        - 코드에 쓰여져 있는 값
        - 리터럴은 자바스크립트엔진이 평가하면 메모리에 값이 됨
        - 자바스크립트는 문자열리터럴(코드 조각)의 집합
        - 자바스크립트엔진은 문자열을 해석(parsing)해서 평가(evaluation=연산=실행)하게 됨
*/

// number 리터럴
// - 자바스크립트에서 하나의 수는 64비트 부호화 실수 (부호가 있는 8바이트 실수)
// - 자바스크립트 number타입의 한계를 넘는 수는 bigint라는 타입으로 표현해야 함
console.log(10); // 정수
console.log(3.14); // 실수 (부동소수)
console.log(0b00000010); // 2진수, 10진수로 2
console.log(0o111); // 8진수, 10진수로 73
console.log(0xff); // 16진수, 10진수로 255

// string 리터럴
console.log('hello');
console.log("hello");
console.log(`hello`);
let str = ' there!';
console.log(`hello${str}`);

// boolean 리터럴
console.log(true);
console.log(false);

// null 리터럴 : 값이 없다는 값, 역할:개발자가 값이 없음을 나타내기 위해서 사용
// null은 참조하면 에러 => null이라는 것은 아직 메모리에 없다는 얘기
console.log(null);
console.log(typeof null); // object 타입으로 표시됨, 원래 null은 기본타입인데 자바스크립트의 버그
const obj = null; // 개발자의 의도 : obj라는 상수는 값을 가질 예정이지만 아직은 값이 없음
console.log(obj); // null

// undefined 리터럴 : 값이 정의되지 않았을때 갖게되는 기본값, 역할:변수가 아직 값을 가진적이 없음을 나타내기 위해서 사용
// undefined는 참조해도 에러가 없음 => undefined는 메모리에 있는데 값이 undefined라는 얘기
console.log(undefined);
console.log(typeof undefined); // undefined 타입임
const und = undefined;
console.log(und); // undefined
let l; // 선언만한 변수
console.log(l); // undefined

// object 리터럴
console.log({name: '홍길동', age: 20});

// array 리터럴
console.log([1, 2, 3, 4, 5]);

// function 리터럴
console.log(function func() {});

// regular expression 리터럴 (정규표현식 리터럴)
console.log(/abc/);

// 평가 (evaluation)
// eval함수는 보안상 사용하지 않는 것이 좋다.
let result = eval('1+2+3+4+5');
console.log(result);
eval("function f() { console.log('hello'); }");
f();

// 자바스크립트 코드 작성부터 엔진 작동 순서
// 1. 개발자들이 자바스크립트 코드 작성
// 2. 엔진이 문법 검사
// 3. 엔진이 문장들을 해석(parsing) : 토크나이징(문장을 구성요소별로 분리)
// 4. 엔진이 평가(evaluation)
// 5. 엔진이 평가결과를 실행(run)


