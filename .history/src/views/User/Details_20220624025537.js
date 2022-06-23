import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
class Details extends React.Component {
    state = {
        user : {}
    }
   async componentDidMount(id) {
    // const res = await axios.get(`https://reqres.in/api/users/${id}`)
    // console.log(res);
}
    render (){
        console.log(this.props);
        const {user} = this.state;
        // let isEmptyObj= Object.keys(user).length === 0;
             return (
            <>
                <div>
                    Im am : 
                </div>
            </>
        )
    }
}
export default withRouter(Details);