/* 
    배열 (Array) : 하나의 변수에 여러 데이터를 저장하기 위한 자료구조
      - 요소(element) : 배열에 저장되는 각각의 값
      - 인덱스(index) : 배열의 요소들을 구별하기 위한 순서 번호 (0부터 시작해서 1씩 증가)
      - 크기(length) : 배열에 있는 요소들의 수
      - 배열 인덱스 범위는 0~크기-1
      - 자바스크립트 배열의 특성 (동적언어에서 배열의 특성)
        1. 어떤 타입의 값도 저장 가능 (저장되는 값의 타입에 제한이 없음)
        2. 배열의 크기가 동적으로 늘어남
        3. 크기를 지정하고 사용할 필요가 없음
        4. 값을 연속적으로 저장할 필요가 없음
        5. 유사배열객체나 이터러블을 배열로 변환 가능      
*/

const arr1 = [1, 2, 3, 4, 5]; // 크기:5, 인덱스범위:0~4
console.log(arr1.length); // 5
console.log(arr1[0]); // 1
console.log(arr1[3]); // 4
console.log(arr1[5]); // undefined

// 동적으로 배열 요소 추가
arr1[5] = 6; // 밀집배열 (Dense Array)
console.log(arr1); // 크기:6, 인덱스범위:0~5

arr1[10] = 11; // 희소배열 (Sparse Array)
console.log(arr1);

console.log(arr1[8]); // undefined

// 배열 생성법

// 1. 배열리터럴
const arr3 = [1, 2, 3, 4, 5];

// 2. 배열 생성자 함수
const arr4 = new Array(10); // 크기가 10인 배열
console.log(arr4);
const arr5 = new Array(1, 2, 3, 4, 5); // 크기가 5인 배열
console.log(arr5);

// 3. Array.of 메소드
const arr6 = Array.of(1); // 1요소를 가진 배열 => [1]
console.log(arr6);
const arr7 = Array.of(1, 2, 3, 4, 5); // 크기가 5인 배열
console.log(arr7);

// 4. Array.from 메소드
// 유사배열객체 (length와 인덱스 프라퍼티를 가진 배열처럼 작동하는 객체)
const arr8 = Array.from({length: 2, 0:'a', 1:'b'}); // ['a', 'b']
console.log(arr8);
// 이터러블 (프라퍼티 반복이 가능한 객체)
const arr9 = Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
console.log(arr9);

// 배열 요소 삭제
const arr10 = [1, 2, 3, 4, 5];

delete arr10[0];
console.log(arr10); // [undefined, 2, 3, 4, 5] 크기가 5인 배열

// 파라미터 :인덱스, 개수
arr10.splice(0, 1); // 0번 인덱스에서 1개 제거
console.log(arr10); // [2, 3, 4, 5] 크기가 4인 배열

arr10.splice(0, 0 , 10, 20); // 0번 인덱스에서 0개 제거하고 10과 20을 요소로 추가
console.log(arr10); // [10, 20, 2, 3, 4, 5] 크기가 6인 배열

// 다차원 배열 (Multi Dimension Array)
//   - 배열이 요소로 배열을 가질때 다차원 배열이라 함
//   - 2차원 배열 : 1차원 배열을 요소로 가지는 배열
//   - 3차원 배열 : 2차원 배열을 요소로 가지는 배열

// 2차원 배열
const arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr2d.length); // 3 : 1차원 배열요소 3개
console.log(arr2d[1]); // [4, 5, 6] : 2차원 배열의 요소는 1차원 배열
console.log(arr2d[1].length); // 3 : 배열요소 수는 3개
console.log(arr2d[1][1]); // 5, [4, 5, 6]에서 1번 인덱스의 5

// 실습
// 아래 2차원 배열의 모든 요소의 합을 구해봅시다
const arr2dex = [
    [1, 3, 5, 7, 9],
    [10, 20, 30, 40, 50],
    [3, 8, 5, 4, 3]
];

// 60점 코드 : 변경될 수 있는 값을 값 자체로 코딩... 확장성에 문제...
let sum = 0;
for (let i=0; i<3; i++) {
    for (let j=0; j<5; j++) {
        sum += arr2dex[i][j];
    }
}
console.log(sum);

// 80점 코드 : 반복시마다 length 구하는 연산을 하는건 불필요... 성능에 문제...
let sum2 = 0;
// for (let i=0; i<arr2dex.length; i++) {
//     for (let j=0; j<arr2dex[i].length; j++) {
//         sum2 += arr2dex[i][j];
//     }
// }
let arr2dexLength = arr2dex.length;
for (let i=0; i<arr2dexLength; i++) {
    let arr2dexILength = arr2dex[i].length;
    for (let j=0; j<arr2dexILength; j++) {
        sum2 += arr2dex[i][j];
    }
}
console.log(sum2);

const arr2dex2 = [
    [1, 3, 5],
    [10, 20, 30, 40],
    [3, 8]
];

let sum3 = 0;
let arr2dex2Length = arr2dex2.length;
for (let i=0; i<arr2dex2Length; i++) {
    let arr2dex2ILength = arr2dex2[i].length;
    for (let j=0; j<arr2dex2ILength; j++) {
        sum3 += arr2dex2[i][j];
    }
}
console.log(sum3);