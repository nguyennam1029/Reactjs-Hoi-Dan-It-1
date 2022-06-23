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
        let {ListTodos} = this.state;
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
                    ListTodos && ListTodos.length > 0 &&

                    ListTodos.map((item, index) => {
                        return (
                            <div className='form-content--item' key={item.id}>
                                <p className='item-title'>
                                    {item.title}
                                </p>
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