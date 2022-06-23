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
  
    render() {
        let {listTodos} = this.state;
        console.log(listTodos);
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