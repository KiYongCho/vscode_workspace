// 데이터처리 실습

// 1. 문자열에서 Java라는 단어가 몇 번 나오는지 출력 (정규표현식 사용 금지)
const text1 = 'Java is fun, Javascript is powerful. I love Java!'

let count = 0; // 개수 저장 변수
let idx = 0; // 탐색 시작 인덱스
while (true) {
    idx = text1.indexOf('Java', idx); // idx부터 Java의 시작인덱스
    if (idx==-1) break; // 더이상 없으면 while문 빠져나감
    else {
        count++; // 개수 증가
        idx += 4; // Java 문자의 개수만큼 idx를 증가                                                                                                                                                                 
    }
}
console.log(count);

// 2. 문자열에서 bad와 ugly를 *표 처리해서 출력 (정규표현식 사용 금지)
const text2 = 'This movie is bad and ugly!';

console.log(text2.replace('bad', '***').replace('ugly', '****'));

// 3. 문자열에서 a의 개수를 출력
const text3 = 'Javascript is a fantastic language!';

console.log(text3.split('a').length - 1);

// 4. 문자열의 첫글자를 대문자로 변환하여 출력                                                                                 
const text4 = 'we are the world!';

console.log(text4.charAt(0).toUpperCase() + text4.substring(1));

// 5. 문자열에서 도메인(www.google.com)만 추출하여 출력 (정규표현식 사용 금지)
const text5 = 'https://www.google.com/search?q=javascript';

console.log(text5.split('/')[2]);

// 6. 소문자 6개로 구성된 랜덤 비밀번호 생성해 출력
//     String.fromCharCode(아스키코드값) : 아스키코드값에 해당하는 문자, 65:A, 97:a

let password = '';
for (let i=0; i<6; i++) {
    password += String.fromCharCode(Math.floor(Math.random()*26) + 97);
}
console.log(password);

// 7. 20이상 30이하의 랜덤 정수 출력
console.log(Math.floor(Math.random()*11) + 20);

// 8. 배열 평균값 출력
const arr1 = [10, 25, 39, 40, 55];

console.log(arr1.reduce((acc, curr) => acc + curr, 0) / arr1.length);

// 9. 아래 두 날짜의 차이를 일수 계산하여 출력
const today = new Date();
const future = new Date('2026-12-25');

console.log(Math.ceil((future-today) / (1000*60*60*24)));

// 10. 2025년 12월의 첫째 날과 마지막 날 출력

console.log(new Date(2025, 11, 1).toLocaleDateString());
console.log(new Date(2026, 0, 0).toLocaleDateString());















