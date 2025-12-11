// 요소 탐색
const button = document.querySelector('#btn');
const clickOutput = document.querySelector('#clickOutput');
const textInput = document.querySelector('#textInput');
const textOutput = document.querySelector('#textOutput');
const keyInput = document.querySelector('#keyInput');
const keyOutput = document.querySelector('#keyOutput');
const mouseArea = document.querySelector('#mouseArea');
const eventInfoBtn = document.querySelector('#eventInfoBtn');
const eventInfoOutput = document.querySelector('#eventInfoOutput');
const alertBtn = document.querySelector('#alertBtn');
const alertBtn2 = document.querySelector('#alertBtn2');

// 1. 클릭 이벤트
button.addEventListener('click', e => {
    clickOutput.textContent = '버튼 상태 : 클릭됨';
});

// 2. 입력 이벤트
textInput.addEventListener('input', e => {
    textOutput.textContent = `입력된 텍스트 : ${e.target.value}`;
});

// 3. 키보드 이벤트
keyInput.addEventListener('keyup', e => {
    keyOutput.textContent = `입력된 키 : ${e.key} ${e.keyCode}`; // 키, 아스키코드값
});

// 4. 마우스 이벤트
mouseArea.addEventListener('mousemove', e=> {
    mouseOutput.textContent = `${e.clientX}, ${e.clientY}`;
});

mouseArea.addEventListener('mouseenter', e=> {
    mouseOutput.textContent = `마우스 커서가 영역에 들어옴!`;
});

mouseArea.addEventListener('mouseleave', e=> {
    mouseOutput.textContent = `마우스 커서가 영역에서 벗어남!`;
});

// 5. 이벤트객체 프라퍼티
eventInfoBtn.addEventListener('click', e => {
    eventInfoOutput.innerHTML = `
        이벤트 객체 : ${e}<br>
        이벤트 타입 : ${e.type}<br>
        이벤트 타겟 : ${e.target}<br>
        이벤트 현재타겟 : ${e.currentTarget}<br>
        이벤트 버블링 여부 : ${e.bubbles}<br>
        이벤트 취소가능 여부 : ${e.cancelable}<br>
        이벤트 단계 : ${e.eventPhase}<br>
    `;
});

// 6. 이벤트핸들러 제거
const handleClick = () => {
    alert('handleClick 누르셨군요!');
};
const handleClick2 = () => {
    alert('handleClick2 누르셨군요!');
};
alertBtn.addEventListener('click', handleClick);
alertBtn.addEventListener('click', handleClick2);
alertBtn2.addEventListener('click', () => {
    alertBtn.removeEventListener('click', handleClick);
});

































