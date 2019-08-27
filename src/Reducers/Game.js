const initialState = {
    score:0,
    status:'passive'
}


export default (state = initialState,action) => {

    switch(action.type){
        
        case 'RESET_GAME_SCORE':
            return {
                ...state,
                score:0,
            }
        case 'SET_GAME_STATUS':
            return {
                ...state,
                status:action.payload
            }
        case 'SET_TAIL_LENGTH':
            return {
                ...state,
                tailLength:action.payload
            }
        case 'ADD_SCORE':
            return  {
                ...state,
                score: (state.score + 10)
            }
        default:
            return state;
    }
}