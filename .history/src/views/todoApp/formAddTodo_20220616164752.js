import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {toast} from 'react-toastify';

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
    handleAddTodo =() => { 
       if(!this.state.title) {
            toast.error('Vui lòng thử lại', {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
            });
            return ;
        }
        let todo =  {
                id : Math.floor(Math.random()*1000),
                title : this.state.title,
            }     
        
        this.props.handleAdd(todo)
        this.setState(
            {
                title: ''
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