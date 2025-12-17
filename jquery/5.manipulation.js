$(function() {

    console.log($('#p1').text()); // 요소내에 있는 텍스트 획득
    console.log($('#p1').html()); // 요소내에 있는 HTML 획득
    console.log($('a').attr('href')); // 요소의 속성값 획득
    $('a').attr('href', 'https://www.naver.com'); // 요소의 속성값 변경
    $('a').append('append'); // 요소의 컨텐츠 뒤
    $('a').prepend('prepend'); // 요소의 컨텐츠 앞
    $('a').after('after'); // 요소 뒤
    $('a').before('before'); // 요소 앞
    $('button').click(e => {
        console.log($('#txt').val()); // <input type='text'>에 입력한 값 획득
        $('#txt').val('새로운 값'); // 값 변경
        console.log($('#txt').val());
        // $('a').remove(); // a요소를 포함해서 하위요소까지 제거
        $('p').empty(); // p요소의 하위요소들을 제거
    });

});