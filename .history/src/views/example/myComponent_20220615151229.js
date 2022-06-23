
import React from 'react';
import Childcomponent from './childcomponent';
import Formcomponent from './formComponent';
class MyComponent extends React.Component {
    state = {
    
        courses : [
            {id: 'course1',titleCourse : 'Khóa Html Css', priceCourse : 'Hay'},
            {id: 'course2',titleCourse : 'Khóa Javascript', priceCourse : 'Ngon'},
            {id: 'course3',titleCourse : 'Khóa ReactJs', priceCourse : 'Quá Hay'}
        ]
    }
    addCourse = () => {

    }
    render() {
        
        return (
            <>
               <Formcomponent 

               />
                <Childcomponent 
                    courses = {this.state.courses}
                />
               
            </>
        )
    }

}
export default MyComponent;