import React from "react";
import axios from "axios";
import './ListUser'
class ListUser extends React.Component{
   async componentDidMount() {
    let data = await axios.get('https://reqres.in/api/users?page=1');
    console.log(data.data);
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