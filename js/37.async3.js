// Promise
//   - 비동기 요청 처리시 발생했던 콜백지옥(Callback Hell)을 해결하기 위해 ES6에서 추가된 객체
//   - 프라미스 생성자 함수는 콜백함수를 인자로 전달받음
//   - 인자로 전달받은 콜백함수는 resolve(요청 성공시 수행할 콜백)와 reject(요청 실패시 수행할 콜백)을 인자로 받음
//   - status : 프라미스 객체의 상태를 저장하는 프라퍼티
//                 pending : 프라미스 객체 생성됨, 요청 전
//                 fulfilled : 요청 성공 => resolve 호출
//                 rejected : 요청 실패 => reject 호출

// 프라미스를 리턴하는 함수 (GET)
// const promiseGet = url => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         xhr.onload = () => {
//             if (xhr.readyState==4 && xhr.status==200) {
//                 resolve(JSON.parse(xhr.response)); // 요청 성공시 resolve 호출
//             } else {
//                 reject(new Error(xhr.status)); // 요청 실패시 reject 호출
//             }
//         };
//     });
// };

// promiseGet('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response)) // 요청 성공 후속처리 메소드
// .catch(err => console.log(err)) // 요청 실패 후속처리 메소드
// .finally(() => console.log('요청 성공/실패와 관계없이 수행됨!'));

// 프라미스를 리턴하는 함수 (POST)
// const promisePost = (url, payload) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url);
//         // 요청헤더에 보내는 컨텐츠의 타입이 json임을 설정
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.send(payload);
//         xhr.onload = () => {
//             if (xhr.readyState==4 && (xhr.status==200||xhr.status==201)) {
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(new Error(xhr.status));
//             }
//         };
//     });
// };

// promisePost(
//     'https://jsonplaceholder.typicode.com/posts',
//     '{"userId": 11, "title": "title", "body": "body"}'
// )
// .then(response => console.log(response))
// .catch(err => console.log(err))
// .finally(() => console.log('요청 성공/실패와 관계없이 수행됨!'));

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

// 프라미스 체이닝 (Promise Chainning)
//   - 프라미스의 결과로 다시 프라미스를 생성해서 프라미스들을 연결
// promiseGet('https://jsonplaceholder.typicode.com/posts/1') // 1번 게시물
// // 1번 게시물에서 userId 추출해서 userId에 해당하는 사용자정보 추출
// .then(({userId}) => promiseGet(`https://jsonplaceholder.typicode.com/users/${userId}`))
// .then(userInfo => console.log(userInfo)) // 사용자정보 출력
// .catch(err => console.log(err));

// setTimeout을 활용한 Promise기반 비동기 호출

// 3초 후에 1을 resolve하는 함수
// const requestData1 = () => new Promise(
//     resolve => setTimeout(() => resolve(1), 3000)
// );

// // 2초 후에 2을 resolve하는 함수
// const requestData2 = () => new Promise(
//     resolve => setTimeout(() => resolve(2), 2000)
// );

// // 1초 후에 3을 resolve하는 함수
// const requestData3 = () => new Promise(
//     resolve => setTimeout(() => resolve(3), 1000)
// );

// 결과를 저장할 배열
// const res = [];

// requestData1()
// // 3초 후에 1을 배열에 저장하고 requestData2 호출한 결과를 리턴
// .then(data => { res.push(data); return requestData2(); })
// // 2초 후에 2를 배열에 저장하고 requestData3 호출한 결과를 리턴
// .then(data => { res.push(data); return requestData3(); })
// // 1초 후에 3를 배열에 저장하고 배열을 출력
// .then(data => { res.push(data); console.log(res); })
// .catch(err => console.log(err));

// Promise를 사용하지 않은 아래 코드와 위 코드를 비교해 보자!
// const res2 = [];
// setTimeout(() => res2.push(1), 3000); // 3초 후에 배열에 1 푸시
// setTimeout(() => res2.push(2), 2000); // 2초 후에 배열에 2 푸시
// setTimeout(() => res2.push(3), 1000); // 1초 후에 배열에 3 푸시
// // 자바스크립트는 단일스레드 실행을 함 (코드의 순서대로 문장들을 가져다가 순차적으로 실행)
// // setTimeout과 같은 비동기 함수는 별도의 실행Queue에 전달되서 정해진 시간에 실행이 됨
// // 이미 자바스크립트 엔진은 아래의 console.log를 실행해 버림
// console.log(res2); // []

// 프라미스 정적 메소드

// 프라미스들을 병렬처리해서 상태가 모두 다 fulfilled되면 결과들을 배열에 담아 반환
// Promise.all(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error);

// 프라미스들을 병렬처리해서 한개의 프라미스라도 fulfilled가되면 그 즉시 결과를 반환
// Promise.race(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error);

// 프라미스들을 병렬처리해서 모든 프라미스가 fulfilled 또는 rejected가되면 결과를 배열로 반환
// Promise.allSettled(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error);

// fetch 함수
//   - 프라미스를 반환
//   - 비동기처리를 위해서 ES6에 추가한 WEB API (웹브라우져에서 작동)
//   - fetch 함수를 사용하기 위해 node에서는 node-fetch를 제공


// 아래 2개의 fetch는 각각 비동기로 수행됨
// (첫번째 fetch와 두번째 fetch의 실행 순서를 보장 못함)

// 요청메소드를 정하지 않으면 기본 GET
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(obj => console.log(obj));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(obj => console.log(obj));

// 아래 2개의 fetch는 동기로 수행됨
// (첫번째 fetch 실행 후 두번째 fetch 실행이 보장됨)

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(objs => console.log(objs))
// .then(
//     data => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(obj => console.log(obj));
//     }
// );

// fetch를 사용한 REST API
const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(
            url,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );
    },
    put(url, payload) {
        return fetch(
            url,
            {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );
    },
    patch(url, payload) {
        return fetch(
            url,
            {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );
    },
    delete(url) {
        return fetch(
            url,
            {
                method: 'DELETE'
            }
        );
    }
};

const url = 'https://jsonplaceholder.typicode.com/todos';

request.get(url)
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err => console.log(err));

request.post(url, {userId: 1, title: 'javascript', completed: false})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.put(url+'/1', {userId: 1, title: 'jquery', completed: true})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.patch(url+'/1', {title: 'react'})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.delete(url+'/1')
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));


































