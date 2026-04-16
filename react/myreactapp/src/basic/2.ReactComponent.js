// 1. Function 컴포넌트
export default function ReactComponent() {
    // 컴포넌트의 지역변수
    const message = 'Function 컴포넌트';
    // JSX의 {} 문법
    return (
        <h1>{message}</h1>
    );
}

// 2. class 컴포넌트
/*
import { Component } from 'react';
export default class ReactComponent extends Component {
    render() {
        const message = 'class 컴포넌트';
        return (
            <h1>{message}</h1>
        );
    };
}
*/