// 8.GetData.js

// 1. 페이지가 로딩되면 https://jsonplaceholder.typicode.com/todos의 데이터를 가져옴
// 2. 가져온 데이터의 id프라퍼티의 값으로 select를 구성
// 3. select의 옵션을 선택하면 옵션에 해당하는 todo를 가져와서 화면에 출력
// 예시) 1  => id가 1번인 데이터 로딩
//         2  => id가 2번인 데이터 로딩
//         3  => id가 3번인 데이터 로딩
// 4. 출력 형식 예시)
//    ID : 1
//    Title : delectus aut autem
//    Completed : false

import { useState, useEffect } from "react";

export default function GetData() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            setTodos(data);
            setTodo(data[0]);
        });
    }, []);

    function getDataById(e) {
        const id = e.target.value;
        const selectedTodo = todos.find(t => t.id === id);
        setTodo(selectedTodo);
    }

    return (
        <>
            <select onChange={getDataById}>
                {todos.map(todo => (
                    <option key={todo.id} value={todo.id}>{todo.id}</option>
                ))}
            </select>
            <hr/>
            {todo && (
                <div>
                    <p>ID : {todo.id}</p>
                    <p>Title : {todo.title}</p>
                    <p>Completed : {todo.completed.toString()}</p>
                </div>
            )}
        </>
    );
    
}