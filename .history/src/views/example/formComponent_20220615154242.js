import React from 'react';
class Formcomponent extends React.Component {
    state = {
        titleCourse : "",
        priceCourse : "",
    }
    handelChangetitleCourse(e) {
        this.setState(
            {
                titleCourse: e.target.value
            }
        )
    }
    handelChangepriceCourse(e) {
        this.setState(
            {
                priceCourse: e.target.value
            }
        )
    }
    handleSubmit() {
        this.props.addCourse({
            id : Math.floor(Math.random() * 11),
            titleCourse : this.state.titleCourse,
            priceCourse : this.state.priceCourse,
        });
       
    }
    render() {
        return (
            <>
                <form>
                    <h1>Form Course</h1>
                    <label htmlFor="fname">Title Course:</label><br />
                    <input type="text"
                        value={this.state.titleCourse}
                        onChange={(e) => this.handelChangetitleCourse(e)}       
                    />
                    <br />
                    <label htmlFor="lname">Price Course:</label><br />
                    <input type="text" 
                        value={this.state.priceCourse} 
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