const hong = {};

// 프라퍼티 동적 생성
hong.name = '홍길동';
hong['age'] = 20;
// hong.home-address = '서울';
hong['home-address'] = '서울';

// 프라퍼티 축약 표현 (ES6)
// 프라퍼티명이 변수명과 같을때 프라퍼티명만 객체내에 기술
let x=1, y=2;
const obj1 = {
    x, // x:1
    y // y:2
}

// 계산된 프라퍼티명 (프라퍼티명을 변수를 활용해서 여러개 동적으로 생성)
const prefix = 'prop';
let i = 0;
const obj2 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
console.log(obj2);

// for문을 활용해서 obj2객체에 prop-4부터 prop-100까지 프라퍼티 생성
for (let j=4; j<=100; j++) {
    obj2[`${prefix}-${j}`] = j;
}
console.log(obj2);

// 실습 
// 1. primenum이라는 객체를 객체리터럴 방식으로 생성
// 2. 2~1000의 범위에서 프라퍼티명을 prime-2 ~ prime-마지막소수까지 생성
// 3. 각 프라퍼티는 소수를 가지도록해서 primenum객체를 출력
// 소수 (prime number) : 1보다 큰 정수 중에 1과 자기자신 외에는 나누어 떨어지지 않는 정수
const primenum = {};
for (let i=2; i<=1000; i++) {
    let isPrime = true; // flag 변수
    for (let j=2; j<i; j++) {  // i의 현재값 전까지 1씩 증가하면서 반복
        if (i%j==0) { // 중간에 나누어 떨어지는 수가 있다면 소수가 아님
            isPrime = false;
            break;
        }
    }
    if (isPrime) { // 소수인 경우
        primenum[`prime-${i}`] = i; // 동적으로 계산된 프라퍼티를 생성
    }
}
console.log(primenum);

// 동적 메소드 생성
const kang = {
    name: '강감찬',
    age: 30
};
// getName은 kang객체의 프라퍼티명, 뒤의 익명함수리터럴을 getName프라퍼티에 저장
kang.getName = function() { // 프라퍼티에 함수리터럴 저장 => 메소드
    return this.name;
};
console.log(kang);
console.log(kang.getName());

// 메소드 축약 표현 (ES6)
const choi = {
    name: '최영',
    age: 20,
    // getName: function() { console.log(this.name); }
    getName() {
        console.log(this.name);
    },
    // getAge: function() { console.log(this.age); }
    getAge() {
        console.log(this.age);
    }
};