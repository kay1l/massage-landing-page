const intialState = {
    user: null,
    loadingUser: false
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;