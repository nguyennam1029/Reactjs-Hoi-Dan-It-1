import React from 'react';
import {FaTrash} from 'react-icons/fa';
class ListTodo extends React.Component {
    state = {
        listTodos : [
            {id: 'note1', title: 'HTML'},
            {id: 'note2', title: 'CSS'},
            {id: 'note3', title: 'Javascrip'},
        ]
    }
    //-HANDLE-ADD-TODO
  
    render() {
        let {listTodos} = this.state;
        return (
        <> 
            <div className='form'>
                <input className = 'form-input' type='text' placeholder='Thông tin'/>
                <botton className = 'form-btn'
                    onclick={(e)=> this.handleAddTodo(e)}    
                >
                    Add
                </botton>
            </div>
            <div className='form-content'>
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item, index) => {
                        return (
                            <div className='form-item' key={item.id}>
                                <p className='title'>
                                    {item.id} - {item.title}
                                </p>
                                <span><FaTrash /></span>
                            </div>
                        )
                    })
                 
                }
            </div>  
        </>
        )
    }
        
}
export default ListTodo;