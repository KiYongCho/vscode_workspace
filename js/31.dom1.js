// 문서에서 testBtn 아이디를 가진 요소에 이벤트리스너를 추가
// 이벤트리스너 : 객체에 발생하는 이벤트를 감지해서 이벤트콜백(이벤트처리함수)를 호출해 줌
// 아이디가 testBtn인 요소를 클릭하면 뒤의 콜백함수를 수행
document.getElementById('testBtn').addEventListener('click', () => {

    const parent = document.getElementById('parent'); // id가 parent인 요소
    console.log('부모 노드 : ' + parent); // 부모 노드 : [object HTMLDivElement]
    console.log(typeof parent); // object
    console.log(parent instanceof Object); // true
    console.log(parent instanceof EventTarget); // true
    console.log(parent instanceof Node); // true
    console.log(parent instanceof Element); // true
    console.log(parent instanceof HTMLElement); // true
    console.log(parent instanceof HTMLDivElement); // true
    console.log(parent instanceof HTMLParagraphElement); // false

    // HTMLDivElement의 상속계층도
    // Object > EventTarget > Node > Element > HTMLElement > HTMLDivElement

    // NodeList : 모든 노드들의 리스트, HTMLCollection : 모든 요소들의 컬렉션

    const childNodes = parent.childNodes;
    console.log(childNodes); // NodeList(7) [text, p, text, p, text, p, text]

    const children = parent.children;
    console.log(children); // HTMLCollection(3) [p.child, p.child, p.child]

    console.log('첫번째 자식 : ', parent.firstChild); // #text
    console.log('마지막번째 자식 : ', parent.lastChild); // #text

    console.log('첫번째 요소 자식 : ', parent.firstElementChild); // p
    console.log('마지막번째 요소 자식 : ', parent.lastElementChild); // p

    const firstElementChild = parent.firstElementChild;
    console.log('첫번째 요소 자식의 다음 형제 노드 : ', firstElementChild.nextSibling); // #text
    console.log('첫번째 요소 자식의 다음 형제 요소 : ', firstElementChild.nextElementSibling); // 두번째 p

    const lastElementChild = parent.lastElementChild;
    console.log('마지막 요소 자식의 이전 형제 노드 : ', lastElementChild.previousSibling); // #text
    console.log('마지막 요소 자식의 이전 형제 요소 : ', lastElementChild.previousElementSibling); // 두번째 p
    
    const byTagName = document.getElementsByTagName('P'); // HTMLCollection, 태그명이 P인 요소들
    console.log(byTagName); // HTMLCollection(3) [p.child, p.child, p.child]

    // HTMLCollection은 이터러블
    for (let ele of byTagName) {
        console.log(ele); // p p p
    }

    const byClassName = document.getElementsByClassName('child'); // HTMLCollection
    console.log(byClassName); // HTMLCollection(3) [p.child, p.child, p.child]

    // 아이디가 parent인 요소의 자손 중 클래스가 child인 첫번째 요소
    const querySingle = document.querySelector('#parent .child');
    console.log(querySingle); // 첫번째 p

    // 아이디가 parent인 요소의 자손 중 클래스가 child인 모든 요소
    const queryAll = document.querySelectorAll('#parent .child');
    console.log(queryAll); // NodeList(3) [p.child, p.child, p.child]

    // NodeList는 이터러블
    for (let node of queryAll) {
        console.log(node); // p p p 
    }

    // 실습 1 : id가 parent인 요소의 세번째 자식 요소 탐색
    console.log(parent.children[2]);

    // 실습 2 : class가 child인 요소 중 두번째 요소 탐색
    console.log(byClassName[1]);

    // 실습 3 : class가 child인 요소 중 세번째 요소의 형인 요소 탐색
    console.log(byClassName[2].previousElementSibling);

});