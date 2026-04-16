/* 인터페이스 */
// 객체의 타입을 정의할때 사용

// 인터페이스 정의
interface User {
    name: string;
    age: number;
}

// 객체 생성
const user1: User = {
    name: '홍길동',
    age: 20
};

// 함수의 파라미터와 리턴타입으로 인터페이스 사용
function getUserInfo(user: User): User {
    return user;
}

// 인터페이스 옵셔널 프라퍼티
interface User2 {
    name: string;
    age?: number; // 옵셔널 프라퍼티
}

const user3: User2 = {name: '이순신', age: 40};
const user4: User2 = {name: '이순신'};

// 인터페이스 상속
interface Animal {
    name: string;
    legCnt: number;
}
interface Bird extends Animal {
    hasWing: boolean;
}
const bird1: Bird = {name: '독수리', legCnt: 2, hasWing: true};
// const bird2: Bird = {hasWing: true};

// 객체 프라퍼티명으로 숫자를 사용
interface Student {
    [key: number]: string;
}
const student: Student = {
    1: '홍길동',
    2: '강감찬'
};

// 객체 프라퍼티명으로 문자열을 사용
interface Student2 {
    [key: string]: string;
}
const student2: Student2 = {'1': '홍길동', '2': '강감찬'};

// 배열 인덱스로 숫자를 사용
interface Student3 {
    [index: number]: string;
}
const student3: Student3 = ['홍길동', '강감찬'];

// index는 숫자 타입이어야만 함
interface Student4 {
    [index: string]: string;
}
// const student4: Student4 = ['홍길동', '강감찬'];

// 유니언 타입 (union type)
// 여러 타입 중 하나

let un: string | number;
un = '홍길동';
un = 100;
//un = true;

// 함수 파라미터로 유니언 타입 선언
interface Pen {
    name: string;
    color: string;
}
interface Note {
    name: string;
    pages: number;
}
function getInfo(obj: Pen | Note): void {
    if ('color' in obj) { // 객체 프라퍼티 조사 (타입가드:type guard)
        console.log(obj.name, obj.color);
    } else {
        console.log(obj.name, obj.pages);
    }
}

// 인터섹션 (intersection) 타입
// 두 개 이상의 타입의 프라퍼티들을 합쳐서 사용
interface I1 {name: string;}
interface I2 {age: number;}
interface I3 {hobby: string[];}
const is1: I1 & I2 & I3 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};

// 타입 별칭 (type alias)
// 타입에 대한 별도의 이름을 부여
// 타입 정의 코드를 줄이기 위해서 사용

type MyStr = string;
const mystr: MyStr = '홍길동';

type MyNum = number;
const mynum: MyNum = 30;

type MyType = string | number | boolean;
const mt1: MyType = '홍길동';
const mt2: MyType = 30;
const mt3: MyType = false;

// 인터페이스의 선언 병합 (declaration merging)
// 인터페이스를 동일한 이름으로 2개 이상 선언하면 프라퍼티들이 합쳐짐
// cf) 타입별칭은 동일한 이름으로 2개 이상 선언이 불가
interface Int1 {name: string;}
interface Int1 {age: number;}
const int1: Int1 = {name: '홍길동', age: 30};

// enum 타입
// 상수 정의를 위한 타입
// 초기값을 할당하지 않으면 기본 값은 선언된 순서대로 0, 1, 2 ...
enum Planet {
    MERCURY, // 0
    VENUS, // 1
    EARTH, // 2
    MARS // 3
}
const earth: number = Planet.EARTH;
const mars: number = Planet.MARS;

enum Planet2 {
    MERCURY = 1,
    VENUS = 2,
    EARTH = 3,
    MARS = 4  
}
enum Planet3 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '헬',
    MARS = '화성'   
}

// const enum : js로 변환되는 코드의 양 감소시킨 enum
const enum Planet4 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '헬',
    MARS = '화성'
}

// 클래스
// 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의해야만 함
// 생성자의 파라미터 타입과 메서드의 반환타입을 미리 정의해야만 함
class Person {

    #name: string; // private (ES2020 이상)
    age: number;

    constructor(name: string, age: number) {
        this.#name = name;
        this.age = age;
    }

    getName(): string {
        return this.#name;
    }

    setName(name: string): void {
        this.#name = name;
    }

}
const person1 = new Person('홍길동', 30);
console.log(person1);
person1.setName('홍길순');
console.log(person1.getName());

// 제네릭 (generic)
// 타입을 실행시점(runtime)에 정의하기 위한 문법
// 제네릭을 사용하면 타입의 유연성이 생김

// T : 타입매개변수 (type parameter)
function getText<T>(text: T): T {
    return text;
}
getText<string>('hi'); // 실행시점에 T는 string
getText<number>(100); // 실행시점에 T는 number

// 인터페이스에 제네릭 사용
interface Animal2<T> {
    name: string;
    body: T
}
const animal2: Animal2<{color: string, legCount: number}> = {
    name: '호랑이',
    body: {color: '얼룩덜룩', legCount: 4}
};

// 제네릭에 제약 부여
// T extends string : string이거나 string을 상속받는 어떤 타입
function printName<T extends string>(name: T): T {
    return name;
}
printName('홍길동');

// extends : 뒤에 나오는 타입과 호환타입을 허용
// {length: number} : number타입인 length프라퍼티를 가진 타입
// T extends {length: number} : {length: number}이거나 {length: number}을 상속받은 타입
function lengthOnly<T extends {length: number}>(value: T): number {
    return value.length;
}
lengthOnly('123'); // 문자열은 length프라퍼티를 가지고 있음
lengthOnly([1, 2, 3]); // 배열은 length프라퍼티를 가지고 있음
// lengthOnly(123); // 숫자는 length프라퍼티를 가지고 있지 않음

// 제네릭과 유니온 결합
// <T extends string | number> : string이거나 number이거나 string을 상속받은 타입이거나 number를 상속받은 타입
function lengthOnly2<T extends string | number>(value: T): number {
    if (typeof value === 'string') { // 문자열이면
        return value.length; // 문자열의 길이를 리턴
    } else { // 숫자라면
        return value; // 숫자값을 리턴
    }
}
lengthOnly2('123'); // 3
lengthOnly2(123); // 123

// keyof : 인터페이스 프라퍼티들의 키를 문자열로 추출해서 문자열들의 유니언 타입 반환
// keyof {name: string; skill: string;} : 'name' | 'skill'
// T extends keyof {name: string; skill: string;} : 'name' | 'skill' 타입이거나 타입의 하위 타입인 어떤 타입
function printKeys<T extends keyof {name: string; skill: string;}>(value: T): void {
    console.log(value);
}
printKeys('name');
printKeys('skill');
//printKeys('hobby');



