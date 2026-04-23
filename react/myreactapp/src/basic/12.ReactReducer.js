import { useReducer } from 'react';

export default function ReactReducer() {

    // count : 상태변수
    // dispatcher : 명령 분배자, reducer에게 명령을 전달하는 역할
    // reducer : 명령에 따른 상태변수 관리자(변경자), 
    //               dispatcher에게서 명령을 전달받아 상태변수값을 변경하는 역할
    // 0 : 상태변수 초기값
    const [count, dispatcher] = useReducer(reducer, 0);

    // 이벤트 콜백함수에서 dispatcher 호출
    function decrement() { dispatcher('decrement'); }
    function increment() { dispatcher('increment'); }
    function initialize() { dispatcher('initialize'); }

    return (
        <div>
            <p>
                <button value='-' onClick={decrement}>감소</button>&nbsp;
                <button value='0' onClick={initialize}>초기화</button>&nbsp;
                <button value='+' onClick={increment}>증가</button>&nbsp;
                <span>{count}</span>
            </p>
        </div>
    );

    // 상태변수와 명령을 전달받아 상태변수의 값을 변경하는 reducer
    // 상태변수의 값이 reducer를 통해서 변경되면 UI도 변경됨!
    function reducer(count, action) {
        switch (action) {
            case 'decrement':
                return count - 1;
            case 'increment':
                return count + 1;
            case 'initialize':
                return 0;
        }
    }

}