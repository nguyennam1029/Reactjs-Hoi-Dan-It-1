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
    handleAddTodo = () => {
       
        
        this.props.handleAdd(
            {
                id : Math.floor(Math.random()*1000),
                title : this.state.title,
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
                    onChange = { (e) => this.handleInputValue(e)}
                    />
                <button type='button' className = 'form-btn'
                    onClick={()=> this.handleAddTodo()}   
                >
                    <FaPlus/>
                </button>
                

            </div>
        </>
        )
    }
        
}
export default FormAddTodo;