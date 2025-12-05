/*
    this
    : 현재 메모리상에서 참조되고 있는 객체 자신을 가리키는 키워드
    : 현재 메모리상에서 참조되고 있는 객체의 참조값을 저장하기 위한 참조 변수
*/

console.log(this); // {}, node의 전역객체

// Car는 함수리터럴을 저장한 변수 Car, 아직은 그냥 함수일 뿐
const Car = function() {
    console.log(this);
};

// 1. 일반함수로 호출 : 함수내에서의 this는 전역객체
Car(); // <ref *1> Object [global] { ..., 전역객체

const obj = {
    name: '객체',
    Car // 객체의 프라퍼티인 함수 => 메소드
};

// 2. 메소드로 호출 : 메소드를 호출시 메소드내에서의 this는 메소드를 호출한 객체
obj.Car(); // { name: '객체', Car: [Function: Car] }

// 3. 생성자함수로 호출 : Car타입으로 생성된 객체
new Car(); // Car {}

// 4. 이벤트핸들러내에서의 this : 이벤트 대상 객체

// 5. 화살표함수내에서의 this : 화살표함수는 this를 가지지 않고 상위 스코프의 this를 사용
const func2 = () => { console.log(this); };
func2(); // {}, 전역객체
const func3 = function() {
    const af = () => { console.log(this); };
    af();
};
func3(); // <ref *1> Object [global] {, 전역객체
const obj2 = {
    af: () => { console.log(this); }, // 화살표 함수, 상위스코프의 this를 사용
    lf: function() { console.log(this); } // 리터럴
};
obj2.af(); // {}, 전역객체
obj2.lf(); // { af: [Function: af], lf: [Function: lf] }, 메소드를 호출한 객체

// 결론 : 자바스크립트에서 this는 함수 호출방식에 따라 결정됨!


/*
  동적 this 바인딩 (dynamic this binding)
    - 실행시간에 this에 참조값을 저장하는 것을 동적 this 바인딩이라 함
    - 실행시간에 this가 가지는 참조값 변경이 가능
    => 동적 바인딩을 통해 어떤 함수(메소드)이던지 어떠한 객체로도 호출하는 것이 가능
*/

function f(age, kor, eng) {
    this.age = age;
    this.kor = kor;
    this.eng = eng;
    console.log(this.name, this.age, this.kor+this.eng);
}

const hong = { name: '홍길동' };

// apply : this 바인딩 메소드, 인자를 배열로 전달
f.apply(hong, [20, 100, 90]); // 홍길동 20 190, apply호출시 바인딩함

// call : this 바인딩 메소드, 인자를 개별적으로 전달
f.call(hong, 20, 100, 90); // 홍길동 20 190, call호출시 바인딩함

// bind : this 바인딩 메소드, 인자를 개별적으로 전달
const fnew = f.bind(hong, 20, 100, 90);
fnew(); // 홍길동 20 190, 호출시점에 바인딩함

// 실습 : this 바인딩 메소드 3가지 사용해 보기
// 홍길동,90,80,70 데이터를 가진 객체 생성해서 this 바인딩 메소드를 사용해 총점 출력

function report(kor, eng, math) {
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    console.log(`${this.name}님의 총점은 ${this.kor + this.eng + this.math}`);
}

const h = {
    name: '홍길동',
    kor: 90,
    eng: 80,
    math: 70
};

report.apply(h, [h.kor, h.eng, h.math]);

report.call(h, h.kor, h.eng, h.math);

const hbind = report.bind(h, h.kor, h.eng, h.math);
hbind();

// 자바스크립트에서의 모든 기능(함수, 메소드)은 this바인딩을 통해
// 어떠한 객체로도 모두 사용이 가능함


















