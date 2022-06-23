
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name : "",
        age : 21
    }
    handelValue(event) {
        this.setState( {
            name: event.target.value
        })
    }
    handelClick() {
        
        alert("vcl")
    }
    render() {
        return (
            <>
                <div>
                <input type="text" value={this.state.name} 
                    onChange={(event) => this.handelValue(event)}
                 />
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