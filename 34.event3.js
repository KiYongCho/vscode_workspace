// 기본 이벤트 (default event)
//   - 요소에 기본적으로 발생하는 이벤트
//   - 예) a요소를 클릭하면 href에 정의한 URL로 이동
//          input type='submit'요소를 클릭하면 폼의 데이터가 서버에 전송
//   - 상황에 따라서는 기본 이벤트를 중지시켜야 할 경우가 있음
//   - 예) 폼요소를 submit하기 전에 폼요소의 입력요소들의 값을 검증(validation)한 후
//           값들이 유효하다면 submit 처리
//   - 기본 이벤트 방지 : 이벤트객체.preventDefault()

const a = document.querySelector('a');
a.addEventListener('click', e => {
    e.preventDefault(); // 기본 이벤트 방지
    location.href = 'https://www.naver.com'; // 네이버로 이동
});

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault(); // 기본 이벤트 방지
    const nameVal = document.querySelector('#name').value;
    if (!nameVal) { // 이름을 입력하지 않았다면
        alert('이름은 필수입력입니다!');
        return false;
    } else {
        alert(`${nameVal}님 환영해요!`);
        form.submit();
    }
});


/*
    이벤트 전파 중지 (event propagation stop)
      - 버블링단계로 이벤트객체가 전달되는 것을 중지
      - 캡춰링단계에서 이벤트 처리를 하지 않으려면?
        => 이벤트핸들러의 세번째 인자를 false
      - 버블링단계에서 이벤트 처리를 하지 않으려면?
        => 이벤트 전파를 중지함 => e.stopPropagation()
*/
const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const btn = document.querySelector('#btn');

outer.addEventListener('click', e => {
    console.log('outer 클릭됨! (false)');
    console.log(e.eventPhase);
});
inner.addEventListener('click', e => {
    console.log('inner 클릭됨! (false)');
    console.log(e.eventPhase);
});
btn.addEventListener('click', e => {
    e.stopPropagation(); // 이벤트 전파 중지, 버블링단계로 이벤트객체 전달 안함
    console.log('btn 클릭됨! (false)');
    console.log(e.eventPhase);
});

outer.addEventListener('click', e => {
    console.log('outer 클릭됨! (true)');
    console.log(e.eventPhase);
}, true); // 캡춰링 단계에서 이벤트 처리함
inner.addEventListener('click', e => {
    console.log('inner 클릭됨! (true)');
    console.log(e.eventPhase);
}, true);
btn.addEventListener('click', e => {
    console.log('btn 클릭됨! (true)');
    console.log(e.eventPhase);
}, true);
