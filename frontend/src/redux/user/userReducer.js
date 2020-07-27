const INITIAL_STATE = {
    username: localStorage.getItem('username'),
    userid: localStorage.getItem('userid')
}

const userReducer = ( state = INITIAL_STATE , action)=>{
    switch(action.type){

        case 'SAVE_USER':
            
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('userid', action.payload.id)

            return {
                ...state,
                username: action.payload.username,
                userid: action.payload.id
            }
        
        case 'LOG_OUT':

            localStorage.setItem('username', undefined)
            localStorage.setItem('userid', undefined)
            return{
                user: undefined,
                userid: undefined
            }
            

        default:
            return state
    }
}

export default userReducer;