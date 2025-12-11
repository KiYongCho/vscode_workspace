// DOM 실습 3

/*
    배경색blue 버튼을 클릭하면 div의 배경색을 blue
    배경색red 버튼을 클릭하면 div의 배경색을 red
    크기X2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 증가
    크기/2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 감소
    blue클래스 버튼을 클릭하면 div에 blue라는 클래스를 적용
    red클래스 버튼을 클릭하면 div에 red라는 클래스를 적용
*/

const div = document.querySelector('div'); // div, Element
const buttons = document.querySelectorAll('button'); // button, NodeList

buttons.forEach(button => { // 버튼 각각에 대해
    button.addEventListener('click', e => { // 클릭이벤트리스너 추가

        let width, height; // 넓이, 높이 저장
        // e.target : 이벤트를 발생시킨 객체 (이벤트 타겟)
        if (e.target.textContent.indexOf('크기') > -1) { // 크기 라는 문자열이 있다면
            width = window.getComputedStyle(div).width; // div 넓이
            width = width.substring(0, width.length-2); // px 문자열 제외
            height = window.getComputedStyle(div).height; // div 넓이
            height = height.substring(0, height.length-2); // px 문자열 제외
        }

        switch (e.target.textContent) {
            case '배경색blue':
                div.style.backgroundColor = 'blue'; break;
            case '배경색red':
                div.style.backgroundColor = 'red'; break;
            case '크기X2':
                div.style.width = width*2 + 'px';
                div.style.height = height*2 + 'px';
                break;
            case '크기/2':
                div.style.width = width/2 + 'px';
                div.style.height = height/2 + 'px';
                break;
            case 'blue클래스':
                div.style.backgroundColor = 'blue';
                div.classList.toggle('blue'); // blue 클래스명이 있으면 제거, 없으면 생성
                break;
            case 'red클래스':
                div.style.backgroundColor = 'red';                
                div.classList.toggle('red');
        }
    });
    
});