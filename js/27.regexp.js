/*
    정규표현식 (Regular Expression)
      - 문자열내의 문자열들을 검색, 치환에 많이 사용되는 표현식
      - 패턴문자열, 플래그(검색 옵션)으로 구성
*/

// 정규표현식 리터럴
const regExp = /abc/i; // 대소문자 구별없이 a가 나오고 b가 나오고 c가 나오는 패턴

// 정규표현식 생성자 함수
const regExp1 = new RegExp(/abc/i);
const regExp2 = new RegExp(/abc/, 'i');
const regExp3 = new RegExp('abc', 'i');

// 정규표현식 메소드
const str = 'ab abc ab';
const regExp4 = /ab/g;

// test : 문자열이 정규표현식을 만족하면 true, 그렇지 않으면 false 반환
//          문자열이 어떤 패턴을 따르는지 확인용
console.log(regExp4.test(str)); // true

// exec : 정규표현식을 만족하는 문자열들 중 첫번째 결과를 배열로 반환
console.log(regExp4.exec(str)); // [ 'ab', index: 3, input: 'ab abc ab', groups: undefined ]

// 문자열의 정규표현식 관련 메소드

// match : 정규표현식을 만족하는 문자열들을 배열로 반환
//             문자열내에서 정규표현식을 따르는 문자열들을 가져오고 싶을때
console.log(str.match(regExp4)); // [ 'ab', 'ab', 'ab' ]

// replace : 정규표현식을 만족하는 문자열들을 다른 문자열로 대체
console.log(str.replace(/abc/, '')); // ab  ab

// 패턴 문자
const str2 = 'a ab aa abc aaa ac abcd';

// . : 문자 하나
// a 다음에 문자 하나가 오는 패턴
console.log(str2.match(/a./g)); // [ 'a ', 'ab', 'aa', 'ab', 'aa', 'a ', 'ac', 'ab']

// {} : 반복 회수
// a가 2번
console.log(str2.match(/a{2}/g)); // ['aa', 'aa']
// a가 2번 이상 3번 이하
console.log(str2.match(/a{2,3}/g)); // ['aa', 'aaa']

// * : 문자 0개 이상 이상
// a가 0개 이상
console.log('===>',str2.match(/a*/g)); // ['a',  '',    'a', '',  '', 'aa', '',    'a', '',  '', '',   'aaa', '',  'a', '', '',   'a',   '',  '',  '', '']

// ? : 0개 또는 1개 문자
// a가 0개 이거나 1개
console.log(str2.match(/a?/g)); // ['a', '',  'a', '', '', 'a', 'a', '',  'a', '',  '', '', 'a', 'a', 'a', '',  'a', '', '', 'a', '', '',  '',  '']

// + : 문자 하나 이상
// a가 1개 이상
console.log(str2.match(/a+/g)); // ['a', 'a', 'aa', 'a', 'aaa', 'a', 'a']

// | : or
// abc가 나오거나 ab가 나오거나 (abc부터 매칭)
console.log(str2.match(/abc|ab/g)); // ['ab', 'abc', 'abc']
// ab가 나오거나 abc가 나오거나 (ab부터 매칭)
console.log(str2.match(/ab|abc/g)); // ['ab', 'ab', 'ab']

// [-] : 범위
// a에서부터 b까지 중 한 문자
console.log(str2.match(/[a-b]/g)); // ['a', 'a', 'b', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'b']
// 0에서부터 9까지 중 한 문자 => 숫자 한 문자
console.log(str2.match(/[0-9]/g)); // null
// a에서부터 z까지 또는 A에서부터 Z까지 중 한 문자 => 영문 한 문자
console.log(str2.match(/[a-zA-Z]/g)); // ['a', 'a', 'b', 'a', 'a', 'a', 'b', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'b',  'c', 'd']
// a에서부터 z까지 또는 A에서부터 Z까지 또는 0에서부터 9까지 중 한 문자 또는 _ => word 한 문자
console.log(str2.match(/[a-zA-Z0-9_]/g)); // ['a', 'a', 'b', 'a', 'a', 'a', 'b', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'b', 'c', 'd']

// \s : 공백문자 (\t, \n, \v, \f, \r) 하나, \S는 공백문자가 아닌 문자 하나
console.log(str2.match(/\s/g)); // [' ', ' ', ' ', ' ', ' ', ' ']

// \d : 숫자 하나 (= [0-9]), \D는 숫자가 아닌 문자 하나 (= [^0-9])
console.log(str2.match(/\d/g)); // null

// \w : 워드 하나 (영문대소문자, 숫자, _), \W는 워드가 아닌 문자 하나
console.log(str2.match(/\w/g)); // ['a', 'a', 'b', 'a', 'a', 'a', 'b', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'b', 'c', 'd']

// ^ : 시작
// 문장의 시작 문자가 a나 b나 c일때 시작한 문자 (g는 무시)
console.log(str2.match(/^[abc]/g)); // [ 'a' ]
// a나 b나 c가 아닌 것
console.log(str2.match(/[^abc]/g)); // [' ', ' ', ' ', ' ', ' ', ' ', 'd']

// $ : 끝
// 문장의 끝문자가 c나 d일때 끝난 문자 (g는 무시)
console.log(str2.match(/[cd]$/g)); // ['d']


// 플래그 (flag)
//   - i : ignorecase, 대소문자 구별 없음
//   - g : global, 문자열 전체 영역에서 탐색
//   - m : multi-line, 줄만다 시작과 끝 탐색 (m플래그가 없으면 여러줄이라도 한줄에서만 탐색)

const str3 = 'a ab abc \r?\nabc ab a'; // 윈도우 줄바꿈:\r\n, 리눅스 줄바꿈:\n, 구MAC 줄바꿈:\r

console.log(str3.match(/AB/i)); // [ 'ab', index: 2, input: 'a ab abc \r?\nabc ab a', groups: undefined ]
console.log(str3.match(/AB/ig)); // [ 'ab', 'ab', 'ab', 'ab' ]
console.log(str3.match(/^AB/igm)); // ['ab'], 두번째 줄의 abc에서 ab를 탐색

// 전방 탐색 (Lookahead)
// X(?=Y) : X 뒤에 Y가 존재하는 경우에만 X를 매칭, Y는 포함되지 않음
const rate = 'discount rate is 20%, tax is 10% in 2025';
console.log(rate.match(/\d+(?=%)/g)); // ['20', '10']






















