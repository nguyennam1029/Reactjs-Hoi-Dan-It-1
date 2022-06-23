import React from 'react';
class Childcomponent extends React.Component {
    render() {
        let {name, job} = this.props;
        return (
        <>
            <div>
                <h3>Mobile {name} and {job} </h3>
            </div>
        </>
        )
    }
}
export default Childcomponent;