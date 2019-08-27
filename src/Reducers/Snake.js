const initialState = {
    position:{
        x:0,
        y:0
    },
    oldPosition:{
        x:0,
        y:0
    },
    tailParts:[],
    scheduledTailPart:null,
    goingTo: null,
    fruit:null
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
        case 'SET_NEW_SCHEDULED_TAIL_PART':
            return {
                ...state,
                scheduledTailPart: action.payload
            }
        case 'REMOVE_SCHEDULED_TAIL_PART':
            return {
                ...state,
                scheduledTailPart:null
            }
        case 'SET_SNAKE_GOING_TO':
            return {
                ...state,
                goingTo:action.payload
            }
        case 'SET_NEW_TAIL_PART':
            return {
                ...state,
                tailParts:[...state.tailParts,action.payload]
            }
        case 'SET_MOVED_TAIL_PARTS':
            return {
                ...state,
                tailParts:action.payload
            }
        case 'SET_NEW_FRUIT':
            console.log(action.payload);
            return {
                ...state,
                fruit:action.payload
            }
        case 'REMOVE_FRUIT':
                return {
                    ...state,
                    fruit:null
                }
        case 'REMOVE_TAIL_PARTS':
            return {
                ...state,
                tailParts:[]
            }
        case 'SET_SNAKE_OLD_POSITION':
            return {
                ...state,
                oldPosition:action.payload
            }
        default:
            return state;
    }
}