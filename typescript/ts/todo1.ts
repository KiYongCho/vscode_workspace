// todo1.ts
// TODO - 전역함수 버젼

// Todo 인터페이스
// 객체의 프라퍼티명과 프라퍼티타입을 설계
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Todo 인터페이스 타입의 객체 3개를 가진 배열
let todos: Todo[] = [
    {id: 1, title: '아침먹기', completed: true},
    {id: 2, title: 'TS공부', completed: true},
    {id: 3, title: '점심먹기', completed: false}
];

// 목록 기능
function getTodos(): Todo[] {
    return todos;
}

// 조회 기능
function getTodo(paramId: number): Todo {
    return (todos.filter(todo => todo.id===paramId))[0];
}

// 등록 기능
function registTodo(paramTodo: Todo): void {
    if (!isExistedTodo(paramTodo.id)) { // id에 해당하는 Todo가 없다면
        todos.push(paramTodo); // 배열 맨 뒤에 추가
    }
}

// 수정 기능
function updateTodo(paramTodo: Todo): Todo[] {
    const id = paramTodo.id;
    if (isExistedTodo(id)) { // id에 해당하는 Todo가 있다면
        // 배열에서 id에 해당하는 Todo를 삭제하고
        // 파라미터로 받은 Todo를 배열에 추가해서 배열을 리턴
        return todos = [...deleteTodo(id), paramTodo];
    } else {
        return todos;
    }
}

// 삭제 기능
function deleteTodo(paramId: number): Todo[] {
    if (isExistedTodo(paramId)) { // id에 해당하는 Todo가 있다면
        // 배열에서 id가 같지 않은 Todo들의 배열을 리턴 
        return todos = todos.filter(todo => todo.id!=paramId);
    } else {
        return todos;
    }
}

// Todo 존재여부 확인 기능
function isExistedTodo(paramId: number): boolean {
    return todos.some(todo => todo.id===paramId);
}

// 목록
console.log(getTodos());

// 등록
registTodo({id: 4, title: '저녁먹기', completed: false});
console.log(getTodos());

// 수정
console.log(updateTodo({id: 4, title: '야식먹기', completed: true}));

// 조회
console.log(getTodo(4));

// 삭제
console.log(deleteTodo(4));





























