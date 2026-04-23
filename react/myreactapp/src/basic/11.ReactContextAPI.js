import { createContext, useContext } from 'react';

// 컨텍스트에서 관리할 객체
const obj = {
    name: '홍길동',
    age: 20
};

// 컨텍스트에서 관리할 객체를 가진 컨텍스트 생성
const context = createContext(obj);

export default function ReactContextAPI() {
    return (
        <GrandParentComponent />
    );
}

function GrandParentComponent() {
    // context라는 컨텍스트를 사용
    const useCon = useContext(context);
    // context.Provider 영역내의 객체를 설정
    return (
        <context.Provider value={{name: '강감찬', age:30}}>
            <div id='grandParent'>
                <p>GrandParentComponent: {useCon.name} {useCon.age}</p>
                <ParentComponent />
            </div>
        </context.Provider>
    );
}

function ParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{name: '이순신', age: 50}}>
            <div id='parent'>
                <p>ParentComponent: {useCon.name} {useCon.age}</p>
                <ChildComponent />
            </div>
        </context.Provider>
    );
}

function ChildComponent() {
    const useCon = useContext(context);
    return (
        <div id='child'>
            <p>ChildComponent: {useCon.name} {useCon.age}</p>
        </div>
    );
}















