export default (oldSnakePosition,nextSnakePosition) => (dispatch,getState) => {
    
    const { Area,Game } = getState();

    if(Area[nextSnakePosition.y][nextSnakePosition.x] === 'fruit'){
        dispatch({ type:'ADD_SCORE' });
        dispatch({ type:'SET_NEW_SCHEDULED_TAIL_PART', payload:{ 
            y:nextSnakePosition.y,
            x:nextSnakePosition.x
        }})
    }
}