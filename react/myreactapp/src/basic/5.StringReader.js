import StringOperator from "./5.StringOperator";

export default function StringReader() {
    return (
        <>
            <StringOperator onChangeMode={
                e => {
                    console.log('문자열 길이: ' + e.target.value.length);
                }
            } />
        </>
    );
}