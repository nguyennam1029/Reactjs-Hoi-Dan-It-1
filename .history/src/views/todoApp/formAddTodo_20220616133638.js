import React from 'react';
class FormAddTodo extends React.Component {
    state = {
        
    }
    render() {
        return (
        <>
            <div className='form'>
                <input className = 'form-input' type='text' placeholder='Thông tin'/>
                <botton className = 'form-btn'
                    onclick={(e)=> this.handleAddTodo(e)}    
                >
                    <FaPlus/>
                </botton>
            </div>
        </>
        )
    }
        
}
export default FormAddTodo;