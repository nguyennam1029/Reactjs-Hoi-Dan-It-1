import React from 'react';
class ListTodo extends React.Component {
    state = {
        listTodos : [
            {id: 'note1', title: 'HTML'},
            {id: 'note2', title: 'CSS'},
            {id: 'note3', title: 'Javascrip'},
        ]
    }
    //-HANDLE-ADD-TODO
    handleAddTodo = (e) => {
        
    }
    render() {
        let ListTodo = this.state.ListTodos;
        console.log(ListTodo);
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
                {
                 
                }
            </div>  
        </>
        )
    }
        
}
export default ListTodo;