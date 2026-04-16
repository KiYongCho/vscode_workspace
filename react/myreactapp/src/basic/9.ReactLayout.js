import './css/ReactLayout.css';

// 컨텐츠 영역에 표시할 문자열 배열
const contents = [
    'Javascript Contents...',
    'Typescript Contents...',
    'React Contents...'
];

export default function ReactLayout() {

    const titleText = 'My React SPA Website';
    const menus = ['Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright (c)2026 All right reserved 이츠미';

    return (

        <div id='wrapper'>
            <Header titleText={titleText} />
            <Nav menus={menus} />
            <Content contents={contents[0]} />
            <Footer footerText={footerText} />
        </div>

    );

} // ReactLayout

function Header(props) {
    return (
        <header>
            <h1>{props.titleText}</h1>
        </header>
    );
}

function Nav(props) {

    return (
        <nav>
            <ul>
                {props.menus.map((menu, index) => 
                    <li data-index={index} key={index} onClick={changeMenu}>{menu}</li>
                )}
            </ul>
        </nav>
    );

    function changeMenu(e) {
        document.querySelector('#content').textContent
            = contents[e.target.dataset.index];
    }

} // Nav

function Content(props) {

    return (
        <div id='content'>{props.contents}</div>
    );

} // Content

function Footer(props) {

    return (
        <footer>{props.footerText}</footer>
    );

} // Footer