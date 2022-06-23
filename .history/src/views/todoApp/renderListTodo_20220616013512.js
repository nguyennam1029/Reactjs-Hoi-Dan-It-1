import React from 'react';
class TodoForm extends React.Component {
    state = {
        
    }
    render() {
        return (
        <>
            {
            <div className='form'>
                <input className = 'form-input' type='text' placeholder='Thông tin'/>
                <botton className = 'form-btn'>Add</botton>
            </div>
            }
        </>
        )
    }
        
}
export default TodoForm;