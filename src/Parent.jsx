import React from 'react';

import HomePage from './components/homepages/HomePage';
import PropsEx from './components/homepages/PropsEx'
import StateEx from './components/homepages/StateEx'
import ColorPlay from './components/homepages/ColorPlay'
class Parent extends React.Component {
    render() {
        return (
            <div>
                <div className="HomePage">
                    <HomePage />
                </div> 
                <div className="PropsExs">
                    <PropsEx name="Didik" />
                    <PropsEx name="1" />
                    <PropsEx name="2" />
                    <PropsEx name="3" />
                </div>
                <div className="PropsEx2">
                    <PropsEx name="Didik" />
                    <PropsEx name="1" />
                    <PropsEx name="2" />
                    <PropsEx name="3" />
                </div>

                <div>
                    <h1>State</h1>
                    <StateEx />
                </div>
                <ColorPlay />
            </div>
        )
    }
}

export default Parent;
