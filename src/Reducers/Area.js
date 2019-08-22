
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
        case 'CHANGE_TAIL_PART_POSITION_ON_AREA':
            return state.map((row,y) => 
                row.map((col,x) => {
                    if(col === `tail_${action.payload.tailIndex}`){
                        return null;
                    }
                    if(x === action.payload.position.x && y === action.payload.position.y){
                        return `tail_${action.payload.tailIndex}`;
                    }
                    return col;
                })
            )
        case 'SET_FRUIT':
            return state.map((row,y) =>
                row.map((col,x) => {
                    if(action.payload.x === x && action.payload.y === y){
                        return 'fruit';
                    }
                    return col;
                })
            )
        case 'DRAW_TAIL':
            return state.map((row,y) =>
                row.map((col,x) => {
                    if(action.payload.x === x && action.payload.y === y){
                        return `tail_${action.payload.index}`;
                    }
                    return col;
                })
            )
        case 'REMOVE_TAIL_PART':
            return state.map((row,y) =>
                row.map((col,x) => {
                    if(col && col.indexOf(action.payload) !== -1){
                        return null;
                    }
                    return col;
                })
            )
        default:
            return state;
    }
}