
import React from 'react';
import Childcomponent from './childcomponent';
import Formcomponent from './formComponent';
class MyComponent extends React.Component {
    state = {
        firstName : "",
        lastName : "",
        courses : [
            {id: 'course1',title : 'Khóa Html Css', description : 'Hay'},
            {id: 'course2',title : 'Khóa Javascript', description : 'Ngon'},
            {id: 'course3',title : 'Khóa ReactJs', description : 'Quá Hay'}
        ]
    }
    
    render() {
        
        return (
            <>
               <Formcomponent />
                <Childcomponent 
                    courses = {this.state.courses}
                />
               
            </>
        )
    }

}
export default MyComponent;