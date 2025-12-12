// 이벤트 실습 2 : 배경색 변경
//   - outer 클릭시 outer 배경색 임의색상으로 변경
//   - inner 클릭시 outer, inner 배경색 임의색상으로 변경
//   - btn 클릭시 btn, outer, inner 배경색 임의색상으로 변경

// 임의 색상 생성 함수
const getRandomColor = () => {
    return `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;
};

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const btn = document.querySelector('#btn');

outer.addEventListener('click', e => {

    const innerBG = inner.style.backgroundColor ? inner.style.backgroundColor : 'white';

    switch (e.target.id) {
        case 'outer':
            outer.style.backgroundColor = getRandomColor();                         
            inner.style.backgroundColor = innerBG;
            break;
        case 'inner': 
            inner.style.backgroundColor = getRandomColor();
            outer.style.backgroundColor = getRandomColor();             
            break;
        case 'btn': 
            btn.style.backgroundColor = getRandomColor();
            inner.style.backgroundColor = getRandomColor();
            outer.style.backgroundColor = getRandomColor();        
    }    

});