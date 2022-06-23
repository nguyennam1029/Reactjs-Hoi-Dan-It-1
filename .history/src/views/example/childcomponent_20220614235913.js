import React from 'react';
class Childcomponent extends React.Component {
    render() {
        //Destructuring assignment -: lưu ý: phải trùng key tưc trùng tên vs nhau

        let {name, job, courses} = this.props;
        return (
        <>
            {/* <div>
                <h3>Mobile {name} and {job} </h3>
            </div> */}
            <div className='course-list'>
                {
                    courses.map((item, index) => {
                        return (
                            <div className='course-item'>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
        )
    }
}
export default Childcomponent;