const initialState = {
    position:{
        x:0,
        y:0
    },
    gameStatus:'passive'
}


export default (state=initialState, action) => {

    switch(action.type){
        case 'SET_SNAKE_POSITION':
            return {
                ...state,
                position:{
                    ...action.payload
                }
            }
        case 'SET_GAME_STATUS':
            return {
                ...state,
                gameStatus:action.payload
            }
        default:
            return state;
    }
}