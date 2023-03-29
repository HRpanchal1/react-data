import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Compo Intro</Link></li>
                    <li><Link to="jsxclasscompo">JSX</Link></li>
                    <li><Link to="propsinclass">Props</Link></li>
                    <li><Link to="stateinclass">State</Link></li>
                    <li><Link to="statelifecycleinclass">State LifeCycle</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;