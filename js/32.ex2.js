// DOM 실습 2 : 동적 아이템 구현

// 1. 추가버튼 누르면 li 생성
// 2. 삭제버튼 누르면 마지막 li 제거
// 3. 초기화 버튼 누르면 모든 li 제거
// 4. 텍스트 상자에 번호 넣고 번호선택 삭제 버튼 누르면 해당 li 제거 (순서는 1부터)

const list = document.querySelector('#list'); // ul
const addBtn = document.querySelector('#add'); 
const removeBtn = document.querySelector('#remove'); 
const initBtn = document.querySelector('#init'); 
const selRemoveBtn = document.querySelector('#selRemove'); 

let count = 1;

// 1. 추가버튼 누르면 li 생성
addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.setAttribute('data-order', count);
    li.textContent = count++;
    list.appendChild(li);
});

// 2. 삭제버튼 누르면 마지막 li 제거
removeBtn.addEventListener('click', () => {
    if (count>1) {
        list.removeChild(list.lastElementChild); // ul의 마지막 자식 제거
        count--; // 카운트 1 감소
    }
});

// 3. 초기화 버튼 누르면 모든 li 제거
initBtn.addEventListener('click', () => {
    list.innerHTML = ''; // ul의 컨텐츠 초기화
    count = 1; // 카운트 1로
});

// 4. 텍스트 상자에 번호 넣고 번호선택 삭제 버튼 누르면 해당 li 제거 (순서는 1부터)
selRemoveBtn.addEventListener('click', () => {
    // 텍스트 상자에 입력한 번호에 해당하는 li를 탐색
    // [...document.querySelectorAll('li')] : 문서내의 모든 li들을 가진 배열
    // find 고차함수를 통해서 li중에서 data-order 속성의 값이 입력한 값과 동일한 li를 탐색
    const li = [...document.querySelectorAll('li')].find(
        ele => ele.dataset.order==txt.value
    );
    // 탐색한 li가 존재한다면 list에서 삭제
    if (li) list.removeChild(li);
    // list내에 자식 요소가 없다면 count를 1로
    if (list.childElementCount==0) count = 1;
});