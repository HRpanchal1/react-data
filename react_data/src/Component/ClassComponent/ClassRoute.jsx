import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx';
import JSXClassCompo from './02JSXClassCompo.jsx';
import PropsInClassCompo from './03PropsInClassCompo.jsx';
import StateInClassCompo from './04StateInClassCompo.jsx';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo.jsx';

class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="jsxclasscompo" element={<JSXClassCompo />} />
                        <Route path="propsinclass" element={<PropsInClassCompo />} />
                        <Route path="stateinclass" element={<StateInClassCompo />} />
                        <Route path="statelifecycleinclass" element={<StateLifeCycleInClassCompo />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;
