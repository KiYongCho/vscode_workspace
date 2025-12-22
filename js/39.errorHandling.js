// 에러 처리

try { // 에러 발생 가능한 코드의 블럭
    // v변수를 선언하기 전에 사용 (에러)
    v = 10;
    let v;
} catch (err) { // 에러 발생시 처리할 코드의 블럭
    console.log(`에러메세지 : ${err.message}`);
} finally { // 에러 발생 여부와 관계없이 처리할 코드의 블럭 (옵션)
    console.log('에러 발생 여부와 관계없이 처리할 코드');
}

// 이 코드는 에러 처리를 정상적으로 했을때 수행 됨
console.log('정상적으로 에러처리 후에 수행되는 코드');

// 주요 에러
// 3***3 // SyntaxError (문법 에러)
// func(); // ReferenceError (참조 에러)
// null.func(); // TypeError (타입 에러)
// new Array(-1); // RangeError (범위 에러)
// decodeURIComponent('%'); // URIError (URI 에러)

// URI 인코딩 / 디코딩
// 인터넷 주소창에 한글이나 특수기호를 입력 => 인코딩이 필요
// 인코딩(encoding) : 어떤 코드를 다른 코드로 변환
// 디코딩(decoding) : 변환된 코드를 원래 코드로 변환
// encodeURIComponent 함수 : URI를 인코딩하는 함수
// decodeURIComponent 함수 : URI를 디코딩하는 함수

// 특수기호와 한글이 포함된 URI
const uri = 'https://www.google.com?name=홍길동';

// URI를 인코딩
const encodedURI = encodeURIComponent(uri);
// https%3A%2F%2Fwww.google.com%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(encodedURI);

// URI를 디코딩
const decodedURI = decodeURIComponent(encodedURI);
// https://www.google.com?name=홍길동
console.log(decodedURI);

// 결론 : GET방식으로 특수기호 또는 한글을 데이터를 보내려면 반드시 인코딩을 해야함
//          인코딩된 데이터를 받는 쪽에서는 반드시 디코딩을 해야함


// 사용자정의 에러 (User Defined Error)
//   - Error 생성자 함수를 사용해 사용자가 만든 에러
//   - 상황에 따른 로직 처리를 사용자정의 에러를 활용하면 if문도 많이 줄고
//     코드의 가독성도 좋아지므로 적극적으로 활용하면 좋다

// 사용자 정의 에러 생성
const myerror = new Error('내가 만든 에러');

try {
    const age = 15;
    if (age<19) throw myerror; // 상황에 따라 에러를 발생시킴
} catch (err) { // 발생된 에러를 처리
    console.log(err.message);
}

// 사용자 정의 에러 활용 예
const under19Error = new Error('19세 이하 관람불가!');
const under17Error = new Error('17세 이하 관람불가!');
const under15Error = new Error('15세 이하 관람불가!');

try {
    const age = Math.floor(Math.random()*16) + 10; // 10 ~ 25 랜덤 정수
    console.log(`age => ${age}`);
    if (age<15) throw under15Error;
    if (age<17) throw under17Error;
    if (age<19) throw under19Error;
} catch (err) {
    console.log(err.message);
}

// 에러 전파
const firstFunc = function() {
    try {
        secondFunc();
    } catch (err) {
        console.log('firstFunc에서 에러 처리함!');
    }
};
const secondFunc = function() {
    // try {
        thirdFunc();
    // } catch (err) {
        // console.log('secondFunc에서 에러 처리함!');
    // }
}
// 에러를 직접 처리 하거나 호출한 상위 함수에서 처리하거나
const thirdFunc = function() {
    // try {
        v = 10;
        let v;
    // } catch (err) {
        // console.log('thirdFunc에서 에러 처리함!');
    // }
}
firstFunc();














































