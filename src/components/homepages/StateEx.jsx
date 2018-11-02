import React from 'react';

class StateEx extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Didik',
            kelas: '12'
        };
    }
    render(){
        let objects = ['name: my name', 'name2', 'name3']
        console.log(this.state)
        return (
            <div>{objects.slice(0,2)}</div>
        )
    }
}

export default StateEx;
