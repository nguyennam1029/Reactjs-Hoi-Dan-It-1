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
        listUser : res && res.leght > 0 ? res.data.data : []
    })
    }
    render() {
        return (
            <>
                <h1>
                    List User
                </h1>
            </>
        )
    }
}
export default ListUser;