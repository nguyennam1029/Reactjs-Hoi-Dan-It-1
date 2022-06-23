import React from "react";
import './ListUser'
class ListUser extends React.Component{
   async componentDidMount() {
    let data = await('https://reqres.in/api/users?page=1');
    console.log(data);
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