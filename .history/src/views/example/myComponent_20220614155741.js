
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
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value="John"/><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
  <button  value="Submit" />
</form> 
            </>
        )
    }

}
export default MyComponent;