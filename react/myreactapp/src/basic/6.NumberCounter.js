import NumberOperator from './6.NumberOperator'

export default function NumberCounter() {
    return (
        <NumberOperator onChangeMode={
            e => {
                const num1Val = Number(document.querySelector('#num1').value);
                const num2Val = Number(document.querySelector('#num2').value);
                document.querySelector('#result').innerHTML = num1Val + num2Val;
            }
        } />
    );
}