/*
    웹스토리지 (Web Storage)
      - 보안에 중요하지 않은 경량의 데이터를 저장 및 관리하기 위해 웹브라우져가 관리하는 로컬 저장소
      - 1. localStorage
            문자열로된 키/값의 쌍을 저장 및 관리, 브라우져 종료시에도 데이터 유지
      - 2. sessionStorage
            문자열로된 키/값의 쌍을 저장 및 관리, 브라우져의 탭에서만 데이터 유지
      - 메소드
        setItem(키, 값) : 키/값 쌍을 저장
        getItem(키) : 키에 해당하는 값을 획득
        removeItem(키) : 키에 해당하는 키/값 쌍을 제거
*/

// 윈도우가 로딩되면 loadTodos 호출
window.onload = function() {
    loadTodos();
};

// renderTodos 호출
function loadTodos() {
    renderTodos();
}

// 목록 렌더링
function renderTodos() {

    const todoList = document.querySelector('#todoList'); // ul
    todoList.innerHTML = ''; // ul 컨텐츠 초기화

    const todos = getTodos(); // 목록 가져오기

    todos.forEach((todo, idx) => {
        const li = document.createElement('li'); // li 생성
        li.textContent = todo; // li의 textContent
        const delBtn = document.createElement('button'); // 삭제 버튼 생성
        delBtn.textContent = '삭제'; // 버튼의 텍스트
        // 버튼 클릭이벤트리스너 추가
        delBtn.addEventListener('click', e => {
            deleteTodo(idx); // 인덱스에 해당하는 todo 삭제
        });
        li.appendChild(delBtn); // li에 삭제버튼 추가
        todoList.appendChild(li);
    });

}

// 로컬스토리지에서 할일목록 가져오기
function getTodos() {
    const todos = localStorage.getItem('todos'); // todos키에 해당하는 값
    return todos ? JSON.parse(todos) : []; // 있으면 JS객체로 리턴, 없으면 [] 리턴
}

// todo 추가
function addTodo() {
    const txt = document.querySelector('#txt'); // 입력 상자
    const newTodo = txt.value.trim(); // 입력한 텍스트
    if (newTodo=='') return; // 입력한게 없으면 리턴
    let todos = getTodos(); // 목록 획득
    todos.push(newTodo); // 배열에 추가
    localStorage.setItem('todos', JSON.stringify(todos)); // todos키에 할일목록문자열 저장
    txt.value = ''; // 입력 상자 내용 초기화
    renderTodos(); // 화면에 렌더링
}

// todo 제거
function deleteTodo(idx) {
    let todos = getTodos(); // 할일 목록 획득
    todos.splice(idx, 1); // 인덱스에 해당하는 todo 제거
    localStorage.setItem('todos', JSON.stringify(todos)); // 목록 갱신
    renderTodos(); // 화면에 렌더링
}

// 버튼 클릭시 addTodo 호출
document.querySelector('#btn').addEventListener('click', e => {
    addTodo();
});



