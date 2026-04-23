import '../css/Nav.css';

import Home from './Home';
import Javascript from './Javascript';
import Typescript from './Typescript';
import React from './React';
import NotFound from './NotFound';

import { Route, Routes, NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div id='nav'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Javascript'>Javascript</NavLink></li>
                <li><NavLink to='/Typescript'>Typescript</NavLink></li>
                <li><NavLink to='/React'>React</NavLink></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Javascript' element={<Javascript />} />
                <Route path='/Javascript/*' element={<Javascript />} /> 
                <Route path='/Typescript' element={<Typescript />} />
                <Route path='/React' element={<React />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    );
}