export default (nextSnakePosition) => (dispatch,getState) => {
    
    const { Area } = getState();

    if(Area[nextSnakePosition.y][nextSnakePosition.x] === 'fruit'){
        dispatch({ type:'ADD_SCORE' });
    }
}