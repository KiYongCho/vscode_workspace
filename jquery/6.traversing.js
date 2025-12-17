$(function() {

    console.log($('ul').parent()[0]); // ul의 첫번째 부모
    console.log($('li:first').parents()); // 첫번째 li의 모든 부모들
    console.log($('li:first').parentsUntil('div')); // 첫번째 li의 모든 부모들 중 div 전까지
    console.log($('ul').children()); // ul의 자식 요소들
    console.log($('ul').find('li:last')); // ul의 자손들 중 마지막 li
    console.log($('li:eq(1)').siblings()); // 두번째 li의 형제들
    console.log($('li:eq(1)').next().text()); // 두번째 li의 동생의 텍스트
    console.log($('li:eq(1)').prev().text()); // 두번째 li의 형의 텍스트
    console.log($('li:first').nextAll()); // 첫번째 li의 모든 동생들
    console.log($('ul li').first()); // ul의 자손 li들 중 첫번째 // ul > li : ul의 자식 li들
    console.log($('ul li').last()); // ul의 자손 li들 중 마지막번째
    console.log($('li').filter('.li')); // 모든 li들 중 class가 li인 것들 // => $('li.li')
    console.log($('li').not('.li')); // 모든 li들 중 class가 li가 아닌 것들

});