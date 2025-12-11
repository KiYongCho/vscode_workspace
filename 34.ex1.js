// 이벤트 실습 1 : 숫자카운터
//   - 증가 버튼 클릭시 1씩 증가
//   - 감소 버튼 클릭시 1씩 감소
//   - 텍스트 상자에 직접 입력 못하도록

const counter = document.querySelector('#counter');

document.querySelector('#increase').addEventListener('click', e => {
    counter.value = +counter.value + 1; // 숫자로 변환 후 1 증가
});

document.querySelector('#decrease').addEventListener('click', e => {
    counter.value = +counter.value - 1;  // 숫자로 변환 후 1 감소
});

// 텍스트 상자에 focus이벤트 발생하면 focus를 없앰(blur)
counter.addEventListener('focus', e => {
    counter.blur();
});



