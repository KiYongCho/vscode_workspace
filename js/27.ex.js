// 정규표현식 실습

// 1. 문자열에서 모든 숫자를 찾아 배열로 반환
// 결과 : ['2025','1','15']
const str1 = '오늘은 2025년 1월 15일 입니다.';
console.log(str1.match(/\d+/g));

// 2. 주어진 문자열에서 모든 공백을 제거
// 결과 : HelloWorld!
const str2 = "Hello   World!";
console.log(str2.replace(/\s+/g, ''));

// 3. 문자열에 'JavaScript'라는 단어가 포함되어 있는지 확인
// 결과 : true
const sentence = "I am learning JavaScript and it's fun!";
console.log(/JavaScript/.test(sentence));

// 4. 주어진 문자열이 올바른 전화번호 형식인지 확인
// 결과 : true
const phone = "010-1234-5678";
console.log(/^\d{3}-\d{4}-\d{4}$/.test(phone));

// 5. 문자열에서 모든 URL을 추출
// 결과 : ['https://google.com', 'http://example.com']
const text1 = "Visit https://google.com and http://example.com!";
console.log(text1.match(/https?:\/\/[^\s|!]+/g));

// 6. 주어진 문자열에서 숫자와 알파벳만 추출
// 결과 : 'Hello123World456'
const str3 = "Hello123!@#World456";
console.log(str3.replace(/[^a-zA-Z0-9]/g, ''));

// 7. 문자열에서 소수점이 두 자리인 실수를 모두 추출하세요.
// 결과 : ['12.50', '100.99']
const text2 = "The prices are 12.50, 100.99, and 3.5 dollars.";
console.log(text2.match(/\d+\.\d{2}/g));

// 8. 숫자 뒤에 '원'이 오는 경우만 추출
// 결과 : ['1000', '3000']
const t1 = '1000원, 2000달러, 3000원, 400엔';
console.log(t1.match(/\d+(?=원)/g));

// 9. 한글 이름들만 추출하여 배열 출력 (한글이름은 2글자~4글자로 제한)
// 결과 : ['김철수', '이은', '최고길동']
// 한글 한 문자 : [가-힣]
const t2 = ['김철수', '이은', '박', '123홍길동', '최고길동'];
console.log(t2.filter(ele => /^[가-힣]{2,4}$/.test(ele)));

// 10. 영문자와 숫자를 모두 포함하고 6글자 이상인 비밀번호들만 추출하여 배열 출력
// 결과 : ['abc123', 'abcDEF789']
// (?=.*[A-Za-z]) : 영문자가 1개 이상 있어야 함
// (?=.*\d) : 숫자가 1개 이상 있어야 함
const password = ['abc123', 'password', 'abcDEF789', '123456', 'abc!'];
console.log(password.filter(ele => /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(ele)));


// 실습 extra

// 1. 이메일 주소 패턴
//    - @앞에는 영문자로 시작하고 숫자를 포함할 수 있고, 특수기호나 공백은 불가한 12글자 이내 문자
//    - @뒤에는 영문자나 숫자로 시작하고, 특수기호나 공백은 불가한 12글자 이내 문자
//    - .뒤에는 com이나 kr이나 co.kr만 오도록
const email1 = 'abc123@abc.com'; // o
const email2 = 'abc_@abc.com'; // x
const email3 = 'abc123@abc.edu'; // x

const emailRegex = /^[A-Za-z][A-Za-z0-9]{0,11}@[A-Za-z0-9][A-Za-z0-9]{0,11}\.(com|kr|co\.kr)$/;
console.log(emailRegex.test(email1));
console.log(emailRegex.test(email2));
console.log(emailRegex.test(email3));


// 2. 아이피 주소 패턴
//    - ex) 127.0.0.1
//    - 0~255 중의 숫자.0~255 중의 숫자.0~255 중의 숫자.0~255 중의 숫자
const ip1 = '255.255.255.255'; // o
const ip2 = '258.255.255.255'; // x
const ip3 = '255.355.255.255'; // x

const ipRegex = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
console.log(ipRegex.test(ip1));
console.log(ipRegex.test(ip2));
console.log(ipRegex.test(ip3));























