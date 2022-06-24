let initState = {
    users: [
        {id: 1, user: 'Nguyen van nam'},
        {id: 2, user: 'Huyen Duong'},
        {id: 3, user: 'Anh Yeu Em'},
    ]
}

const rootReducer = (state = initState,action) => {
    return state
}

export default rootReducer;