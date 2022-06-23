import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import './ListUser.scss'
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
    handleItemId = (item) => {
        let id = item.id;
        this.props.history.push(id)
        console.log(this.props);
    }
    render() {
        console.log(this.props);
        const {listUser} = this.state;
        return (
            <>
                <div className="list-user">
                    
                        {listUser && listUser.length > 0 &&
                            listUser.map((item,index) => {
                            
                            return (
                                <div className="item" key={index}>
                                    
                                        <h3 className="content-heading"
                                            onClick={() => this.handleItemId(item)}
                                        >
                                            {item.first_name} {item.last_name}
                                        </h3>
                                        
                                </div>
                            )
                           
                        })
                        }
                    
                </div>
            </>
        )
    }
}
export default withRouter(ListUser);