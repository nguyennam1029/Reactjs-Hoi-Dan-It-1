
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name : "Nam",
        age : 21
    }
    render() {
        return (
            <>
                <div>
                    <h1>Nguyễn Văn Nam</h1>
                    <h2>age {this.state.age}</h2>
                </div>
                <p>Tên tao là: {this.state.name}</p>
            </>
        )
    }

}
export default MyComponent;