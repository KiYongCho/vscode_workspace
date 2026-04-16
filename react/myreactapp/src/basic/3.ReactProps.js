/*
    Props
    - react는 상위컴포넌트에서 하위컴포넌트에 데이터를 전달하기 위해서 Props를 사용
    - 상위컴포넌트는 하위컴포넌트를 포함하는 컴포넌트
*/

export default function ReactProps() {
    const greeting = 'Hello React!';
    const menuArr = ['Javascript', 'Typescript', 'React'];
    const menuObj = {
        '1': 'Javascript',
        '2': 'Typescript',
        '3': 'React'
    };
    return (
        <>
            <h1>{greeting}</h1>
            {/* Article 컴포넌트에 title과 content 프라퍼티들을 전달 */}
            <Article title='제목' content='내용' />
            {/* Menus 컴포넌트에 content 프라퍼티를 전달 */}
            <Menus content={menuArr} />
            {/* Menus2 컴포넌트에 content 프라퍼티를 전달 */}
            <Menus2 content={menuObj} />
            {/* JSX내에서 연산 */}
            <p>{1 + 2 + 3}</p>
            {/* 객체 프라퍼티 접근 */}
            <p>{'123'.length}</p>
            {/* 즉시실행함수 실행 */}
            <p>{(function() { return 100; })()}</p>
        </>
    );
}

// props를 통해 title과 content 프라퍼티를 전달 받음
function Article(props) {
    return (
        <article>{props.title} : {props.content}</article>
    );
}

// props를 통해 content 프라퍼티를 전달 받음
function Menus(props) {
    return (
        <ul>
            {/* react에서 내부적으로 li들을 식별하기 위해서 key가 필요 */}
            <li key='1'>{props.content[0]}</li>
            <li key='2'>{props.content[1]}</li>
            <li key='3'>{props.content[2]}</li>
        </ul>
    );
}

// props를 통해 content 프라퍼티를 전달 받음
function Menus2(props) {
    return (
        <ul>
            <li key='1'>{props.content['1']}</li>
            <li key='2'>{props.content['2']}</li>
            <li key='3'>{props.content['3']}</li>
        </ul>        
    );
}