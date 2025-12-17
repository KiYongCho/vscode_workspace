$(function() {

    const div1 = $('#div1');

    div1.mouseenter(e => {
        console.log('div에 마우스 커서 진입!');
    });

    div1.mouseleave(e => {
        console.log('div에서 마우스 커서 벗어남!');
    });

    // 실습
    // 1번 버튼을 한번 클릭하면 크기를 2배 확대, 다시 클릭하면 1/2배 축소
    // 2번 버튼을 한번 클릭하면 div를 동그랗게 만들기, 다시 클릭하면 원상태

    let isWided = false;
    let isRounded = false;

    $('button').click(e => {
        switch (e.target.textContent) {
            case '애니메이션': {
                div1.css('position', 'relative');
                div1.animate({
                    left: '100px'
                });
                break;
            }
            case '1번': {
                const currWidth = div1.width();
                const currHeight = div1.height();
                if (!isWided) {
                    div1.animate({ width: currWidth * 2, height: currHeight * 2 }, 
                        () => { isWided = true });
                } else {
                     div1.animate({ width: currWidth / 2, height: currHeight / 2 }, 
                        () => { isWided = false });                   
                }
                break;
            }
            case '2번': {
                if (!isRounded) {
                    div1.animate({'border-radius': '+=50%'}, () => { isRounded = true; });
                } else {
                    div1.animate({'border-radius': '-=50%'}, () => { isRounded = false; });
                }
            }

        }
    });


});