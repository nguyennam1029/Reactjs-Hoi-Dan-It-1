import React from 'react';
import {FaPlus} from 'react-icons/fa';

class FormAddTodo extends React.Component {
    state = {
        title: '',
    }
    //Lấy value
    handleInputValue =(e) => {
        this.setState(
            {
                title : e.target.value
            }
        )
    }
    render() {
        let {title} = this.state
        return (
        <>
            <div className='form'>
                <input className = 'form-input' 
                    type='text' 
                    placeholder='Thông tin'
                    value={title}
                    onChange = { (e) => handleInputValue(e)}
                    />
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