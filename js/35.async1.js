const person = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};

// 객체를 JSON문자열로 변환
const jsonStr = JSON.stringify(person);
console.log(typeof jsonStr, jsonStr); // string {"name":"홍길동","age":30,"hobby":["축구","농구"]}

// 객체를 JSON문자열로 변환 (들여쓰기)
const jsonStr2 = JSON.stringify(person, null, 2);
console.log(typeof jsonStr2, jsonStr2);

// 객체를 JSON문자열로 변환 (replacer함수, 들여쓰기)
const jsonStr3 = JSON.stringify(
    person,
    (key, value) => {   // replacer함수 : JSON문자열로 변환시 필터 역할하는 함수
        return typeof value=='number' ? undefined : value;
    },
    2
);
console.log(typeof jsonStr3, jsonStr3);

// JSON문자열을 객체로 변환
const jsonObj1 = JSON.parse(jsonStr);
console.log(jsonObj1.name); // 홍길동

const jsonObj2 = JSON.parse(jsonStr2);
console.log(jsonObj2['age']); // 30

const jsonObj3 = JSON.parse(jsonStr3);
jsonObj3.hobby.forEach(ele => console.log(ele));


