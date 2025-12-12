// 실습 : 말 달리자!

// 경주시작 버튼을 누르면 경주가 시작되고 소요시간이 증가
// 스페이스바를 누르면 경주마가 10px씩 우측으로 이동
// 우측 결승라인에 도달하면 경주소요시간을 경주시작 버튼 우측에 표시
// 다시시작 버튼으로 경주 다시 시작

const img = document.querySelector('#img');
const timeEl = document.querySelector('#time');
const startBtn = document.querySelector('#start');

const MOVING_SPEED = 10; // 말 속도 px
let position = 0; // 말의 현재 X좌표 px
let elapsedTime = 0; // 게임 소요 시간 ms
let timerId = null; // setInterval
let isRacing = false; // 경주 중 여부

// 경주 시작
startBtn.addEventListener('click', () => {
    if (timerId !== null) return;
    isRacing = true;
    timerId = setInterval(() => {
        elapsedTime += 0.05;
        timeEl.textContent = elapsedTime.toFixed(2) + '초';
    }, 50);
    startBtn.disabled = true;
});

// 스페이스키 이벤트 처리
document.addEventListener('keyup', e => {
    if (e.code === 'Space') e.preventDefault();
    if (!isRacing) return;
    if (e.code !== 'Space') return;
    moveHorse();
    checkFinish();
});

// 말 이동
function moveHorse() {
    position += MOVING_SPEED;
    img.style.left = position + 'px';
}

// 도착 체크
function checkFinish() {
    const horseRect = img.getBoundingClientRect();
    const finishRect = document.querySelector('#finish').getBoundingClientRect();
    if (horseRect.right >= finishRect.left + 35) finishRace();
}

// 경주 종료
function finishRace() {
    if (!isRacing) return;
    clearInterval(timerId);
    timerId = null;
    isRacing = false;
    timeEl.innerHTML = `경주완료 (${elapsedTime.toFixed(2)}초)&nbsp;<button id="resetBtn">다시시작</button>`;
    document.querySelector('#resetBtn').addEventListener('click', resetRace);
}

// 경주 초기화
function resetRace() {
    clearInterval(timerId);
    timerId = null;
    position = 0;
    elapsedTime = 0;
    isRacing = false;
    img.style.left = '0px';
    timeEl.textContent = '0.00초';
    startBtn.disabled = false;    
}
