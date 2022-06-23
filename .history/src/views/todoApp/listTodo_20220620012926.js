import React from 'react';
import {toast} from 'react-toastify';
//import fontAwesome
import {FaTrash, FaPenSquare} from 'react-icons/fa';

import FormAddTodo from './formAddTodo';
class ListTodo extends React.Component {
    state = {
        listTodos : [
            {id: 'note1', title: 'Html'},
            {id: 'note2', title: 'Css'},
            {id: 'note3', title: 'Javascrip'},
            {id: 'note4', title: 'Reactjs'},
            
        ],
        editTodo: {}
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
        toast.success('Thêm thành công', {
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
    handleDeleteTodo = (todo) => {
        let currenList = this.state.listTodos;
        currenList = currenList.filter(item => item.id !== todo.id )
        this.setState(
            {
                listTodos : currenList,
            }
        )
        toast.success('Xóa thành công', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,        
            });
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        }) 
    }

    onchangeEditTodo = (event) => {
       console.log(event.target.value);
        let editTodoCopy ={...this.state.editTodo}
            editTodoCopy.title = e.target.value;
            console.log(editTodoCopy);
        this.setState({
            listTodos: editTodoCopy
        })
    }
    render() {
        let {listTodos,editTodo} = this.state;
        let emptyEditTodo =Object.keys(editTodo).length === 0;
        console.log(emptyEditTodo);
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
                            {emptyEditTodo === true ?
                                <p className='title'>
                                    {index + 1} : {item.title}
                                </p>
                                :
                                <>
                                    {editTodo.id === item.id ?
                                    <p className='title'>
                                        {index + 1} : <input value={editTodo.title} 
                                         onChange={(event) => this.onchangeEditTodo(event)}   
                                        />
                                    </p>
                                    :
                                    <p className='title'>
                                        {index + 1} : {item.title}
                                    </p>
                                    }
                                </>
                            }
                                <div className='item-icon'>
                                    <span className='icon icon-delete'
                                    onClick={() => this.handleDeleteTodo(item)}
                                    ><FaTrash />
                                    </span>
                                    <span className='icon icon-edit'
                                    onClick={() => this.handleEditTodo(item)}
                                    ><FaPenSquare /></span>
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