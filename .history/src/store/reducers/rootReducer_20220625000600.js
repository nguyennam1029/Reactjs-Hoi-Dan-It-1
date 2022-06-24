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
            console.log("check ",action);
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id)
            // console.log(users);
            return {
                ...state, users
            }
            break;
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 11111); 
            let user = {id : id, user : `Name ${id}`};
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state
            break;
    }
    
}

export default rootReducer;