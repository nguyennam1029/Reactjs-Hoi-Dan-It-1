import React from "react";
import axios from "axios";
import './ListUser'
class ListUser extends React.Component{
    state = {
        listUser: [],
    }
   async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=1');
    this.setState({
        listUser : res && res.data && res.data.data ? res.data.data : []
    })
    }
    render() {
        const {listUser} = this.state;
        return (
            <>
                <div className="list-user">
                    
                        {listUser.map((item,index) => {
                            
                            <div className="item" key={index}>
                                <img src={item.avatar} />
                                <div className="content">
                                    <h3 className="content-heading">
                                        {item.first_name} {item.last_name}
                                    </h3>
                                </div>      
                            </div>
                           
                        })}
                    
                </div>
            </>
        )
    }
}
export default ListUser;