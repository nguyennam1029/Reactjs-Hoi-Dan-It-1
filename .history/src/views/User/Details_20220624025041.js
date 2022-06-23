import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
class Details extends React.Component {
    state = {
        user : {}
    }
   async componentDidMount() {
    const res = await axios.get('https://reqres.in/api/users/2')
    console.log(res);
}
    render (){
        const {user} = this.state;
        let isEmptyObj= Object.keys(user).length === 0;
             return (
            <>

            </>
        )
    }
}
export default withRouter(Details);