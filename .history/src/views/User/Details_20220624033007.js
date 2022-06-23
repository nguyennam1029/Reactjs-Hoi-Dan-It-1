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
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        // let data = res.data.data;
        this.setState ({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }
}
handleBackHome = () => {
    this.props.history.push("/User")
}
    render (){
        console.log(this.props);
        const {user} = this.state;
        let isEmptyObj= Object.keys(user).length === 0;
             return (
            <>{isEmptyObj === false &&
            
                <div>
                    <h2>Name : {this.state.user.first_name} {this.state.user.last_name} </h2>
                    <p>Email : {this.state.user.email}</p>
                    <img src={this.state.user.avatar} /> 
                    <button type="button" className="btn"
                            onClick={() => this.handleBackHome()}
                    >Back</button>
                </div>
            }
            </>
        )
    }
}
export default withRouter(Details);