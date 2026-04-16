/*
타입 호환 (type compatability)
  - 좁은 타입에서 넓은 타입으로의 타입호환은 OK
  - 넓은 타입에서 좁은 타입으로의 타입호환은 ERROR
*/

// 좁은 타입과 넓은 타입간의 타입호환
let s1: string = 'hi'; // s1은 string 일반 타입 (넓은 타입)
let s2: 'hello' = 'hello'; // s2는 'hello' 리터럴 타입 (좁은 타입)
// s2 = s1; // ERROR
s1 = s2; // OK

// 구조적 타이핑 (structural typing)
// 타입호환시 타입의 명칭이 중요하지 않고 타입이 가지고 있는
// 프라퍼티명과 프라퍼티타입이 중요함
// 구조 : 프라퍼티의 개수, 이름, 타입, 구조가 같으면 호환, 같지 않으면 비호환
interface I4 {name: string;}
interface I5 {name: string;}
let i4: I4 = {name: '홍길동'};
let i5: I5 = {name: '강감찬'};
i4 = i5; // OK
i5 = i4; // OK
interface I6 {name: number;}
let i6: I6 = {name: 100};
// i4 = i6; // ERROR
// i6 = i4; // ERROR

// 객체간 타입 호환
interface Animal5 {name: string;}
interface Dog5 {name: string; sound: string;}
interface Bird5 {name: string; leg: number;}
let animal5: Animal5 = {name: '동물'};
let dog5: Dog5 = {name: '강아지', sound: '왈왈'};
let bird5: Bird5 = {name: '새', leg: 2};
// dog5 = bird5; // ERROR, dog5가 되려면 sound프라퍼티가 있어야 함
// bird5 = dog5; // ERROR, bird5가 되려면 leg프라퍼티가 있어야 함
// dog5 = animal5; // ERROR, dog5가 되려면 sound프라퍼티가 있어야 함
// bird5 = animal5; // ERROR, bird5가 되려면 leg프라퍼티가 있어야 함
animal5 = dog5; // OK, animal5가 되려면 name프라퍼티만 있으면 됨
animal5 = bird5; // OK, animal5가 되려면 name프라퍼티만 있으면 됨

// 옵셔널을 활용한 타입 호환
interface Dog6 {name: string; sound?: string;} // sound optional
interface Bird6 {name: string; leg?: number;} // leg optional
let dog6: Dog6 = {name: '강아지', sound: '왈왈'};
let bird6: Bird6 = {name: '새', leg: 2};
dog6 = bird6; // OK, dog6의 sound프라퍼티는 옵셔널
bird6 = dog6; // OK, bird6는 name프라퍼티만 있으면 됨

// 함수에서의 타입 호환
// 파라미터의 보장 여부를 따져야 함
// 파라미터가 적은 쪽에서 많은 쪽으로는 호환 가능
// 파라미터가 많은 쪽에서 적은 쪽으로는 호환 불가
let func6 = function(a: number, b: number): number { return a+b; };
let func7 = function(a: number): number { return a; };
func6 = func7; // OK, func6는 a파라미터가 있음
// func7 = func6; // ERROR, func7은 b파라미터가 없음

// enum타입의 타입 호환
// enum타입은 구조가 같아도 호환 불가
enum Enum1 {A, B, C};
enum Enum2 {A, B, C};
let e1: Enum1 = Enum1.A; // 0
let e2: Enum2 = Enum2.A; // 0
// e1 = e2;
// e2 = e1;

// 제네릭에서의 호환 타입
// 파라미터가 정의되지 않은 타입의 경우는 모든 타입을 수용
interface In1<T> {}
let inter1: In1<string> = 'string';
let inter2: In1<number> = 30;
inter1 = inter2; // OK
inter2 = inter1; // OK

interface In2<T> {data: T;}
let inter3: In2<string> = {data: 'hello'};
let inter4: In2<number> = {data: 30};
// inter3 = inter4; // ERROR, inter4의 data프라퍼티의 타입은 number > string (X)
// inter4 = inter3; // ERROR, inter3의 data프라퍼티의 타입은 string > number (X)



