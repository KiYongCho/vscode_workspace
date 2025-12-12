// 실습 : 디지털 시계

// '작동' 버튼 클릭하면 1초씩 디지털 시계 작동
// '중지' 버튼 클릭하면 디지털 시계 중지
// clock이라는 id를 가진 p요소내에 아래 형식으로 날짜/시간 출력
// 형식 : XXXX년 XX월 XX일 X요일 오전/오후 XX시 XX분 XX초

const clock = document.querySelector('#clock');
const yoilArr = ['일', '월', '화', '수', '목', '금', '토'];
let timer = null;

document.querySelector('#start').addEventListener('click', e => {
    if (timer != null) return; // 중복 실행 방지
    timer = setInterval(e => {
        const nowDate = new Date();
        const hours = nowDate.getHours();
        let nowStr = `
            ${nowDate.getFullYear()}년&nbsp;
            ${(nowDate.getMonth()+1).toString().padStart(2, '0')}월&nbsp;
            ${nowDate.getDate().toString().padStart(2, '0')}일&nbsp;
            ${yoilArr[nowDate.getDay()]}요일&nbsp;
            ${hours>=12 ? "오후" : "오전"}&nbsp;
            ${hours.toString().padStart(2, '0')}시&nbsp;
            ${nowDate.getMinutes().toString().padStart(2, '0')}분&nbsp;
            ${nowDate.getSeconds().toString().padStart(2, '0')}초&nbsp;`;
            clock.innerHTML = nowStr;
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', e => {
    clearInterval(timer);
    timer = null;
});