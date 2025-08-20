const intialState = {
    user: null,
    loadingUser: false
}

const userReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('action LOGIN_SUCCESS: ', action);
            return {
                ...state,
                user: action.payload
            }
        case 'SET_USER_DATA':
            console.log('action SET_USER_DATA: ', action);
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;