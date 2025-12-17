// 문서가 메모리에 모두 로딩된 후에 이벤트콜백함수를 수행
// document객체의 ready이벤트와 이벤트콜백
// $(document).ready(function() {

//     // 아이디가 btn인 버튼이 클릭되면 이벤트콜백함수를 수행
//     $('#btn').click(function() {
//         alert('안녕 jquery!');
//     });

// });

// 위 코드의 short 버젼
// $(function() {

//     $('#btn').click(function() {
//         alert('안녕 jquery!');
//     })

// });

// 위 코드의 바닐라스크립트 버젼
// window.addEventListener('load', function() {
//     this.document.querySelector('#btn').addEventListener('click', function() {
//         alert('안녕 jquery!');
//     });
// });