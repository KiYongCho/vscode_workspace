// generator 함수
//   - 함수의 실행을 나눠서 처리할 수 있는 함수
//   - 제네레이터 함수는 제네레이터를 반환
//   - 제네레이터 객체는 이터러블이면서 이터레이터
//   - yield 키워드를 통해서 함수 실행 중간에 실행 흐름을 양보할 수 있음

// 제네레이터 함수는 function 뒤에 *을 붙여서 선언
// function* generatorFunc() {
//     try {
//         console.log('yield 1 이전!');
//         yield 1;
//         console.log('yield 2 이전!');
//         yield 2;
//         console.log(abc); // ReferenceError (런타임)
//         console.log('yield 3 이전!');
//         yield 3;
//         console.log('yield 3 이후!');
//     } catch (err) {
//         console.log(err);
//     }
// }

// 제네레이터 함수의 반환값은 제네레이터 객체
// const generator = generatorFunc();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// //console.log(generator.return('반환')); // { value: '반환', done: true }, 함수 반환
// console.log(generator.throw('에러')); // {value: undefined, done: true}, 에러


// node 환경에서 fetch함수를 사용하려면 node-fetch를 설치해야 함
// 1. 터미널(ctrl+`)
// 2. cd js
// 3. npm init -y
// 4. npm install node-fetch@2 --save-dev

// async / await
//   - ES8(2017)에 도입된 프라미스 기반의 비동기 처리를 쉽게 할 수 있도록 만든 키워드
//   - 일반적으로 함수 앞에 async 키워드를 붙여서 함수를 비동기 실행하고
//     비동기로 실행되는 함수 내에서 동기작업이 필요한 경우 동기작업 앞에 await 키워드를 사용

// node-fetch 라이브러리에서 fetch를 가져옴
// package.json에서   "type": "module"로 변경해야 함
// import fetch from 'node-fetch';

// // 비동기로 처리되는 비동기 함수
// async function fetchTodo() {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     // fetch(url)작업이 종료될때까지 기다렸다가 response 변수에 결과를 저장
//     const response = await fetch(url);
//     // response.json()작업이 종료될때까지 기다렸다가 todo 변수에 결과를 저장
//     const todo = await response.json();
//     console.log(todo);
// }

// fetchTodo();

// 실습
// 37.async3.js 실습 1, 2번을 async/await 문법으로 변환

// 실습 1
// Promise를 이용해서 id가 20인 게시물의 title을 'modified title'로 수정
// new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/20');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send('{"title": "modified title"}');
//     xhr.onload = () => {
//         resolve(JSON.parse(xhr.response));
//     };
//     xhr.onerror = () => {
//         reject(new Error(xhr.status));
//     }
// })
// .then(response => console.log(response))
// .catch(err => console.log(err));

import fetch from 'node-fetch';

async function modifyTitle() {
    const url = 'https://jsonplaceholder.typicode.com/posts/20';
    const response = await fetch(url, { 
        method: 'PATCH', 
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title: 'modified title' })
    });
    const post = await response.json();
    console.log(post);
}

modifyTitle();

// 실습 2
// Promise를 이용해서 postId가 3인 post의 모든 댓글을 조회
// new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
//     xhr.send();
//     xhr.onload = () => {
//         resolve(
//             JSON.parse(xhr.response).filter(comment => comment.postId=='3')
//         );
//     };
//     xhr.onerror = () => {
//         reject(new Error(xhr.status));
//     }    
// })
// .then(response => console.log(response))
// .catch(err => console.log(err));

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    const filteredComments = comments.filter(comment => comment.postId=='3');
    console.log(filteredComments);
}

getComments();

























