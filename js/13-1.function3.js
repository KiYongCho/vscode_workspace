// 메소드의 종류
// 1. 정적메소드 (static method) : 생성자 함수에 생성하고 생성자 함수를 통해서 접근, 객체 접근 불가
// 2. 프로토타입메소드 (prototype method) : 생성자함수의 prototype프라퍼티에 생성해서 모든 객체가 공유하는 메소드 (합리적임)
// 3. 인스턴스메소드 (instance method) : 생성자 함수를 통해서 생성된 모든 객체가 하나씩 가지는 메소드 (불합리함)
// 4. 객체메소드 (object method) : 인스턴스화된 객체가 단독으로 가지는 메소드

// 생성자 함수
function Person(name) {
    this.name = name;
    this.getName = function() { // 인스턴스 메소드 
        return this.name;
    };
}

// 생성자 함수를 통해 객체 생성
const hong = new Person('홍길동'); // hong객체의 name은 홍길동, hong객체는 getName 인스턴스 메소드를 가짐
console.log(hong.getName()); // 인스턴스 메소드 호출
const kang = new Person('강감찬'); // kang객체의 name은 강감찬, kang객체도 getName 인스턴스 메소드를 가짐
console.log(kang.getName()); // 인스턴스 메소드 호출

// 프로토타입 메소드
Person.prototype.getName = function() {
    return this.name; // this는 getName을 호출한 객체 (hong, kang)
};
console.log(hong.getName()); // 인스턴스 메소드 호출
console.log(hong.getName()); // 인스턴스 메소드 호출

// 정적 메소드
Person.getName = function() {
    return this.name; // this는 Person생성자 함수 (Person)
};
console.log(Person.getName()); // Person, 정적 메소드를 호출해서 생성 함수의 이름인 Person이 출력됨

// 객체 메소드
hong.getAge = function() {
    console.log('나이는 10살이예요!');
};
hong.getAge(); // 10살이예요!
kang.getAge(); // TypeError, kang객체에는 getAge메소드가 없음


























