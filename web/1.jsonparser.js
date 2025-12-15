/*
    JSON Parser : JSON문자열 <> Javascript객체 변환에 사용되는 코드해석기
                         (json.org 하단에 언어별로 정리되어 있음)
*/

// JSON 문자열
// [
//     {"name": "홍길동", "age": 20},
//     {"name": "강감찬", "age": 30}
// ]
const jsonStr = `
    [
        {"name": "홍길동", "age": 20},
        {"name": "강감찬", "age": 30}
    ]
`;
console.log(jsonStr);

// JSON.parse : JSON문자열 > Javascript객체
const jsObj = JSON.parse(jsonStr);
console.log(jsObj);
console.log(jsObj[0].name);
console.log(jsObj[1].age);

// JSON.stringify : Javascript객체 > JSON문자열
const jsonStr2 = JSON.stringify(jsObj);
console.log(jsonStr2);
// console.log(jsonStr2[0].name); // undefined
// console.log(jsonStr2[1].age); // undefined

// 실습 1
// JSON문자열을 Javascript객체로 변환하여 아래 형식으로 출력
// 이름: 홍길동, 나이: 30, 주소:지구 어딘가
// 이름: 강감찬, 나이: 20, 주소:우주 어딘가

// JSON문자열
const personsStr = `
    [
        {
            "name": "홍길동",
            "age": 30,
            "address": "지구 어딘가"
        },
        {
            "name": "강감찬",
            "age": 20,
            "address": "우주 어딘가"
        }
    ]
`;

const jsObj2 = JSON.parse(personsStr);
jsObj2.forEach(person => {
    console.log(`이름: ${person.name}, 나이: ${person.age}, 주소: ${person.address}`);
});

// 실습 2
// Javascript객체를 JSON문자열로 변환하여 출력
const personsObj = [
    {name: '이순신', age: 20, address: '지구 어딘가'},
    {name: '최영', age: 30, address: '우주 어딘가'}
];

console.log(JSON.stringify(personsObj));

// JSON파일 사용
// fs/promises : node설치 시 설치되는 파일시스템 관련 라이브러리
import { readFile } from 'fs/promises'; // 파일에서 문자열 읽어오기

// JSON파일에서 utf-8로 인코딩한 JSON문자열
// await : awaite 뒤 작업이 완료될때까지 대기(blocking)
const jsonFileStr = await readFile('web/assets/persons.json', 'utf-8');

// JSON문자열을 Javascript객체로
const jsonFileObj = JSON.parse(jsonFileStr);
jsonFileObj.forEach(person => {
    console.log(`PID: ${person.pid}, 이름: ${person.name}, 나이: ${person.age}, 주소: ${person.address}`);
});

import { writeFile } from 'fs/promises'; // 파일에 문자열 쓰기
await writeFile('web/assets/persons_copy.json', jsonFileStr);

// 원격서버의 JSON문자열 획득
// fetch : 비동기 문자열데이터 획득 함수
const response = await fetch('https://jsonplaceholder.typicode.com/users');
console.log(response);

if (!response.ok) throw new Error('에러 발생!');

// 서버의 응답에서 JSON문자열에 해당하는 Javascript객체 획득
const users = await response.json();
users.forEach(user => {
    console.log(`
        id: ${user.id},
        name: ${user.name},
        username: ${user.username},
        email: ${user.email},
        address: ${user.address.street} ${user.address.suite} ${user.address.city}
    `);
});





