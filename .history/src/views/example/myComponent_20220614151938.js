
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name : "Nam DEV",
        age : 21
    }
    handelClick() {
        
        alert("vcl")
    }
    render() {
        return (
            <>
                <div>
                <input type="text" value={this.state.name} />
                    <h1>Nguyễn Văn Nam</h1>
                    <h2>age {this.state.age}</h2>
                </div>
                <p>Tên tao là: {this.state.name}</p>
                <button onClick={()=> this.handelClick()}>Click</button>
            </>
        )
    }

}
export default MyComponent;