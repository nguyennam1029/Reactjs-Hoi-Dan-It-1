import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
class Details extends React.Component {
    state = {
        user : {}
    }
   async componentDidMount() {
    if(this.props.match.params && this.props.match.params.id) {
        let id = this.props.match.params.id
    }
    const res = await axios.get(`https://reqres.in/api/users/${id}`)
    console.log(res);
}
    render (){
        console.log(this.props);
        const {user} = this.state;
        // let isEmptyObj= Object.keys(user).length === 0;
             return (
            <>
                <div>
                    Im am : {this.props.match.params.id}
                </div>
            </>
        )
    }
}
export default withRouter(Details);