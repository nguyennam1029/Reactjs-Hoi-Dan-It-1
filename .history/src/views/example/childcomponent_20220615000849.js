import React from 'react';
class Childcomponent extends React.Component {
    render() {
        //Destructuring assignment -: lưu ý: phải trùng key tưc trùng tên vs nhau
        console.log(this.props);

        let {courses} = this.props;
        return (
        <>
            
            <div className='course-list'>
                {
                    courses.map((item, index) => {
                        return (
                            <div className='courses-item' key={item.id}>
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