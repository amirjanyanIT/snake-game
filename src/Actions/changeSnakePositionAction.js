import drawTailAction from './drawTail';
import eatFruitAction from './eatFruitAction';
import attachTailAction from './attachTail';

export default to => (dispatch,getState) => {


    const { Snake,Area,Game } = getState();
    
    // eslint-disable-next-line default-case
    switch(to){
        case 'left':
            {
                let nextPosition = { ...Snake.position, x:(Snake.position.x - 1) };
                dispatch(eatFruitAction(Snake.position,nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_GOING_WAY', payload: 'left' });
                dispatch(drawTailAction(nextPosition));
                dispatch(attachTailAction());
            }
        break;
        case 'right':
            {
                let nextPosition = { ...Snake.position, x:(Snake.position.x + 1) };
                dispatch(eatFruitAction(Snake.position,nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_GOING_WAY', payload: 'right' });
                dispatch(drawTailAction(nextPosition));
                dispatch(attachTailAction());
            }
        break;
        case 'up':
            {
                let nextPosition = { ...Snake.position, y:(Snake.position.y - 1) };
                dispatch(eatFruitAction(Snake.position,nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_GOING_WAY', payload: 'up' });
                dispatch(drawTailAction(nextPosition));
                dispatch(attachTailAction());
            }
        break;
        case 'down':
            {
                let nextPosition = { ...Snake.position, y:(Snake.position.y + 1) };
                dispatch(eatFruitAction(Snake.position,nextPosition));
                dispatch({ type:'CHANGE_SNAKE_POSITION_ON_AREA', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_POSITION', payload: nextPosition });
                dispatch({ type:'SET_SNAKE_GOING_WAY', payload: 'down' });
                dispatch(drawTailAction(nextPosition));
                dispatch(attachTailAction());
            }
        break;
    }
}