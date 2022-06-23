
// import { logDOM } from '@testing-library/react';
import React from 'react';
import Childcomponent from './childcomponent';
import Formcomponent from './formComponent';
class MyComponent extends React.Component {
    state = {
    
        courses : [
            {id: 'course1',titleCourse : 'Khóa Html Css', priceCourse : '400'},
            {id: 'course2',titleCourse : 'Khóa Javascript', priceCourse : '999'},
            {id: 'course3',titleCourse : 'Khóa ReactJs', priceCourse : '8998'}
        ]
    }
    addCourse = (course) => {
        this.setState(
            {
                courses : this.state.courses.push(course)
            }
        )
    }
    render() {
        
        return (
            <>
               <Formcomponent 
                    addCourse = {this.addCourse}
               />
                <Childcomponent 
                    courses = {this.state.courses}
                />
               
            </>
        )
    }

}
export default MyComponent;