import React from 'react';
class Childcomponent extends React.Component {
    render() {
        return (

        <>
            <div>
                <h3>Mobile {this.props.name} and {this.props.job} </h3>
            </div>
        </>
        )
    }
}
export default Childcomponent;