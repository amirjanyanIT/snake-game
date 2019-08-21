
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
                    if(col !== 'head'){
                        return col;
                    }
                    else{
                        return null;
                    }
                })
            )
        case 'SET_FRUIT':
            return state.map((row,y) =>
            row.map((col,x) => {
                if(action.payload.x === x && action.payload.y === y){
                    return 'fruit';
                }
                return null;
            })
        )
        default:
            return state;
    }
}