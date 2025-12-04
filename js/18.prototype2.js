// 프로토타입 확장 (Extension)
//  - 생성자함수가 가진 프로토타입객체에 메소드를 추가
//  - 생성자함수를 통해서 생성된 객체들이 추가된 프로토타입객체의 메소드에 접근할 수 있음

// Person 생성자함수
function Person(name, age) {
    this.name = name; // 인스턴스프라퍼티
    this.age = age; // 인스턴스프라퍼티
    this.getName = function() { // 인스턴스메소드
        return this.name;
    }
}

// 프로토타입 확장
Person.prototype.getAge = function() { // 프로토타입메소드
    return this.age;
};

// Person타입 객체 생성

const person1 = new Person('홍길동', 20);
console.log(person1.getName()); // 홍길동, 인스턴스메소드 호출
console.log(person1.getAge()); // 20, 프로토타입메소드 호출

const person2 = new Person('강감찬', 30);
console.log(person2.getName()); // 강감찬, 인스턴스메소드 호출
console.log(person2.getAge()); // 30, 프로토타입메소드 호출

// 정적메소드는 생성자함수를 통해서 생성되는 객체들마다 가지는 메소드
console.log(Person.getName); // undefined

// 객체 생성시에 생성자함수에서 받은 익명함수
console.log(person1.getName); // [Function (anonymous)]
console.log(person2.getName); // [Function (anonymous)]

// 정적메소드는 객체마다 가짐 (person1의 getName과 person2의 getName이 별도로 생성됨)
console.log(person1.getName == person2.getName); // false

// 프로타입메소드 호출
console.log(Person.getAge); // undefined
console.log(person1.getAge); // [Function (anonymous)]
console.log(person2.getAge); // [Function (anonymous)]

console.log(person1.getAge == person2.getAge); // true


// 프로토타입 체인 (Chain)

// Car 생성자 함수
function Car(company, model) {
    this.company = company;
    this.model = model;
}

// Car타입 객체 생성
const car = new Car('BMW', '520D');

console.log(car.__proto__ == Car.prototype); // true
console.log(Car.prototype.__proto__ == Object.prototype); // true

// car 객체는 __proto__를 통해 Car 생성자함수의 prototype에 접근
// Car 생성자함수의 prototype은 자신의 __proto__를 통해 Object 생성자함수의 prototype에 접근

// 결론 : car <> Car.prototype <> Object.Prototype 이 프로토타입 체인을 형성
//          => car는 Car.prototype에서 정의한 프로토타입 메소드도 사용할 수 있고
//                        Object.prototype에서 정의한 프로토타입 메소드도 사용할 수 있다.
//          => 이러한 프로토타입 체인 매커니즘이 자바스크립트에서의 상속임


// 프로토타입 교체 (replacement)
//   - 자바스크립트는 프로토타입 교체를 통해 언제든지 상속 구조를 변경할 수 있음

// Chicken 생성자 함수
function Chicken(name) {
    this.name = name;
}
Chicken.prototype.sound = function() {
    console.log(this.name + '이 꼬끼오 소리를 냅니다!');
};

// Duck 생성자 함수
function Duck(name) {
    this.name = name;
}
Duck.prototype.sound = function() {
    console.log(this.name + '이 꽥꽥 소리를 냅니다!');
};

// Chicken타입 객체 생성
const chicken1 = new Chicken('닭1');
chicken1.sound();

// Duck타입 객체 생성
const duck1 = new Duck('오리1');
duck1.sound();

const chickenPrototype = Chicken.prototype;

// 프로토타입 교체
Chicken.prototype = Object.create(Duck.prototype);
Chicken.prototype.constructor = Chicken;

// Chicken타입 객체 생성
const madchicken = new Chicken('미친닭');
madchicken.sound();

// 실습 : 미친오리가 꼬끼오 소리를 내도록 해봅니다.
//          97라인에서 변경되기전 Chicken의 프로토타입을 저장해 둠
Duck.prototype = chickenPrototype;
const madduck = new Duck('미친오리');
madduck.sound();