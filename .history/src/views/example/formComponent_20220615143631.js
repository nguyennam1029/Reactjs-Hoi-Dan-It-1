import React from 'react';
class Formcomponent extends React.Component {
    state = {
        titleCourse : "",
        priceCourse : "",
    }
    handelChangetitleCourse(e) {
        this.setState(
            {
                firstName: e.target.value
            }
        )
    }
    handelChangepriceCourse(e) {
        this.setState(
            {
                lastName: e.target.value
            }
        )
    }
    handleSubmit() {
        console.log("props",this.state);
    }
    render() {
        return (
            <>
                <form>
                    <h1>Form Course</h1>
                    <label htmlFor="fname">Title Course:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(e) => this.handelChangetitleCourse(e)}       
                    />
                    <br />
                    <label htmlFor="lname">Price Course:</label><br />
                    <input type="text" 
                        value={this.state.lastName} 
                        onChange={(e)=> this.handelChangepriceCourse(e)}        
                    />
                    <br /><br />
                    <input type="button" value="Submit" onClick={()=> this.handleSubmit()}/>
                </form> 
            </>
        )
    }
}
export default Formcomponent