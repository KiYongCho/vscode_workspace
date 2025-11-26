// 윈도우 로딩이 끝나면 p라는 아이디를 가진 요소의 컨텐츠영역에
// Hello Javascript!라는 문자열을 넣어줌
window.onload = function() {
    document.querySelector('#p').innerHTML = 'Hello Javascript!';
    console.log('Javascript를 배웁니다!'); // 자바스크립트 콘솔에 문자열을 출력
};