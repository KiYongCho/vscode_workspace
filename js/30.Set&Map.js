// Set
//   - 중복된 요소는 한번만 저장하는 자료구조
//   - 이터러블 (for of 순회 가능, 스프레드문법 사용 가능, 구조분해할당 가능)
//   - 요소의 순서는 없음 (= 인덱스 없음)

const set1 = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log(set1); // Set(5) { 1, 2, 3, 4, 5 }
console.log(set1.size); // 5

const set2 = new Set('Hello');
console.log(set2); // Set(4) {'H', 'e', 'l', 'o'}
console.log(set2.size); // 4

// Set에 요소 추가
set1.add(6);
console.log(set1); // Set(6) { 1, 2, 3, 4, 5, 6 }
set1.add(5);
console.log(set1); // Set(6) { 1, 2, 3, 4, 5, 6 }

// Set에 요소 있는지 여부
console.log(set1.has(3)); // true
console.log(set1.has(10)); // false

// Set에서 요소 제거
set1.delete(2);
console.log(set1); // Set(5) { 1, 3, 4, 5, 6 }

// Set에서 모든 요소 제거
set2.clear();
console.log(set2); // Set(0) {}

// Set의 모든 요소 순회
set1.forEach(ele => console.log(ele)); // 1 3 4 5 6


// Map
//   - 엔트리(Entry)들의 집합, 엔트리 키와 값으로 구성
//   - 키로 값을 검색하기 위한 자료구조
//   - 저장된 엔트리들의 순서는 없음
//   - 키는 중복 불허, 값은 중복 허용

// 엔트리가 2개인 맵 생성
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// 맵에 엔트리 추가
map.set('key3', 'value3');
console.log(map); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

// 맵의 엔트리 수
console.log(map.size); // 3

// 키를 통해 값을 조회
console.log(map.get('key1')); // value1
console.log(map.get('key4')); // undefined

// 맵에 키에 해당하는 엔트리가 있는지 여부
console.log(map.has('key2')); // true
console.log(map.has('key4')); // false

// 맵에서 키에 해당하는 엔트리 제거
map.delete('key2');
console.log(map); // Map(2) { 'key1' => 'value1', 'key3' => 'value3' }

const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// 키들의 이터레이터, 값들의 이터레이터, 엔트리들의 이터레이터
console.log([...map2.keys()]); // ['a', 'b', 'c']
console.log(typeof map2.keys()); // object (MapIterator)
console.log([...map2.values()]); // [1, 2, 3]
console.log(typeof map2.values()); // object (MapIterator)
console.log([...map2.entries()]); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(typeof map2.entries()); // object (MapIterator)

// 맵의 엔트리 반복
map2.forEach((v, k) => console.log(k, v)); // a 1 b 2 c 3

// 객체 <> Map 변환
const hong = {
    name: '홍길동',
    age: 20,
    hobby: ['축구', '농구']
};
const map3 = new Map(); // empty map, 엔트리가 없는 맵
for (prop in hong) { // 객체 프라퍼티 순회
    map3.set(prop, hong[prop]); // 프라퍼티를 키로, 프라퍼티값을 값으로 하는 엔트리 추가
}
console.log(map3); // Map(3) { 'name' => '홍길동', 'age' => 20, 'hobby' => [ '축구', '농구' ] }

// 실습 : Map <> 객체 변환, map3을 map3obj라는 객체로 변환
const map3obj = {}; // empty object, 프라퍼티가 없는 객체
map3.forEach((v, k) => map3obj[k]=v);
console.log(map3obj); // { name: '홍길동', age: 20, hobby: [ '축구', '농구' ] }

// 객체 > 맵 변환 메소드
const hongMap = new Map(Object.entries(hong));
console.log(hongMap); // Map(3) { 'name' => '홍길동', 'age' => 20, 'hobby' => [ '축구', '농구' ] }

// 맵 > 객체 변환 메소드
const hongObj = Object.fromEntries(hongMap);
console.log(hongObj); // { name: '홍길동', age: 20, hobby: [ '축구', '농구' ] }

// 실습 : 중복되지 않는 로또번호(1~45 범위의 정수)를 6개 출력
const lottoSet = new Set(); // empty Set
while (lottoSet.size < 6) { // 6개가 저장되면 빠려나감
    lottoSet.add(Math.floor(Math.random()*45) + 1); // 1~45 범위의 임의의 정수를 Set에 저장
}
console.log(lottoSet);

