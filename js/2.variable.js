// 변수/상수 선언시에는 var, let, const 키워드를 앞에 붙임, 아무것도 앞에 붙이지 않으면 var가 자동으로 붙음
var v; // 변수/상수 모두 선언 가능, ES6 이전 방식
let l; // ES6, 변수 선언
const c = 1; // 상수는 값을 할당한 후에만 사용 가능, ES6, 상수 선언
v2 = 3; // var가 앞에 붙은 것으로 간주
console.log(v2);

// c = 2; // TypeError, 상수는 초기화(값을 처음 할당)한 후에 값 변경 불가


/*
    변수 선언(Declaration), 초기화(Initialization), 할당(Assignment)

    1. 선언
        - (인터프리터 언어) 변수명을 지정
        - (컴파일 언어) 변수의 타입과 이름을 지정
    2. 초기화
        - 변수를 선언한 후에 최초의 값을 저장하기 위해서 메모리를 초기화
        - 자바스크립트가 사용할 메모리 확보를 위해 기존에 메모리에 있던 값들을 제거
    3. 할당
        - 변수에 값을 저장 (= 대입 = 할당)
        - 자바스크립트는 동적타이핑을 지원하는 인터프리터 언어
        - 변수에 값이 할당되면 값의 타입이 변수의 타입이 됨
        - 실행시간(runtime)에 값의 타입이 언제든지 변경 가능 (컴파일 언어에서는 불가능)
*/

// 선언
var vv;
let ll;
const cc = 3;

// 할당
vv = 1; // 1은 숫자리터럴, vv는 number타입이 됨
ll = 'hello'; // hello는 문자열리터럴, ll은 string타입이 됨
vv = 'hi'; // hi는 문자열리터럼, vv는 string타입이 됨
ll = 5; // 5는 숫자리터럴, ll은 number타입이 됨

// 리터럴 (literal) : 코드에 쓰인 값, 모든 리터럴은 타입이 존재함

// 타입 확인
console.log(typeof vv); // string
console.log(typeof ll); // number























