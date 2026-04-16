// todo4.ts
// TODO - 원격서버 활용 + 패키지 버젼

interface Todo4 {
    id: number;
    title: string;
    completed: boolean;
}

let todos4: Todo4[] = [];

async function fetchJson2(): Promise<Todo4[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Error: ' + response.statusText);
    } else {
        return await response.json();
    }
}

fetchJson2()
.then(
    async function(response) {
        todos4 = await response;
        todos4 = todos4.map(
            todo4 => todo4 = {'id': todo4.id, 'title': todo4.title, 'completed': todo4.completed}
        ).splice(0, 5);
    }
)
.then(
    () => {
        console.log(todo4PKG.getTodos4());
        todo4PKG.registTodo4({'id': 6, 'title': 'title6', 'completed': false});
        console.log(todo4PKG.getTodos4());
        console.log(todo4PKG.getTodo4(6));
        todo4PKG.updateTodo4({'id': 6, 'title': 'update_title6', 'completed': true});
        console.log(todo4PKG.getTodos4());
        todo4PKG.deleteTodo4(6);
        console.log(todo4PKG.getTodos4());
    }
);

const todo4PKG = {

    getTodos4: function(): Todo4[] {
        return todos4;
    },

    getTodo4: function(paramId: number): Todo4 {
        return (todos4.filter(todo4 => todo4.id===paramId))[0];
    },

    registTodo4: function(paramTodo: Todo4): void {
        if (!todo4PKG.isExistedTodo4(paramTodo.id)) {
            todos4.push(paramTodo);
        }
    },

    updateTodo4: function(paramTodo: Todo4): Todo4[] {
        const id = paramTodo.id;
        if (todo4PKG.isExistedTodo4(id)) {
            return todos4 = [...todo4PKG.deleteTodo4(id), paramTodo];
        } else {
            return todos4;
        }
    },

    deleteTodo4: function(paramId: number): Todo4[] {
    if (todo4PKG.isExistedTodo4(paramId)) {
            return todos4 = todos4.filter(todo4 => todo4.id!=paramId);
        } else {
            return todos4;
        }
    },

    isExistedTodo4: function(paramId: number): boolean {
        return todos4.some(todo4 => todo4.id===paramId);
    }

};