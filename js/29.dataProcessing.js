// 문자열 String

const str = 'Hello, JavaScript!';
console.log(str.indexOf('Java')); // 7, 문자열의 시작인덱스
console.log(str.indexOf('Python')); // -1, 문자열이 없으면
console.log(str.indexOf('a', 10)); // 10, 10번 인덱스부터 a가 나온 첫 인덱스
console.log(str.includes('Script')); // true, 문자열 포함 여부
console.log(str.search('Java')); // 7, 문자열의 시작인덱스
console.log(str.search('Python')); // -1, 문자열이 없으면
console.log(str.search(/Java/)); // 7, search는 정규표현식이 가능
console.log(str.startsWith('Hello')); // true, 문자열로 시작하는지 여부
console.log(str.endsWith('Script!')); // true, 문자열로 끝나는지 여부
console.log(str.charAt(4)); // o, 인덱스4에 있는 문자
console.log(str.substring(0, 5)); // Hello, 인덱스 0부터 5전까지 문자열
console.log(str.substring(7)); // JavaScript!, 인덱스 7부터 끝까지 문자열
console.log(str.slice(-10, -1)); // avaScript!, 인덱스 -10부터 -1까지 (-인덱스 뒤에서부터 검색)
console.log(str.toUpperCase()); // HELLO, JAVASCRIPT!, 대문자로 변환
console.log(str.toLowerCase()); // hello, javascript!, 소문자로 변환
console.log('     Trim this!     '.trim()); // Trim this!, 문자열 앞/뒤 공백 제거
console.log('Repeat!'.repeat(3)); // Repeat!Repeat!Repeat!, 문자열 반복
console.log(str.replace('JavaScript', 'World')); // Hello, World!, 문자열 대체
console.log(str.replace(/JavaScript/, 'World')); // Hello, World!, 문자열 대체, 정규표현식 사용
console.log(str.split(', ')); // ['Hello', 'Javascript!'], 문자열 기준으로 분리해서 배열로 반환
console.log('010-1234-5678'.split('-')); // ['010', '1234', '5678']
console.log('1 2 3'.split(' ')); // ['1', '2', '3'], 공백 기준으로 분리


// 숫자 Number
console.log(Number.isFinite(123)); // true, 유한수 여부
console.log(Number.isInteger(12.34)); // false, 정수 여부
console.log(Number.isNaN(NaN)); // true, NaN 여부
console.log(NaN===NaN); // false, ??? 버그
console.log(Object.is(NaN, NaN)); // true
console.log(+0===-0); // true, ??? 버그
console.log(Object.is(+0, -0)); // false, +0은 양의 방향에서 0에 가장 가까운 수, -음 음의 방향에서 0에 가장 가까운 수

// 수학 Math
console.log(Math.abs(-10)); // 10, 절대값
console.log(Math.round(4.5)); // 5, 반올림
console.log(Math.ceil(4.1)); // 5, 주어진 수보다 크지만 가장 작은 정수, 천장값(올림값)
console.log(Math.floor(4.1)); // 4, 주어진 수보다 작지만 가장 큰 정수, 바닥값(내림값)
console.log(Math.PI); // PI
console.log(Math.E); // E
console.log(Math.sqrt(16)); // 4, 루트
console.log(Math.random()); // 0.0보다 크거나 같고 1.0보다 작은 임의의 실수
console.log(Math.pow(2, 3)); // 8, 2의 3승 (제곱근)
console.log(Math.max(1, 2, 4, 5, 3)); // 5, 최대값
console.log(Math.min(5, 1, 3, 4, 2)); // 1, 최소값

// 실습 : 배열의 최대값, 최소값 출력
const numarr = [3, 1, 5, 10, 8, 6, 4];
console.log(Math.max(...numarr), Math.min(...numarr));

// 날짜/시간 Date
console.log(Date.now()); // 1765243601957, 1970년 1월 1일 0시 0분 0초 0밀리초부터 현재까지 밀리초마다 1씩 센 값
console.log(Date.parse('2025-12-9')); // 1765206000000, 주어진 문자열에 해당하는 날짜/시간에 대한 unix time값

const date = new Date(); // 현재 날짜/시간 정보를 가진 Date객체
console.log(date.getFullYear()); // 연도 네자리
console.log(date.getMonth()); // 월 (0~11)
console.log(date.getDate()); // 일
console.log(date.getHours()); // 시간 (0~23)
console.log(date.getMinutes()); // 분 (0~59)
console.log(date.getSeconds()); // 초 (0~59)
console.log(date.getMilliseconds()); // 밀리초 (0~999)
console.log(date.getTime()); // 현재 시점의 unix time값
console.log(date.getDay()); // 요일 (0~6, 0이 일요일)
console.log(date.getTimezoneOffset()); // -540, 시간 원점에서 시차를 분으로 반환
console.log(date.toLocaleDateString()); // 2025. 12. 9.
console.log(date.toLocaleTimeString()); // 오전 10:34:33
console.log(date.toLocaleString()); // 2025. 12. 9. 오전 10:34:33

// 실습
// 현재시점의 날짜/시간을 아래 형식으로 출력
// 출력 형식 : 2025년 12월 9일 오전 10시 34분 33초

// 풀이 1 : 구조분해할당 사용
// const [yearStr, monthStr, dateStr] = date.toLocaleDateString().split('.');
// const [timeStr, minuteStr, secondStr] = date.toLocaleTimeString().split(':');
// console.log(`${yearStr}년${monthStr}월${dateStr}일 ${timeStr}시 ${minuteStr}분 ${secondStr}초`);

// 풀이 2 : 정규표현식 사용
const nowStr = date.toLocaleString();
const [yearStr, monthStr, dateStr, timeStr, minuteStr, secondStr] = nowStr.match(/\d+/g);
console.log(`${yearStr}년 ${monthStr}월 ${dateStr}일 \
${nowStr.includes('오전') ? '오전' : '오후'} ${timeStr}시 ${minuteStr}분 ${secondStr}초`);




















