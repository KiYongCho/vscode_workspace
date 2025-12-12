/*
    이벤트 전파 (event propagation) : 발생한 이벤트가 상위요소 > 타겟요소 > 상위요소로 전파
      - Capturing (1) : 상위요소에서 타겟요소로 이벤트 전파되는 단계
      - Targetting (2) : 타겟요소에 이벤트가 전파되는 단계
      - Bubbling (3) : 타겟요소에서 상위요소로 이벤트가 전파되는 단계
*/

// const body = document.querySelector('body');
// body.addEventListener('click', e => {
//     console.log(`이벤트 단계 : ${e.eventPhase}`);
//     console.log(`이벤트 타겟 : ${e.target}`);
//     console.log(`이벤트 ,현재타겟 : ${e.currentTarget}`);
// }, true); // true : 캡쳐링단계에서 이벤트 처리할지 여부

// const ul = document.querySelector('#fruits');
// ul.addEventListener('click', e => {
//     console.log(`이벤트 단계 : ${e.eventPhase}`);
//     console.log(`이벤트 타겟 : ${e.target}`);
//     console.log(`이벤트 ,현재타겟 : ${e.currentTarget}`);
// }, true); // true : 캡쳐링단계에서 이벤트 처리할지 여부

// const apple = document.querySelector('#apple');
// apple.addEventListener('click', e => {
//     console.log(`이벤트 단계 : ${e.eventPhase}`);
//     console.log(`이벤트 타겟 : ${e.target}`);
//     console.log(`이벤트 ,현재타겟 : ${e.currentTarget}`);
// }, true); // true : 캡쳐링단계에서 이벤트 처리할지 여부

/*
    이벤트 위임 (event delegation)
      - 하위 요소에서 발생한 이벤트를 하위 요소가 아닌 상위 요소에서 처리
      - 이벤트 위임을 통해 이벤트 처리를 일원화/단순화 시킬 수 있음
      - 예) ul과 li를 이용해 네비게이션 메뉴를 생성할때 ul에 이벤트리스너를 등록해서
             li에서 발생한 이벤트를 처리
*/

const ul = document.querySelector('#fruits');
ul.addEventListener('click', e => { // li의 상위요소인 ul을 클릭하면
    if (e.target.matches('li')) { // 이벤트타겟이 li인지 확인
        // 모든 ul의 자식요소들에 대해 active 클래스 제거
        [...ul.children].forEach(li => li.classList.remove('active'));
        // 이벤트타겟인 li에 active 클래스 추가
        e.target.classList.add('active');
    }
});

/*
    이벤트핸들러 내에서의 this
      - 이벤트핸들러가 일반함수인 경우 this는 이벤트 타겟 객체
      - 이벤트핸들러가 화살표함수인 경우 this는 this의 상위스코프 객체
      - 이벤트핸들러가 클래스의 메소드인 경우에는 this를 bind메소드로 바인딩해야 함
        (클래스 내에서의 this는 생성될 객체이므로)
*/
const button = document.querySelector('.btn');

button.addEventListener('click', function() { // 이벤트핸들러가 일반함수
    console.log(this); // 이벤트 타겟 객체
});

button.addEventListener('click', () => { // 이벤트핸들러가 화살표함수
    console.log(this); // 화살표함수는 스코프를 가지지 않으므로 상위스코프의 window 전역객체가 this
});

class Car {
    constructor(name) {
        this.name = name;
        this.button = document.querySelector('.btn');
        this.button.addEventListener('click', this.print.bind(this));
    }
    print() {
        console.log('클래스의 메소드내에서의 this');
        console.log(this.name);
    }
}
const bmw = new Car('BMW');


// 커스텀 이벤트 (custom event) : 사용자정의 이벤트

// CustomEvent 생성자함수로 커스텀이벤트 객체 생성
const customEvent = new CustomEvent('customClick', { // 이벤트명, 객체
    detail: {
        message: '내가 만든 이벤트'
    }
});
const customBtnDispatch = document.querySelector('#customBtnDispatch');
const customBtn = document.querySelector('#customBtn');

// 이벤트 수동 트리거링 : 커스텀 이벤트의 경우는 수동으로 발생시켜 줘야 함
customBtnDispatch.addEventListener('click', e => {
    customBtn.dispatchEvent(customEvent); // 수동으로 이벤트 발생시킴
});

// customClick 이벤트가 발생하면 메세지를 출력
customBtn.addEventListener('customClick', e => {
    alert(e.detail.message);
});

// 실습 : 커스텀이벤트 생성 및 트리거링
// 1번 버튼을 클릭하면 2번 버튼에 clickSecond라는 커스텀이벤트가 발생해서
// 2번 버튼의 컨텐츠를 읽어서 콘솔에 출력
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const clickSecond = new CustomEvent('clickSecond', {
    detail: {
        message: btn2.textContent
    }
});

btn1.addEventListener('click', e => {
    btn2.dispatchEvent(clickSecond);
});

btn2.addEventListener('clickSecond', e => {
    console.log(e.detail.message);
});

















