// npm install styled-components

import styled, { ThemeProvider } from 'styled-components';

// 버튼 컴포넌트
const CommonButton = props => {
    return <button className={props.className}>{props.children}</button>;
};

// CommonButton의 스타일을 상속받고 자신의 스타일을 추가한 버튼
const StyledCommonButton = styled(CommonButton)`
    font-size: 2em;
`;

// 동적스타일 버튼
const DynamicButton = props => {
    return <button className={props.className}>{props.children}</button>
};

// 동적스타일 버튼을 상속받아 자신의 스타일을 추가한 버튼
const StyledDynamicButton = styled(DynamicButton)`
    font-size: ${props => props.fs + 'em'};
`;

// 스타일이 정의된 div
const StyledDiv = styled.div`
    font-size: 3em;
    color: white;
    background-color: blue;
`;

// StyledDiv의 스타일을 상속받아 자신의 스타일을 추가한 div
const StyledDiv2 = styled(StyledDiv)`
    border: 3px dotted yellow;
    text-align: center;
`;

const theme = {
    fontSizeBase: 1
};

export default function ReactStyledComponent() {

    return (
        <ThemeProvider theme={theme}>
            <CommonButton>CommonButton</CommonButton>
            <StyledCommonButton>StyledCommonButton</StyledCommonButton>
            <NoUseStyledComponent />
            <UseStyledComponent />
            <DynamicButton>DynamicButton</DynamicButton>
            <StyledDynamicButton fs='10'>StyledDynamicButton</StyledDynamicButton>
        </ThemeProvider>
    );

}

// StyledComponent 미사용시 style을 직접 지정
function NoUseStyledComponent() {
    const style = {
        fontSize: '2em', // font-size로 작성하면 안됨, JS 표기법으로 작성해야 함
        color: 'yellow',
        backgroundColor: 'red'
    };
    return <div style={style}>Hello</div>;
}

// StyledComponent 사용시
function UseStyledComponent() {
    return (
        <>
            <StyledDiv>Hello</StyledDiv>
            <StyledDiv2>Hello</StyledDiv2>
        </>
    );
}



