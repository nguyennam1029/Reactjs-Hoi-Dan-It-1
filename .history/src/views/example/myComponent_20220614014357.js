
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name : "Nam",
        age : 21
    }
    handelClick(e) {
        console.log(e.target);
        alert("vcl")
    }
    render() {
        return (
            <>
                <div>
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