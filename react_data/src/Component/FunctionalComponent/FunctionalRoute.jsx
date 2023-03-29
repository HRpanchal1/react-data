import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import Clock from './01Clock';
class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalclock" element={<Clock />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;
