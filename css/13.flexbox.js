// 문서내에서 flex-container라는 클래스를 가진 요소들 중 첫번째 요소
const container = document.querySelectorAll('.flex-container')[0];

// 문서내에서 reset이라는 아이디를 가진 요소를 클릭하면 페이지를 새로고침
document.querySelector('#reset').addEventListener('click', () => {
    location.reload();
});

// 문서내에서 모든 button 요소에 대해 클릭하면
// container의 스타일을 클릭된 버튼의 id속성의 값으로 변경
// event.target : 클릭된 버튼 요소
// event.target.parentNode : 클릭된 버튼 요소를 감싸고 있는 p 요소
document.querySelectorAll('button').forEach(
    btn => btn.addEventListener('click', event => {
        container.style[event.target.parentNode.id] = event.target.id;
    })
);