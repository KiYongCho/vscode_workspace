// 배열 실습 1 : 고차함수 사용 금지

// 1. 배열에서 귤이 존재하면 '귤이 있습니다', 존재하지 않으면 '귤이 없습니다' 출력
let fruits = ['사과', '배', '귤', '감', '오렌지'];
console.log(fruits.includes('귤') ? '귤이 있습니다' : '귤이 없습니다');

// 2. 배열에서 '노랑'을 제거한 배열을 출력
let colors = ['빨강', '파랑', '노랑', '초록'];
colors.splice(colors.indexOf('노랑'), 1);
console.log(colors);

// 3. reverse메소드를 사용하지 말고 배열의 모든 요소의 순서를 뒤집어서 출력
let nums = [1, 2, 3, 4, 5];
let reversedNums = [];
for (let i=nums.length-1; i>=0; i--) { // 인덱스 4부터 0까지 반복
    reversedNums.push(nums[i]); // 새로운 배열의 뒤에서 부터 요소를 추가
}
console.log(reversedNums);

// 4. 배열에서 최대값을 구해서 출력
let arr1 = [7, 3, 9, 12, 5];
let max = arr1[0]; // 배열의 첫번째 요소를 최대값이라 가정
for (let i=0; i<arr1.length; i++) { // 배열의 모든 요소를 순회하면서
    if (max<arr1[i]) max = arr1[i]; // max보다 큰 값의 요소가 있다면 max를 변경
}
console.log(max);

// 5. 배열의 인덱스 2에 'C'를 삽입한 후 배열을 출력
let alphabet = ['A', 'B', 'D', 'E'];
alphabet.splice(2, 0, 'C');
console.log(alphabet);

// 6. 중복된 요소가 한번만 나오는 배열을 출력
let origin = [1, 3, 3, 5, 1, 7, 9, 9];
let unique =[]; // 유일한 값들만 저장할 배열
for (let i=0; i<origin.length; i++) { // 배열의 인덱스 순회
    if (!unique.includes(origin[i])) unique.push(origin[i]); // 새로운 요소만 unique 배열에 추가
}
console.log(unique);

// 7. 3행 3열 배열을 만들고 1부터 9까지 채워서 출력
let matrix = [];
for (let i=0; i<3; i++) {
    matrix[i] = [];
    for (let j=0; j<3; j++) {
        matrix[i][j] = i*3 + j + 1;
    }
}
console.log(matrix);

// 8. 배열에서 인덱스 1과 인덱스 3의 요소를 변경한 배열을 출력
let arr2 = ['가', '나', '다', '라', '마'];
let temp = arr2[1]; // 임시저장소에 인덱스 1의 요소를 넣음
arr2[1] = arr2[3]; // 인덱스 1에 인덱스 3의 요소를 넣음
arr2[3] = temp;
console.log(arr2);

// 9. 배열에서 짝수만 모은 배열을 출력
let numbers = [10, 13, 22, 37, 40, 55];
let even = [];
for (let i=0; i<numbers.length; i++) {
    if (!(numbers[i]%2)) even.push(numbers[i]); // 짝수일때만 새로운 배열에 추가
}
console.log(even);

// 10. 배열을 오른쪽으로 한칸 이동 [1, 2, 3, 4] => [4, 1, 2, 3]
let arr3 = [1, 2, 3, 4];
arr3.unshift(arr3.pop()); // 뒤에서 하나 꺼내서 앞에 넣음
console.log(arr3);

// 10-extra1. 배열을 다시 왼쪽으로 한칸 이동
arr3.push(arr3.shift()); // 앞에서 하나 꺼내서 뒤에 넣음
console.log(arr3);

// 10-extra2. 배열을 원하는 칸 수만큼 이동시키는 함수
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shiftArr4 = function (arr, direction, count) {
    if (direction=='right') {
        for (let i=0; i<count; i++) arr.unshift(arr.pop());
    } else {
        for (let i=0; i<count; i++) arr.push(arr.shift());
    }
    return arr;
}
console.log(shiftArr4(arr4, 'right', 3)); // [7, 8, 9, 1, 2, 3, 4, 5, 6]
console.log(shiftArr4(arr4, 'left', 2)); // [9, 1, 2, 3, 4, 5, 6, 7, 8]









































