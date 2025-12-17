$(function() {

    $('#fruits').click(e => {
        console.log('ul 클릭됨!');
    });

    $('.cl').click(e => {
        console.log(e.target.textContent);
    });

});