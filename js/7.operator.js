/*
    연산자 (operator)
        - 연산자 (operator) : 연산에 사용되는 기호 또는 단어
        - 피연산자 (operand) : 연산의 대상이 되는 데이터, 변수
        - 산술, 문자열연결, 할당, 비교, 삼항, 논리, 쉼표, 그룹핑, typeof, instanceof, 지수, ?., ??, delete, new, in
*/

let i = 3;
let j = 5;
let k = 7;

let result1 = ++i; // i가 1 증가한 후 result1에 할당
let result2 = i++; // i가 result2에 할당된 후 1 증가 
console.log(result1); // 산술 단항, 전치(연산자가 피연산자 앞에 위치), i가 증가한 후 출력
console.log(result2); // 산술 단항, 후치(연산자가 피연산자 뒤에 위치), 출력된 후 i가 증가
console.log(+i); // 산술 단항, 양수, 일반적으로 생략해서 사용
console.log(-i); // 산술 단항, 음수
console.log(i+j); // 산술 이항, 덧셈
console.log(i-j); // 산술 이항, 뺄셈
console.log(i*j); // 산술 이항, 곱셈
console.log(i/j); // 산술 이항, 나눗셈
console.log(i%j); // 산술 이항, 나머지, 일반적으로 배수구할때 사용 (예> 5로 나눈 나머지가 0이면 5의 배수)
console.log(10 + '십'); // 문자열 접합, 피연산자 중 하나라도 문자열이면 문자열 접합
console.log('십' + 10); // 십10 문자열
console.log(10 + '10');  // 1010 문자열
console.log('10' + 10); // 1010 문자열
console.log(i=3); // 할당
console.log(i+=3); // 기존 i값에 3을 더해서 다시 i에 할당 (i = i + 3)
console.log(i-=3); // 기존 i값에서 3을 빼서 다시 i에 할당 ( i = i - 3)
console.log(i*=3); // 기존 i값에 3을 곱해서 다시 i에 할당 ( i = i * 3)
console.log(i/=3); // 기존 i값을 3으로 나눠서 다시 i에 할당 ( i = i / 3)
console.log(i%=3); // 기존 i값을 3으로 나눈 나머지를 다시 i에 할당 ( i = i % 3)
console.log(i==0); // 피연산자들의 타입을 변환해서라도 값이 같으면 true
console.log(i!=0); // 피연산자들의 타입을 변환해서라도 값이 같지 않으면 true
console.log(i===0); // 타입도 값도 같아야 true
console.log(i!==0); // 타입이 다르거나 값이 다르면 true
console.log(i==0 ? 'i는 0입니다' : 'i는 0이 아닙니다'); // 첫번째 항의 연산을 수행해서 true면 두번째 항을 선택, false면 세번째 항을 선택
console.log(true||true); // 논리 OR, 둘 중 하나라도 true면 전체 결과가 true
console.log(false&&false); // 논리 AND, 둘다 true일때만 전체 결과가 true
console.log(!true); // 논리 NOT, true면 false, false면 true 
console.log(!!!!!!true); // 짝수개면 true, 홀수개면 false
let ii=1, jj=ii+1, kk=jj+1; // 왼쪽부터 순서대로 연산, 비추 (코드 복잡성 증가하므로)
console.log(kk);
console.log((1+2)*(3+4)); // 그룹핑 (연산 우선순위 부여)
console.log(2**3); // 지수, 2의 3승

// ?. : 옵셔널체이닝 (optional chainning)
//       null 참조시 발생하는 에러를 방지하기 위해서 추가된 연산자
let obj1 = null; // null로 초기화 (나중에 obj1에 어떤 값을 할당할 예정)
//obj1 = new Object(); // 객체를 할당함
//obj1.name = '홍길동'; // 위 라인 주석처리시 TypeError: Cannot set properties of null 
console.log(obj1?.name); // undefined

// ?? : 널 병합 (null coalescing)
//        null이나 undefined일 경우 대체값을 설정
let obj2 = null;
console.log(obj2); // null
console.log(obj2 ?? '대체값'); // 대체값
let obj3 = undefined;
console.log(obj3); // undefined
console.log(obj3 ?? '대체값'); // 대체값
obj3 = new Object(); // null이 아님
console.log(obj3); // {}
console.log(obj3 ?? '대체값'); // {}

// typeof : 변수나 값의 타입을 반환
console.log(typeof 1); // number
let obj4 = new Object();
console.log(typeof obj4); // object

// instanceof : 변수의 상속관계를 확인 (결과:boolean)
let obj5 = new Number();
console.log(obj5 instanceof Number); // true
let obj6 = new Object();
console.log(obj6 instanceof Object); // true
let obj7 = [1, 2, 3, 4, 5]; // 배열 (array)
console.log(typeof obj7); // object
console.log(obj7 instanceof Object); // true
console.log(obj7 instanceof Array); // true
console.log(obj7 instanceof Number); // false

// 객체 생성
// 객체는 프라퍼티들로 구성, 프라퍼티는 프라퍼티명과 프라퍼티값으로 구성
const myobj = {
    name: '홍길동', // name 프라퍼티
    age: 20 // age 프라퍼티
};

console.log(myobj.name); // 홍길동, 프라퍼티 참조 (. : 참조연산자)
console.log(myobj['name']); // 홍길동, 프라퍼티 참조 ([] : 참조연산자)

console.log('age' in myobj); // 프라퍼티 존재여부 확인, true
console.log('hobby' in myobj); // false

delete myobj.name; // 프라퍼티 삭제 연산자
console.log('name' in myobj); // false


