
import React from 'react';
class MyComponent extends React.Component {
    state = {
        firstName : "",
        lastName : ""
    }
    handelChangeFirtname(e) {
        this.setState= e.target.value;
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
  <input type="text" value={this.state.lastName} /><br /><br />
  <input type="button" value="Submit" />
</form> 
            </>
        )
    }

}
export default MyComponent;