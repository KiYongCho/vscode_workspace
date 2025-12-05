/*
    클래스 (class)
      - ES6에 도입됨
      - 클래스명은 대문자로 시작하는 관례
      - 클래스 문법 구성요소
        class키워드, 클래스명, constructor, 프로토타입메소드, 정적메소드, getter, setter
*/

// class Person {

//     // 생성자 : 생성될 객체의 프라퍼티의 값을 초기화 해주는 역할
//     //             명시적으로 코딩하지 않아도 기본생성자(파라미터 없는 생성자)를 만들어 줌
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     // 프로토타입메소드 : 객체들이 공유하는 메소드
//     printName() {
//         console.log(this._name);
//     }

//     // 정적메소드 : 클래스로만 접근, 객체접근 불가
//     static printName() {
//         console.log(this._name);
//     }

//     // name프라퍼티의 값에 접근하는 getter메소드
//     get name() {
//         return this._name;
//     }

//     // name프라퍼티의 값을 변경하는 setter메소드
//     set name(name) {
//         this._name = name;
//     }

// }

// // 클래스를 통해 객체를 생성
// const person1 = new Person('홍길동', 20);
// const person2 = new Person('강감찬', 30);

// // 객체 프라퍼티 접근
// console.log(person1.name); // 홍길동
// console.log(person2.age); // undefined, age프라퍼티에 대한 getter가 없으므로

// // 객체 프라퍼티 변경
// person1.name = '홍길순'; // name프라퍼티의 setter 호출
// console.log(person1.name); // 홍길순
// person1.age = 50; // person1객체의 프라퍼티가 생성됨
// console.log(person1.age); // 50, 동적으로 생성된 person1객체의 프라퍼티의 값 호출

// // 프로토타입메소드 호출
// person1.printName(); // 홍길순
// person2.printName(); // 강감찬

// // 정적메소드 호출
// Person.printName(); // undefined

// // 자바스크립에서 클래스는 function 타입, 클래스는 내부적으로 함수로 처리됨
// console.log(typeof Person); // function
// console.log(Person); // [class Person]
// console.log(person1 instanceof Person); // true
// console.log(person1 instanceof Object); // true
// console.log(person2 instanceof Person); // true
// console.log(person2 instanceof Object); // true


// 실습 : 위 모든 코드를 주석처리하고 생성자함수 문법으로 변경

// 생성자함수
function Person(name, age) {
    this.name = name; // 프로토타입 프라퍼티
    this.age = age; // 프로토타입 프라퍼티
}

// 프로토타입 메소드
Person.prototype.printName = function() {
    console.log(this.name);
};

// 정적 메소드
Person.printName = function() {
    console.log(this.name);
};

// 객체 생성
const person1 = new Person('홍길동', 20);
const person2 = new Person('강감찬', 30);

// 프로토타입메소드 호출
person1.printName(); // 홍길동
person2.printName(); // 강감찬

// 정적메소드 호출
Person.printName(); // Person

// 프라퍼티 접근
console.log(person1.name); // 홍길동
console.log(person1.age); // 20

// 프라퍼티 변경
person2.name = '강감순';
person2.age = 50;
console.log(person2.name); // 강감순
console.log(person2.age); // 50




















