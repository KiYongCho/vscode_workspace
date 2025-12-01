/*
    객체 (object)
      - 데이터(프라퍼티)와 기능(메소드)를 합해 놓은 프로그래밍 구성 요소
      - 프라퍼티는 프라퍼티명과 프라퍼티값으로 구성
      - 문법 : {}
*/

// 일반적으로 객체는 const로 선언함
// 아래에서 obj1, obj2는 객체의 참조값(reference value)을 가짐
// 객체의 참조값은 불변(const), 객체 내부에 있는 프라퍼티들은 가변

// 객체생성법 1 : 객체리터럴 사용 (가장 일반적인 방식)

// 사용자정의프라퍼티(사용자가 생성한 프라퍼티)가 없는 객체를 객체리터럴로 생성
const obj1 = {};

// 사용자정의프라퍼티가 2개 있는 객체를 객체리터럴로 생성
const obj2 = {
    name: '홍길동',
    age: 20
};
console.log(obj2); // { name: '홍길동', age: 20 }

// 객체의 프라퍼티에 접근
obj2.name = '강감찬'; // . : 참조연산자(reference operator)
// obj2.home-address = '서울시 아무구 아무동 1번지'; // SyntaxError
console.log(obj2);
obj2['name'] = '이순신'; // [] : 참조연산자, 프라퍼티명이 _, $ 이외의 특수기호를 포함하면 []를 사용해야 함
obj2['home-address'] = '서울시 아무구 아무동 1번지';
console.log(obj2);

// 객체생성법 2 : Object 생성자함수 사용
const o2 = new Object();
console.log(o2);

// 객체생성법 3 : 객체 생성자함수 사용
// Person 처럼 함수 이름은 일반적으로 대문자로 시작
// this : 생성자함수를 통해 생성되는 객체 자신을 가리키는 참조변수
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 객체 생성자함수를 통해 객체 생성
const person = new Person('홍길동', 20);
console.log(person);
console.log(typeof person); // object
// Person 생성자함수를 통해 생성한 person 객체는 Person타입이기도 하지만 Object타입이기도 함
// 왜냐하면 모든 참조타입은 직/간접적으로 Object를 상속 받음
console.log(person instanceof Object); // true, Person타입은 Object를 상속 받음
console.log(person instanceof Person); // true, Person타입이므로

// Car타입 객체 생성
function Car(name, price) {
    this.name = name;
    this.price = price;
}
const bmw = new Car('BMW', 100);
console.log(bmw);
console.log(typeof bmw); // object
console.log(bmw instanceof Object); // true
console.log(bmw instanceof Car); // true

console.log(person instanceof Car); // false
console.log(bmw instanceof Person); // false

// 객체생성법 4. class를 통해 객체 생성
class Dog { // Dog 클래스 = Dog 타입
    constructor(name, age) { // 생성자
        this.name = name;
        this.age = age;
    }
}
const dog = new Dog('치와와', 5);
console.log(dog);
console.log(typeof dog); // object
console.log(dog instanceof Object); // true
console.log(dog instanceof Dog); // true

// 객체와 프라퍼티
const bird = {
    name: '종달새',
    legCount: 2
};

// 동적 프라퍼티 : 실행시간에 객체의 프라퍼티가 동적으로 추가될 수 있음
bird.color = '붉은색'; // or bird['color'] = '붉은색';

// 프라퍼티 존재여부 확인
console.log('name' in bird); // true
console.log('address' in bird); // false

// 객체 프라퍼티 제거
delete bird.color;
console.log(bird);

// 객체는 데이터(프라퍼티)와 기능(메소드)를 가질 수 있음
// 프라퍼티는 프라퍼티명과 프라퍼티값으로 구성되고 데이터를 저장하는 역할
// 메소드는 프라퍼티명과 함수로 구성되고 기능을 수행하는 역할
// 결론 : 자바스크립트에서 메소드는 함수리터럴을 프라퍼티값으로 갖는 프라퍼티
const kang = {
    name: '강감찬', // 프라퍼티 (데이터)
    age: 10, // 프라퍼티 (데이터)
    getName: function() { // 프라퍼티 (기능) = 메소드
        return this.name;
    },
    getAge: function() { // 프라퍼티 (기능) = 메소드
        return this.age;
    }
};
console.log(kang);
console.log(kang.name);
console.log(kang.age);
console.log(kang.getName); // getName 프라퍼티가 가진 함수리터럴이 출력됨
console.log(kang.getName()); // 강감찬
console.log(kang.getAge); // getAge 프라퍼티가 가진 함수리터럴이 출력됨
console.log(kang.getAge()); // 10





































