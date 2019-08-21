import eatFruitAction from './eatFruitAction';

export default to => (dispatch,getState) => {


    const { Snake } = getState();
    
    // eslint-disable-next-line default-case
    switch(to){
        case 'left':
            {
                let nextPosition = { ...Snake.position, x:(Snake.position.x - 1) };
                dispatch(eatFruitAction(nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
            }
        break;
        case 'right':
            {
                let nextPosition = { ...Snake.position, x:(Snake.position.x + 1) };
                dispatch(eatFruitAction(nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
            }
        break;
        case 'up':
            {
                let nextPosition = { ...Snake.position, y:(Snake.position.y - 1) };
                dispatch(eatFruitAction(nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
            }
        break;
        case 'down':
            {
                let nextPosition = { ...Snake.position, y:(Snake.position.y + 1) };
                dispatch(eatFruitAction(nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
            }
        break;
    }
}