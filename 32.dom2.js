// 요소 선택
const mainTitle = document.querySelector('#main-title'); // <h1>
const description = document.querySelector('#description'); // <p>
const list = document.querySelector('#list'); // <ul>

// 1. 요소 노드
console.log('노드 타입 : ', mainTitle.nodeType); // 1
console.log('노드 이름 : ', mainTitle.nodeName); // H1
console.log('노드 값 : ', mainTitle.nodeValue); // null

// 2. 텍스트 노드
console.log('노드 타입 : ', description.firstChild.nodeType); // 3
console.log('노드 이름 : ', description.firstChild.nodeName); // #text
console.log('노드 값 : ', description.firstChild.nodeValue); // DOM API 실습

// 3. 문서 노드
console.log('노드 타입 : ', document.nodeType); // 9
console.log('노드 이름 : ', document.nodeName); // #document
console.log('노드 값 : ', document.nodeValue); // null

// 4. 속성 노드
console.log('노드 타입 : ', mainTitle.attributes['id'].nodeType); // 2
console.log('노드 이름 : ', mainTitle.attributes['id'].nodeName); // id
console.log('노드 값 : ', mainTitle.attributes['id'].nodeValue); // main-title

// 컨텐트 조작

// textContent : 요소의 컨텐츠를 일반문자열로 가져옴
console.log('textContent : ', mainTitle.textContent); // dom2
// textContent 변경
mainTitle.textContent = '수정된 textContent';

// innerHTML : 요소의 컨텐츠를 파싱된 HTML로 가져옴
// <li data-id="1" data-name="Item1">Item 1</li>
// <li data-id="2" data-name="Item2">Item 2</li>
// <li data-id="3" data-name="Item3">Item 3</li>
console.log('innerHTML : ', list.innerHTML);
// Item 1
// Item 2
// Item 3
console.log('innerHTML : ', list.textContent);
list.innerHTML += '<li data-id="4" data-name="Item4">Item 4</li>';

// 요소 속성

// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2} 유사배열객체
console.log('attributes : ', mainTitle.attributes);
console.log(mainTitle.attributes[0]); // id, 첫번째 속성
console.log(mainTitle.attributes[0].nodeValue);  // main-title
console.log(mainTitle.attributes[1]); // class, 두번째 속성
console.log(mainTitle.attributes[1].nodeValue); // title
console.log(mainTitle.attributes.length); // 2, 속성의 개수

console.log('className : ', mainTitle.className); // title
console.log('classList : ', mainTitle.classList); // DOMTokenList ['title', value: 'title']
mainTitle.classList.add('highlight'); // highlight 클래스 추가
// DOMTokenList(2) ['title', 'highlight', value: 'title highlight']
console.log('classList : ', mainTitle.classList);
mainTitle.classList.remove('highlight'); // highlight 클래스 제거

// 요소 데이터 속성
const firstItem = list.querySelector('li[data-id="1"]');
console.log('data-id : ', firstItem.dataset.id); // 1
console.log('data-name : ', firstItem.dataset.name); // Item1

// 요소 생성 및 추가
const newItem = document.createElement('li'); // 새로운 li 생성
newItem.textContent = 'Item 5';
newItem.dataset.id = '5';
newItem.dataset.name = 'Item5';
list.appendChild(newItem); // 새로 생성한 li를 ul의 마지막 자식으로 추가

const newItem2 = document.createElement('li');
newItem2.setAttribute('data-id', '6');
newItem2.setAttribute('data-name', 'Item6');
const newItem2TC = document.createTextNode('Item 6');
newItem2.appendChild(newItem2TC);
list.appendChild(newItem2);

// DocumentFragment : 기존 DOM트리를 벗어난 새로운 DOM트리
//   - 기존 DOM트리를 손상시키지 않고 여러 요소들을 모은 DOM을 만들어 추가/제거할때 사용
const fragment = document.createDocumentFragment(); // DocumentFragment 생성
console.log(fragment); // #document-fragment
for (let i=7; i<=10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.dataset.id = `${i}`;
    li.dataset.name = `Item${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment);

// 요소 삭제 및 대체
const secondItem = list.querySelector('li[data-id="2"]');
list.removeChild(secondItem);

const thirdItem = list.querySelector('li[data-id="3"]');
const replaceItem = document.createElement('li');
replaceItem.textContent = '수정된 아이템';
replaceItem.dataset.id = '3';
replaceItem.dataset.name = '수정된 아이템';
list.replaceChild(replaceItem, thirdItem);

// 속성 존재 여부
console.log('id속성 존재 여부 : ', mainTitle.hasAttribute('id')); // true

// 스타일 변경
// CSS 속성 표기 문법 : font-size, Javascript 프라퍼티 표기 문법 : fontSize
// Inline 방식으로 적용된 스타일 정보를 가져옴
mainTitle.style.color = 'blue';
mainTitle.style.fontSize = '3em';

// 스타일 정보 획득 : window.getComputedStyle
// External, Internal, Inline 3가지 방식으로 적용된 모든 스타일 정보를 가져옴
console.log('computed style : ', getComputedStyle(mainTitle)); // CSSStyleDeclaration { ... }
console.log('computed style : ', getComputedStyle(mainTitle).color); // computed style :  rgb(0, 0, 255)
// getComputedStyle(mainTitle).color = 'red'; // 직접 변경 불가


