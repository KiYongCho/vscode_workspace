$(function() {

    $('button').click(e => {
        const div1 = $('#div1'); // 매번 DOM을 탐색하지 않고 한번만 탐색
        switch (e.target.textContent) {
            case 'toggle': div1.toggle(1000); break;
            case 'slideToggle': div1.slideToggle('slow'); break;
            case 'fadeToggle': div1.fadeToggle(3000, e => { // fadeToggle 이펙트 후속 콜백
                alert('fadeToggle 완료 후 실행되는 콜백함수!');
            });
        }
    });

});