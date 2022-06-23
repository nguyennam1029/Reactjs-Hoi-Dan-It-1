import React from 'react';
//import fontAwesome
import {FaTrash, FaPenSquare, FaPlus} from 'react-icons/fa';

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
                    <FaPlus/>
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
                                <div className='item-icon'>
                                    <span className='icon icon-delete'><FaTrash /></span>
                                    <span className='icon icon-edit'><FaPenSquare /></span>
                                </div>
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