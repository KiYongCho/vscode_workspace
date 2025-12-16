// 아이디가 btn인 버튼 클릭하면
document.querySelector('#btn').addEventListener('click', e => {
    
    // xhr객체 생성
    const xhr = new XMLHttpRequest(); // 서버와 통신을 위한 xhr객체 생성

    // xhr객체의 readystatechange 이벤트 콜백 등록
    // readystatechange : xhr객체의 readyState프라퍼티의 값이 변경되는 이벤트
    // onreadystatechange : readystatechange이벤트의 콜백을 저장하는 프라퍼티
    xhr.onreadystatechange = e => {
        // xhr.readyState 프라퍼티의 값
        // 0 : 요청 초기화 전
        // 1 : 서버에 연결됨
        // 2 : 서버가 요청을 전달 받음
        // 3 : 서버가 요청을 처리하고 있음
        // 4 : 서버가 요청 처리를 마치고 응답이 준비됨
        // xhr.status 프라퍼티의 값 : 서버의 응답상태코드 (200, 403, 404, 500 ...)
        if (xhr.readyState==4 && (xhr.status==200||xhr.status==201)) {
            // xhr.responseText 프라퍼티의 값 : 서버가 보낸 응답 문자열
            document.querySelector('#result').textContent = xhr.responseText;
        }
    };

    // GET 요청 (로컬)
    // 요청초기화 : 요청메소드, 요청URL, 비동기여부
    // xhr.open('GET', 'assets/persons.csv', true);
    // 요청전송
    // xhr.send()

    // GET 요청 (원격)
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    // xhr.open('GET', 'https://www.google.com', true);
    // xhr.send();

    // POST 요청
    // 요청 초기화
    // xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    // 요청헤더설정 : 폼데이터
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // 요청시 서버에 보내는 데이터
    // const payload = {"userId": 11, "title": "제목", "body": "내용"};
    // POST요청시는 데이터를 send의 인자로 보냄
    // javascript객체를 JSON문자열로 변경
    // xhr.send(JSON.stringify(payload)); 

});