import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import JavascriptSub from './JavascriptSub';

export default function Javascript() {

    const params = useParams();
    const pid = params.pid;

    return (
        <div>
            <h2>Javascript</h2>
            <p>
                <NavLink to='/Javascript/1'>sub1</NavLink>&nbsp;
                <NavLink to='/Javascript/2'>sub2</NavLink>
            </p>
            <Routes>
                <Route path='/:pid' element={<JavascriptSub />} />
            </Routes>
        </div>
    );
}