export default to => (dispatch,getState) => {


    const { Snake } = getState();
    
    // eslint-disable-next-line default-case
    switch(to){
        case 'left':
            dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: { ...Snake.position, x:(Snake.position.x - 1) } });
            dispatch({ type:'SET_SNAKE_POSITION', payload: { ...Snake.position, x:(Snake.position.x - 1) } });
        break;
        case 'right':
            dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: { ...Snake.position, x:(Snake.position.x + 1) } });
            dispatch({ type:'SET_SNAKE_POSITION', payload: { ...Snake.position, x:(Snake.position.x + 1) } });
        break;
        case 'up':
            dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: { ...Snake.position, y:(Snake.position.y - 1) } });
            dispatch({ type:'SET_SNAKE_POSITION', payload: { ...Snake.position, y:(Snake.position.y - 1) } });
        break;
        case 'down':
            dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: { ...Snake.position, y:(Snake.position.y + 1) } });
            dispatch({ type:'SET_SNAKE_POSITION', payload: { ...Snake.position, y:(Snake.position.y + 1) } });
        break;
    }

    
}