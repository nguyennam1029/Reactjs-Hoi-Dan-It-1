import React from 'react';
import {toast} from 'react-toastify';
//import fontAwesome
import {FaTrash, FaPenSquare} from 'react-icons/fa';

import FormAddTodo from './formAddTodo';
class ListTodo extends React.Component {
    state = {
        listTodos : [
            {id: 'note1', title: 'HTML'},
            
        ]
    }
    //-HANDLE-ADD-TODO
    handleAdd = (todo) => {
        
        let currenTodo = this.state.listTodos
            currenTodo.push(todo)
        this.setState  (
            {
            // listTodos : [...this.state.listTodos, todo]
            listTodos : currenTodo
        }
        )
        toast.success('Thành công', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,        
            });
        }
        //DELETE
    handleDeleteTodo = (item) => {
        console.log(item);
    }
    render() {
        let {listTodos} = this.state;
        return (
        <> 
            <FormAddTodo 
                handleAdd = {this.handleAdd}
            />
            <div className='form-content'>
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item, index) => {
                        return (
                            <div className='form-item' key={item.id}>
                                <p className='title'>
                                    {index + 1} : {item.title}
                                </p>
                                <div className='item-icon'>
                                    <span className='icon icon-delete'
                                    onClick={() => this.handleDeleteTodo(item)}
                                    ><FaTrash />
                                    </span>
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