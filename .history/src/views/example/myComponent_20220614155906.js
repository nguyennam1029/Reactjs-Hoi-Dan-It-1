
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name : "...",
        age : 21
    }
    
    render() {
        return (
            <>
               <form>
  <label htmlFor="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value=""/><br />
  <label htmlFor="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="" /><br /><br />
  <input type="button" value="Submit" />
</form> 
            </>
        )
    }

}
export default MyComponent;