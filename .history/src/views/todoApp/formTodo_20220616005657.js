import React from 'react';
class TodoForm extends React.Component {
    render() {
        return (
        <>
            {
            <div className='form'>
                <input className = 'form-input' type='text' />
                <botton className = 'form-btn'>Add</botton>
            </div>
            }
        </>
        )
    }
        
}
export default TodoForm;