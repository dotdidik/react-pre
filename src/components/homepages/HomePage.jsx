import React from 'react';

import AppHeader from './AppHeader'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div className="AppHeader">
                    <AppHeader />
                </div>
            </div>
        )
    }
}

export default HomePage;
