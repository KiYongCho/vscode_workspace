// Bird 생성자 함수
function Bird() {
    this.name = '새'; // 인스턴스 프라퍼티
}

// Chicken 생성자 함수
function Chicken() {
    this.name= '닭'; // 인스턴스 프라퍼티
}

// Chicken이 Bird를 상속
// Object.create()를 통해 부모의 프로토타입을 직접 쓰지 않고 ‘위임’받는 새 객체를 생성
Chicken.prototype = Object.create(Bird.prototype);
Chicken.prototype.constructor = Chicken;

// Chicken 타입 객체 생성
const chicken = new Chicken();

// 프라퍼티 쉐도잉(property shadowing)
// Chicken이 Bird를 상속받았으므로 Chicken이 가진 name이 Bird가 가진 name을 가려버림
console.log(chicken.name); // 닭

// 메소드 오버라이딩 (method overriding)
//   - 상속관계에서 상위의 메소드와 하위의 메소드가 같다면 하위의 메소드가 먼저 발현
//   - 즉, 하위의 메소드에 의해서 상위의 메소드가 가려짐
//   - 상위에서 공통 구현을 하고, 하위에서 오버라이딩을 해서 구현을 변경해서 개별적으로 사용할 수 있음
Bird.prototype.getName = function() { // 프로토타입 메소드
    return this.name;
};
Chicken.prototype.getName = function() { // 프로토타입 메소드
    return this.name;
};
const bird1 = new Bird();
const chicken1 = new Chicken();
console.log(bird1.getName()); // 새, 프로토타입메소드 호출
console.log(chicken1.getName()); // 닭, 프로토타입메소드 호출


// 메소드 오버라이딩 활용

// Vehicle 생성자 함수
function Vehicle() {
    this.accel = function() { // 인스턴스 메소드
        console.log('가속한다');
    };
    this.break = function() { // 인스턴스 메소드
        console.log('감속한다');
    }
}

// Car 생성자 함수
function Car() {
    this.accel = function() { // 인스턴스 메소드
        console.log('엑셀 페달을 밝아 가속한다');
    };
    this.break = function() { // 인스턴스 메소드
        console.log('브레이크 페달을 밝아 감속한다');
    };
}

// Horse 생성자 함수
function Horse() {
    this.accel = function() { // 인스턴스 메소드
        console.log('채찍질을 해서 가속한다');
    };
    this.break = function() { // 인스턴스 메소드
        console.log('고삐를 당겨서 감속한다!');
    };
}

// Car와 Horse가 Vehicle을 상속
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Horse.prototype = Object.create(Vehicle.prototype);
Horse.prototype.constructor = Horse;

// 공통 상위인 Vehicle의 프로토타입을 확장
Vehicle.prototype.role = function() { // 프로토타입 메소드
    console.log('이동수단이 된다');
};

const car = new Car();
car.accel();
car.break();
car.role(); // car도 공통메소드를 사용

const horse = new Horse();
horse.accel();
horse.break();
horse.role(); // horse도 공통메소드를 사용

// Bicycle 생성자 함수
function Bicycle() {
    this.accel = function() { // 인스턴스메소드
        console.log('페달을 발로 밟아 돌려서 가속한다');
    };
    this.break = function() { // 인스턴스메소드
        console.log('브레이크 레버를 손으로 쥐어서 감속한다');
    };
    // 하위에서 재정의(overring)하면 하위의 메소드가 실행됨
    this.role = function() { // 인스턴스메소드
        console.log('쌀 배달을 한다');
    };
};

// Bicycle이 Vehicle을 상속
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

const bicycle = new Bicycle();
bicycle.accel();
bicycle.break();
bicycle.role(); // 인스턴스메소드가 프로토타입메소드를 재정의 (오버라이딩)


// 프라퍼티 열거 (property enumeration)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('홍길동', 20);

// instanceof : 객체가 프로토타입체인상에 있는지 여부 반환
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(person instanceof Chicken); // false

// in : 객체의 프로토타입체인상에 프라퍼티가 있는지 여부 반환
console.log('name' in person); // true
console.log('address' in person); // false

// for in : 객체의 열거가능한 프라퍼티의 수만큼 반복
for (let prop in person) {
    console.log(prop, person[prop]); // name 홍길동, age 20
}


// 정적 프라퍼티, 정적 메소드 : 생성자 함수에 정의한 프라퍼티와 메소드
//   - 생성자함수로 접근 가능, 인스턴스(객체)로 접근 불가

function Truck(name, price) {
    this.name = name; // 인스턴스 프라퍼티
    this.price = price; // 인스턴스 프라퍼티
}

Truck.cc = '5000cc'; // 정적 프라퍼티
Truck.stop = function() { // 정적 메소드
    console.log('멈춘다!');
};

const truck = new Truck('골리앗', 10000);

// 생성자함수의 이름인 Truck이 출력되고 생성자함수에는 price라는 정적프라퍼티가 없으므로 undefined 출력
console.log(Truck.name, Truck.price); // Truck, undefined

// 객체의 name프라퍼티의 값과 price프라퍼티의 값 출력
console.log(truck.name, truck.price); // 골리앗, 10000

// 정적프라퍼티의 값 출력
console.log(Truck.cc); // 5000cc

// 객체로 정적프라퍼티에 접근 불가, 객체에 cc 프라퍼티 없음
console.log(truck.cc); // undefined

// 정적메소드 호출
Truck.stop(); // 멈춘다!

// 객체로 정적메소드에 접근 불가, 에러
// truck.stop(); // TypeError













