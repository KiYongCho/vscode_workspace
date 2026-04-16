// todo3.ts
// TODO - 원격서버 활용 버젼

interface Todo3 {
    id: number;
    title: string;
    completed: boolean;
}

let todos3: Todo3[] = [];

// 비동기 호출 후 응답 획득
async function fetchJson(): Promise<Todo3[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // 응답 실패 시
    if (!response.ok) {
        throw new Error('Error: ' + response.statusText);
     // 응답 성공 시
    } else {
        return await response.json();
    }
}

fetchJson()
.then(
    async function(response) {
        todos3 = await response;
        todos3 = todos3.map(
            todo3 => todo3 = {'id': todo3.id, 'title': todo3.title, 'completed': todo3.completed}
        ).splice(0, 5); // 5개만
    }
)
.then(
    () => {
        console.log(getTodos3());
        registTodo3({'id': 6, 'title': 'title6', 'completed': false});
        console.log(getTodos3());
        console.log(getTodo3(6));
        updateTodo3({'id': 6, 'title': 'update_title6', 'completed': true});
        console.log(getTodos3());
        deleteTodo3(6);
        console.log(getTodos3());
    }
);

function getTodos3(): Todo3[] {
    return todos3;
}

function getTodo3(paramId: number): Todo3 {
    return (todos3.filter(todo3 => todo3.id===paramId))[0];
}

function registTodo3(paramTodo: Todo3): void {
    if (!isExistedTodo3(paramTodo.id)) {
        todos3.push(paramTodo);
    }
}

function updateTodo3(paramTodo: Todo3): Todo3[] {
    const id = paramTodo.id;
    if (isExistedTodo3(id)) {
        return todos3 = [...deleteTodo3(id), paramTodo];
    } else {
        return todos3;
    }
}

function deleteTodo3(paramId: number): Todo3[] {
    if (isExistedTodo3(paramId)) {
        return todos3 = todos3.filter(todo3 => todo3.id!=paramId);
    } else {
        return todos3;
    }
}

function isExistedTodo3(paramId: number): boolean {
    return todos3.some(todo3 => todo3.id===paramId);
}


































