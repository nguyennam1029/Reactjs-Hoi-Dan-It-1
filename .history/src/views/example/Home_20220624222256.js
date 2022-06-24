import React from "react";
import {connect} from "react-redux";
class Home extends React.Component {
    handleDeleteUser = (item) => {
        console.log(item);
        }
    render() {
        // console.log(this.props.namDev);
        let {userRedux} = this.props
        console.log(userRedux);
        
        return (
            <>
                <h1>
                    Trang chủ
                </h1>
                <div className="list-user">
                    {userRedux && userRedux.length > 0 &&
                        userRedux.map((item, index) => {
                            return (
                                <div className="user" key={item.id}>
                                    
                                        {index + 1} - {item.user}
                                   <span className="delete" onClick={() => this.handleDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
const renderRedux = (state) => {
    return {
        userRedux : state.users
    }
}
// const mapDispatchToProps = (dispatch) => {
//     deleteUserRedux : (userDelete) => dispatch ({type: 'DELETE_USER', payload: userDelete})
// }
export default connect(renderRedux, ) (Home);