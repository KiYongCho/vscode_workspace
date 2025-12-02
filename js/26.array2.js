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

// 12/3일...
































