// todo2.ts
// TODO - 패키지 버젼

interface Todo2 {
    id: number;
    title: string;
    completed: boolean;
}

let todos2: Todo2[] = [
    {id: 1, title: '아침먹기', completed: true},
    {id: 2, title: 'TS공부', completed: true},
    {id: 3, title: '점심먹기', completed: false}
];

// 패키지로 사용할 객체 생성
const todoPKG = {

    getTodos2: function(): Todo2[] {
        return todos2;
    },

    getTodo2: function(paramId: number): Todo2 {
        return (todos2.filter(todo2 => todo2.id===paramId))[0];
    },

    registTodo2: function(paramTodo: Todo2): void {
        if (!todoPKG.isExistedTodo2(paramTodo.id)) {
            todos2.push(paramTodo);
        }
    },

    updateTodo2: function(paramTodo: Todo2): Todo2[] {
    const id = paramTodo.id;
    if (todoPKG.isExistedTodo2(id)) {
            return todos2 = [...todoPKG.deleteTodo2(id), paramTodo];
        } else {
            return todos2;
        }
    },

    deleteTodo2: function(paramId: number): Todo2[] {
    if (todoPKG.isExistedTodo2(paramId)) {
            return todos2 = todos2.filter(todo2 => todo2.id!=paramId);
        } else {
            return todos2;
        }
    },

    isExistedTodo2: function(paramId: number): boolean {
        return todos2.some(todo2 => todo2.id===paramId);
    }

};

// 목록
console.log(todoPKG.getTodos2());

// 등록
todoPKG.registTodo2({id: 4, title: '저녁먹기', completed: false});
console.log(todoPKG.getTodos2());

// 수정
console.log(todoPKG.updateTodo2({id: 4, title: '야식먹기', completed: true}));

// 조회
console.log(todoPKG.getTodo2(4));

// 삭제
console.log(todoPKG.deleteTodo2(4));


































