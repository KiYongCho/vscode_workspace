/*
    제어문
    1. 조건문 : 조건의 true, false 여부에 따라 실행할 구문을 선택, if, switch
    2. 반복문 : 특정 회수나 true조건 하에서 특정 코드블럭을 반복 수행, for, while, do while, for in, for of
    3. break : switch에 사용하면 case를 실행하고 switch전체를 빠져나감
                   반복문에 사용하면 break문을 감싸고 있는 가장 가까운 반복문을 빠져나감
    4. continue : 반복문에서 사용하며 continue 하단의 코드를 수행하지 않고 다음번 반복을 수행
*/

// if

let age = 15;

if (age>19) {
    console.log('19 초과!');
} else if (age>15) {
    console.log('15 초과!');
} else if (age>13) {
    console.log('13 초과!');
} else {
    console.log('13 이하!');
}

// switch

let val = 3;

switch (val) {
    case 1: console.log('월요일'); break;
    case 2: console.log('화요일'); break;
    case 3: console.log('수요일'); break;
    case 4: console.log('목요일'); break;
    case 5: console.log('금요일'); break;
    case 6: console.log('토요일'); break;
    case 7: console.log('일요일'); break;
    default: console.log('1부터 7의 값이 아님!');
}

// 실습 : 위 switch구문을 if구문으로 변경해보기
if (val==1) console.log('월요일');
else if (val==2) console.log('화요일');
else if (val==3) console.log('수요일');
else if (val==4) console.log('목요일');
else if (val==5) console.log('금요일');
else if (val==6) console.log('토요일');
else if (val==7) console.log('일요일');
else console.log('1부터 7의 값이 아님!');

// 실습 : 변수의 값이 홀수이면 홀수입니다! 짝수이면 짝수입니다!를 출력
//          if문과 switch문을 사용해서 각각 실습
let val2 = 5;

if (val2%2==0) console.log('짝수입니다!');
else console.log('홀수입니다!');

switch (val2%2) {
    case 0: console.log('짝수입니다!'); break;
    default: console.log('홀수입니다!');
}

console.log(val2%2==0 ? '짝수입니다!' : '홀수입니다!');

// 실습 : 변수의 값이 100이하의 수이면 5로 나눈 나머지를 출력
//          100을 초과하는 수이면 3으로 나눈 나머지를 출력
let val3 = 77;

if (val3<=100) console.log(val3%5);
else console.log(val3%3);

switch (val3<=100) {
    case true: console.log(val3%5); break;
    default: console.log(val3%3);
}

console.log(val3<=100 ? val3%5 : val3%3);

// 실습 : 변수의 타입이 Array인지 아닌지 출력
const val4 = [1, 2, 3, 4, 5]; // 배열 Array

if (val4 instanceof Array) console.log('Array 타입!');
else console.log('Array 타입 아님!');

console.log(val4 instanceof Array ? 'Array 타입!' : 'Array 타입 아님!');

// 실습 : 객체가 변수가 가진 문자열을 프라퍼티로 가지고 있는지 출력
const obj = {
    name: '홍길동',
    age: 20,
    hobby: ['축구', '농구', '야구']
};
const val5 = 'name';

if (val5 in obj) console.log('가지고 있음!');
else console.log('가지고 있지 않음!');

console.log(val5 in obj ? '가지고 있음!' : '가지고 있지 않음!');

// for
//   - 특정 회수만큼 반복 수행할 코드가 있다면 for 사용
//   - for 작동 순서
//   - 1. 초기식 수행 (처음 한번만)
//   - 2. 판별식 수행 (결과가 true면 for코드블럭 수행, false면 for문을 빠져 나감)
//   - 3. 증감식 수행
//   - 4. 판별식 수행 (결과가 true면 for코드블럭 수행, false면 for문을 빠져 나감)
//   - 판별식 결과가 false이면 for문을 벗어남

// 10회 반복, 0부터 9까지 출력
for (let i=0; i<10; i++) {
    console.log(i);
}

// 5회 반복, 5부터 1까지 출력
for (let i=5; i>0; i--) {
    console.log(i);
}

// 초기식에 변수를 여러개 사용 가능
for (let i=1, sum=0; i<=10; i++) {
    sum += i; // sum = sum + i;
    console.log(`누적 합 : ${sum}`);
}

// 실습 : 1에서 50까지의 정수 중에서 3의 배수만 출력
// 50번 반복
for (let i=1, count=0; i<=50; i++) { // i > 1 2 3 4 ...
    if (i%3 == 0) console.log(i);
    console.log(`${++count} 번 반복`);
}
// 같은 결과가 나오지만 반복회수가 적은 코드
// 16번 반복
for (let i=3, count=0; i<=50; i=i+3) { // i > 3 6 9 ...
    console.log(i);
    console.log(`${++count} 번 반복`);
}

// for문 내에서 break, continue 사용
for (let i=1; i<=50; i++) {
    if (i%4 == 0) continue; // i의 값이 4의 배수라면 아래코드 수행안하고 다음번 반복 수행
    if (i==30) break; // i의 값이 30이 되면 가장 가까운 반복문을 탈출
    if (i%2 == 0) console.log(`${i}는 짝수!`);
}

// 중첩 for (nested for, for문을 2개이상 겹쳐서 사용)
// 외부for가 5번, 내부for가 외부for 1번마다 5번 수행하므로 전체 25번 반복
// O(2) : 성능에 사용하는 빅오노테이션, 2라는 얘기는 반복이 중첩되었다는 얘기
// 성능을 위해 최대 O(3)를 넘지 않도록 로직을 구현하는 것이 중요
for (let i=1; i<=5; i++) {
    for (let j=1; j<=5; j++) { // i가 1번 반복할때마다 j는 5번 반복
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// 실습 : 구구단 출력
//          2*1=2    2*2=4 ...    2*9=18
//          ...
//          9*1=9    9*2=18 ...  9*9=81
for (let i=2; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        process.stdout.write(`${i}*${j}=${i*j}\t`);
    }
    console.log();
}

// 실습 : 1000까지 피보나치 수열 출력
//          1
//          1 2
//          1 2 3
//          1 2 3 5
//          1 2 3 5 8
//          ...
for (let i=1, stop=false; !stop; i++) {
    let a=1, b=1;
    let line = "";
    for (let j=1; j<=i; j++) {
        if (j==1) {
            line += '1 ';
        } else {
            let next = a + b;            
            if (next > 1000) {
                stop = true;
                break;
            }            
            line += next + ' ';            
            a = b;
            b = next;
        }
    }
    if(!stop) console.log(line);
}

// while
//   - 조건이 true인 동안 반복 수행
//   - 무한루프에 빠지지 않도록 언젠가는 조건이 false인 경우가 있어야 함
let v = 10;
while (v>0) {
    console.log(v);
    v--;
}

// do while
//   - while과 동일하지만 한번은 do블럭을 수행하고 조건이 true인 동안 반복 수행
let v2 = 10;
do {
    console.log(v2);
    v2--;
} while (v2>0);

// for in
//   - 객체의 프라퍼티들을 반복할때 사용
const hong = {
    name: '홍길동',
    age: 20,
    address: '서울특별시 아무구 아무동'
};
// 객체에서 프라퍼티들을 하나씩 꺼내서 반복
// key변수에는 프라퍼티의 키가 할당됨
for (let key in hong) { 
    console.log(key, hong[key]); // 프라퍼티의 키와 값을 출력
}

// for of
//  - 이터러블(Iterable)을 반복할때 사용
//  - 이터러블 : 반복 가능한 객체 (배열, 문자열, Map, Set ...)
let str = 'Hello Javascript!';
for (let ch of str) {
    console.log(ch);
}




