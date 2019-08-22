const initialState = {
    position:{
        x:0,
        y:0
    },
    tailPartPositions:[],
    scheduledTailParts: [],
    goingTo:null,
    gameStatus:'passive',
    tailLength:0
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
        case 'SET_SNAKE_GOING_WAY':
            {
                return{
                    ...state,
                    goingTo:action.payload
                }
            }
        case 'SET_GAME_STATUS':
            return {
                ...state,
                gameStatus:action.payload
            }
        case 'SET_NEW_SCHEDULED_TAIL_PART':
            return {
                ...state,
                tailLength: state.tailLength + 1,
                scheduledTailParts: [...state.scheduledTailParts, action.payload]
            }
        case 'SET_NEW_TAIL_PART_POSITION':
            return {
                ...state,
                tailPartPositions: [...state.tailPartPositions, action.payload]
            }
        case 'SET_NEW_TAIL_POSITIONS':
            return {
                ...state,
                tailPartPositions: action.payload
            }
        case 'REMOVE_SCHEDULED_TAIL_PART':
            return {
                ...state,
                scheduledTailParts: state.scheduledTailParts.filter(tailPart => {
                    if(tailPart.x === action.payload.x && tailPart.y === action.payload.y){
                        return false;
                    }
                    return true;
                })
            }
        default:
            return state;
    }
}