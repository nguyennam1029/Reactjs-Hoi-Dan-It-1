import React from "react";
import {connect} from "react-redux";
class Home extends React.Component {
    render() {
        console.log(this.props.namDev);
        return (
            <>
                <h1>
                    Trang chủ
                </h1>
            </>
        )
    }
}
const renderRedux = (state) => {
    return {
        namDev : state.users
    }
}
export default connect(renderRedux) (Home);