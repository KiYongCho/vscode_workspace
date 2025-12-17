$(function() {

    // GET 요청 ($.get)
    $('#btn1').click(e => {

        $.get(
            'https://jsonplaceholder.typicode.com/posts', // 요청URL
            () => { console.log('데이터 로딩 완료!'); } // 요청완료 후 실행할 콜백함수
        )
        .done(resp => { // 요청 성공하면
            console.log(resp);
        })
        .fail(() => { // 요청 실패하면
            console.log('요청 실패!');
        })
        .always(() => { // 요청 성공하든 실패하든
            console.log('요청 성공/실패 여부와 상관없이 실행!');
        })

    });

    // POST 요청 ($.post)
    $('#btn2').click(e => {

        $.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                userId: 11,
                title: '신규POST제목',
                body: '신규POST내용'
            },
            () => { console.log('데이터 등록 완료!'); }
        )
         .done(resp => { // 요청 성공하면
            console.log(resp);
        })
        .fail(() => { // 요청 실패하면
            console.log('요청 실패!');
        })
        .always(() => { // 요청 성공하든 실패하든
            console.log('요청 성공/실패 여부와 상관없이 실행!');
        })       

    });

    // GET요청 ($.ajax)
    $('#btn3').click(e => {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', // URL
            method: 'GET' // HTTP요청메소드
        })
         .done(resp => { // 요청 성공하면
            console.log(resp);
        })
        .fail(() => { // 요청 실패하면
            console.log('요청 실패!');
        })
        .always(() => { // 요청 성공하든 실패하든
            console.log('요청 성공/실패 여부와 상관없이 실행!');
        })       

    });

    // POST요청 ($.ajax)
    $('#btn4').click(e => {    

         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', // URL
            method: 'POST', // HTTP요청메소드
            data: { // 전송데이터 => payload
                userId: 11,
                title: '신규POST제목',
                body: '신규POST내용'
            },
            contentType: 'json', // 클라이언트가 보내는 데이터 타입
            dataType: 'json' // 서버에서 보내는 데이터 타입
        })
         .done(resp => { // 요청 성공하면
            console.log(resp);
        })
        .fail(() => { // 요청 실패하면
            console.log('요청 실패!');
        })
        .always(() => { // 요청 성공하든 실패하든
            console.log('요청 성공/실패 여부와 상관없이 실행!');
        })              

    });

});