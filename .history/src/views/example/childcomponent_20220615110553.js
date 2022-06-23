import React from 'react';
    // -CÁCH RENDER BẰNG CLASS COMPONENT
class Childcomponent extends React.Component {
    state = {
        showHide : false,
    }
    handelShowHide = ()=> {
            this.setState(
                {
                    showHide : !this.state.showHide
                }
            )
        }
    render() {
        //Destructuring assignment -: lưu ý: phải trùng key tưc trùng tên vs nhau
        console.log("vcl",this.props);

        let {courses} = this.props;
        let {showHide} = this.state;
        
        
        //if showHide === false thi hiện show còn k thì hiện hide
        return (
        <>
            {
                showHide === false ?
            
            <div>
                <button onClick={() => this.handelShowHide()}>Show</button>
            </div>                
            
            :
            
                
            <>
                <div className='course-list'>
                    {
                        courses.map((item, index) => {
                            return (
                                

                                <div className='courses-item' key={item.id}>
                                    <p>{item.title}-{item.description}</p>
                                </div>
                                
                            )
                        })
                    }
                </div>
                
                <div>
                    <button onClick={()=> this.handelShowHide()}>Hide</button>
                </div>
            </>
            }
            </>
                            
        
        )
    }
}
    // -CÁCH RENDER BẰNG ARROW FUNTION COMPONENT

// const Childcomponent = (props) => {
//        let {courses} = props;

//     return (
//         <>
            
//            <div className='course-list'>
//                {
//                    courses.map((item, index) => {
//                        return (
//                            <div className='courses-item' key={item.id}>
//                                <h2>{item.title}</h2>
//                                <p>{item.description}</p>
//                            </div>
//                        )
//                    })
//                }
//            </div>
//        </>
//     )
// }
export default Childcomponent;