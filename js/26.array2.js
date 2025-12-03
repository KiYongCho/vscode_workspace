// 배열 메소드

const arr = [1, 10, 9, 4, 5]; // length:5, index:0~4

console.log(Array.isArray(arr)); // true, 배열여부 확인
console.log(arr.indexOf(10)); // 1, 10 요소가 있는 곳의 인덱스
console.log(arr.includes(9)); // true, 요소 포함여부 확인

// stack 자료구조 (FILO : First In Last Out)
console.log(arr.push(7)); // 6, 7요소를 배열의 맨 끝에 추가하고 추가된 배열의 길이를 리턴
console.log(arr.pop()); // 7, 배열의 맨 뒤 요소를 제거하고 제거된 요소를 반환

console.log(arr.unshift(2)); // 6, 배열의 맨 앞에 2요소를 추가하고 추가된 배열의 길이를 리턴
console.log(arr.shift()); // 2, 배열의 맨 앞 요소를 제거하고 제거된 요소를 반환

console.log(arr.concat(3, 8)); // [1, 10, 9, 4, 5, 3, 8], 배열의 맨 끝에 3, 8 요소들을 추가하고 추가된 배열을 반환

console.log(arr.splice(1, 2)); // [10, 9], 1번 인덱스부터 2개의 요소를 제거하고 제거된 요소를 포함하는 배열을 반환
console.log(arr); // [1, 4, 5]
console.log(arr.splice(1, 1, 3, 4)); // 4, 1번 인덱스에서 1개 요소를 제거하고 3, 4 요소들을 추가하고 제거한 요소를 가진 배열을 반환
console.log(arr); // [1, 3, 4, 5]

console.log(arr.join()); // 1,3,4,5 각 요소들을 콤마와 함께 모두 붙인 문자열을 반환

console.log(arr.reverse()); // [5, 4, 3, 1], 요소의 순서를 180도 뒤집은 배열을 반환

console.log(arr.fill(10)); // [10, 10, 10, 10], 배열의 모든 요소를 주어진 요소로 채운 배열을 반환

const arr2 = [[1, 2], [3, 4]];
console.log(arr2.flat()); // [1, 2, 3, 4], 배열의 요소들을 꺼내서 기존 배열에 요소로 추가 (차원 축소)


// 배열 고차함수

const arr3 = [1, 2, 3, 4, 5];

// forEach : 배열의 각 요소마다 콜백을 적용, 반환은 undefined
const forEachArr = arr3.forEach(ele => console.log(ele));
console.log(forEachArr); // undefined

// map : 배열의 각 요소마다 콜백을 적용, 적용 결과가 반영된 배열을 반환
const mapArr = arr3.map(ele => ele*ele);
console.log(mapArr); // [1, 4, 9, 16, 25]

// filter : 배열의 각 요소마다 콜백을 적용, 적용 결과가 true인 요소들을 추출한 배열을 반환
const filterArr = arr3.filter(ele => ele%2); // 홀수만 필터링
console.log(filterArr); // [1, 3, 5]

// reduce : 배열의 요소마다 콜백을 적용, 적용한 결과를 다음 콜백 호출시 전달해서 사용
// acc = 0, curr = 1, acc + curr = 1
// acc = 1, curr = 2, acc + curr = 3
// acc = 3, curr = 3, acc + curr = 6
// acc = 6, curr = 4, acc + curr = 10
// acc = 10, curr = 5, acc + curr = 15
const sum = arr3.reduce((acc, curr) => acc + curr, 0); // 인자 : 콜백, acc의 초기값
console.log(sum);

// some : 콜백함수의 결과가 true인 경우가 하나라도 있으면 true를 반환
const some = arr3.some(ele => ele==5);
console.log(some);

// every : 콜백함수의 모든 결과가 true인 경우 true를 반환
const every = arr3.every(ele => ele<10);
console.log(every);

// find : 콜백함수의 결과가 true인 첫번째 요소를 반환
const find = arr3.find(ele => ele>3);
console.log(find); // 4

// findIndex : 콜백함수의 결과가 true인 첫번째 요소의 인덱스를 반환
const findIndex = arr3.findIndex(ele => ele>3);
console.log(findIndex);


// sort : 배열의 요소 순서를 정렬

const numbers = [4, 2, 9, 1, 5];

// 리턴 결과가 양수가 나오면 앞의 값이 큼 > 서로 자리를 바꿈 ... 연속적으로 계속해서 정렬
numbers.sort((a, b) => a - b); // 오름차순(ascending) 정렬
console.log(numbers);

// 리턴 결과가 음수가 나오면 앞의 값이 작음 > 서로 자리를 바꿈 ... 연속적으로 계속해서 정렬
numbers.sort((a, b) => b - a); // 내림차순(descending) 정렬
console.log(numbers);

// 오름차순 정렬 후 reverse하면 내림차순, 내림차순 정렬 후 reverse하면 오름차순

// 리턴 결과가 0이 나오면 서로 자리를 바꾸지 않음

const words = ['banana', 'apple', 'cherry', 'peach'];

words.sort(); // 오름차순 정렬
console.log(words); // [ 'apple', 'banana', 'cherry', 'peach' ], 맨 앞 문자부터 비교

words.sort((a, b) => a<b ? 1 : -1); // 내림차순 정렬, 문자의 아스키코드값 비교

// 실습

const hanwords = ['홍길동', '강감찬', '이순신', '최영', '권율'];

// 한글 오름차순 정렬
hanwords.sort((a, b) => a.localeCompare(b));
console.log(hanwords); // [ '강감찬', '권율', '이순신', '최영', '홍길동' ]

// 한글 내림차순 정렬
hanwords.sort((a, b) => b.localeCompare(a));
console.log(hanwords); // [ '홍길동', '최영', '이순신', '권율', '강감찬' ]





































