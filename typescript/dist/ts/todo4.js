"use strict";
// todo4.ts
// TODO - 원격서버 활용 + 패키지 버젼
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let todos4 = [];
function fetchJson2() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Error: ' + response.statusText);
        }
        else {
            return yield response.json();
        }
    });
}
fetchJson2()
    .then(function (response) {
    return __awaiter(this, void 0, void 0, function* () {
        todos4 = yield response;
        todos4 = todos4.map(todo4 => todo4 = { 'id': todo4.id, 'title': todo4.title, 'completed': todo4.completed }).splice(0, 5);
    });
})
    .then(() => {
    console.log(todo4PKG.getTodos4());
    todo4PKG.registTodo4({ 'id': 6, 'title': 'title6', 'completed': false });
    console.log(todo4PKG.getTodos4());
    console.log(todo4PKG.getTodo4(6));
    todo4PKG.updateTodo4({ 'id': 6, 'title': 'update_title6', 'completed': true });
    console.log(todo4PKG.getTodos4());
    todo4PKG.deleteTodo4(6);
    console.log(todo4PKG.getTodos4());
});
const todo4PKG = {
    getTodos4: function () {
        return todos4;
    },
    getTodo4: function (paramId) {
        return (todos4.filter(todo4 => todo4.id === paramId))[0];
    },
    registTodo4: function (paramTodo) {
        if (!todo4PKG.isExistedTodo4(paramTodo.id)) {
            todos4.push(paramTodo);
        }
    },
    updateTodo4: function (paramTodo) {
        const id = paramTodo.id;
        if (todo4PKG.isExistedTodo4(id)) {
            return todos4 = [...todo4PKG.deleteTodo4(id), paramTodo];
        }
        else {
            return todos4;
        }
    },
    deleteTodo4: function (paramId) {
        if (todo4PKG.isExistedTodo4(paramId)) {
            return todos4 = todos4.filter(todo4 => todo4.id != paramId);
        }
        else {
            return todos4;
        }
    },
    isExistedTodo4: function (paramId) {
        return todos4.some(todo4 => todo4.id === paramId);
    }
};
