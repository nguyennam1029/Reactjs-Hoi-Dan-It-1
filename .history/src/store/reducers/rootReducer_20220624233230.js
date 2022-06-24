let initState = {
    users: [
        {id: 1, user: 'Nguyen van nam'},
        {id: 2, user: 'Huyen Duong'},
        {id: 3, user: 'Anh Yeu Em'},
    ]
}

const rootReducer = (state = initState,action) => {
    switch (action.type) {
        case 'DELETE_USER':
            
            break;
    
        default:
            return state
            break;
    }
    
}

export default rootReducer;