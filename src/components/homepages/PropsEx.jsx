import React from 'react'

class PropsEx extends React.Component{
    render() {
        let name = this.props.name
        let PropsEx = this.props.PropsEx
        return(
            <div className={PropsEx}>
                Your name: {name}
            </div>
        )
    }
}

export default PropsEx;
