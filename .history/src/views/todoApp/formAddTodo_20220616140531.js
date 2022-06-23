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
    handleAddTodo (e) {
        console.log(e.target);
        alert("vv")
        // this.props.handleAdd(
        //     {
        //         id : Math.floor(Math.random()*1000),
        //         title : this.state.title,
        //     }
        // )
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
                <span className = 'form-btn'
                    onclick={(e)=> this.handleAddTodo(e)}    
                >
                    {/* <FaPlus/> */}
                    Add
                </span>
            </div>
        </>
        )
    }
        
}
export default FormAddTodo;