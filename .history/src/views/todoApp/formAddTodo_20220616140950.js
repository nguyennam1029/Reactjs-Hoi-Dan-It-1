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
        // console.log(e.target);
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
                <botton type='botton' className = 'form-btn'
                    onclick={()=> this.handleAddTodo()}    
                >
                    <FaPlus/>
                </botton>
            </div>
        </>
        )
    }
        
}
export default FormAddTodo;