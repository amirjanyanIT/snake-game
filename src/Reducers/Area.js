
const initialState = [];

export default (state = initialState, action) => {

    switch(action.type){
        case 'SET_AREA':
            return action.payload;
        default:
            return state;
    }
}