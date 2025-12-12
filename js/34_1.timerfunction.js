/*
    Javascript 비동기 timer함수

    1. setTimeout(콜백함수, 밀리초) : 밀리초 후에 콜백함수 수행

    2. clearTimeout(타임아웃변수) : 타임아웃 제거

    3. setInterval(콜백함수, 밀리초) : 밀리초 간격으로 콜백함수 수행

    4. clearInterval(인터벌변수) : 인터벌 제거
*/

// setTimeout
document.querySelector('#timeoutBtn').addEventListener('click', e => {
    setTimeout(()=> {
        alert('3초가 지났습니다!');
    }, 3000);
});

// clearTimeout
let timeoutId = null;
document.querySelector('#reserveBtn').addEventListener('click', e => {
    timeoutId = setTimeout(() => {
        alert('5초 후 실행되었습니다!');
    }, 5000);
    alert('5초 후 실행이 예약되었습니다!');
});
document.querySelector('#cancelBtn').addEventListener('click', e => {
    clearTimeout(timeoutId);
    alert('예약이 취소되었습니다!');
});

// setInterval / clearInterval
let intervalId = null;
let count = 0;

document.querySelector('#startIntervalBtn').addEventListener('click', () => {
    if (intervalId != null) return; // 중복 실행 방지
    intervalId = setInterval(() => {
        document.querySelector('#counter').textContent = ++count;
    }, 1000);
})

document.querySelector('#stopIntervalBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

// 디지털 시계
setInterval(() => {
    const now = new Date(); // 현재 날짜/시간
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.querySelector('#clock').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);













