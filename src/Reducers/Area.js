
const initialState = [];

export default (state = initialState, action) => {

    switch(action.type){
        case 'SET_AREA':
            return action.payload;
        case 'CHANGE_SNAKE_POSITION_ON_AREA':
            return state.map((row,y) =>
                row.map((col,x) => {
                    if(action.payload.x === x && action.payload.y === y){
                        return 'head';
                    }
                    return null;
                })
            )
        default:
            return state;
    }
}