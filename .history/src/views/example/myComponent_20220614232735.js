
import React from 'react';
import Childcomponent from './childcomponent';
class MyComponent extends React.Component {
    state = {
        firstName : "",
        lastName : ""
    }
    handelChangeFirtname(e) {
        this.setState(
            {
                firstName: e.target.value
            }
        )
    }
    handelChangeLastname(e) {
        this.setState(
            {
                lastName: e.target.value
            }
        )
    }
    handleSubmit() {
        console.log(this.state);
    }
    render() {
        return (
            <>
               <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(e) => this.handelChangeFirtname(e)}       
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" 
                        value={this.state.lastName} 
                        onChange={(e)=> this.handelChangeLastname(e)}        
                    />
                    <br /><br />
                    <input type="button" value="Submit" onClick={()=> this.handleSubmit()}/>
                </form> 
                <Childcomponent />
            </>
        )
    }

}
export default MyComponent;