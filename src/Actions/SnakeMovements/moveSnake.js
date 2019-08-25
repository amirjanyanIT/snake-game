import eatFruitAction from './eatFruit';
import newTailPartAction from './newTailPart';
import attachTailAction from './attachTail';

export default (moveTo) => (dispatch,getState) => {

    const { Snake,Settings } = getState();

    let goTo = { ...Snake.position };

    // eslint-disable-next-line
    switch(moveTo){
        case 'left':

                Snake.position.x !== 0 ? goTo.x-- : goTo.x = (Settings.areaSize - 1) 
                dispatch({ type:'SET_SNAKE_GOING_TO', payload:moveTo})
                dispatch({ type:'SET_SNAKE_POSITION', payload:goTo });     
        break;
        case 'right':

                Snake.position.x !== (Settings.areaSize - 1) ? goTo.x++ : goTo.x = 0 
                dispatch({ type:'SET_SNAKE_GOING_TO', payload:moveTo})
                dispatch({ type:'SET_SNAKE_POSITION', payload:goTo });
        break;
        case 'up':

                Snake.position.y !== 0 ? goTo.y-- : goTo.y = (Settings.areaSize - 1)
                dispatch({ type:'SET_SNAKE_GOING_TO', payload:moveTo})
                dispatch({ type:'SET_SNAKE_POSITION', payload:goTo });
        break;
        case 'down':

                Snake.position.y !== (Settings.areaSize - 1) ? goTo.y++ : goTo.y = 0
                dispatch({ type:'SET_SNAKE_GOING_TO', payload:moveTo})
                dispatch({ type:'SET_SNAKE_POSITION', payload:goTo }); 
        break;
    }
    dispatch({ type:'SET_SNAKE_OLD_POSITION', payload:Snake.position });
    
    dispatch(eatFruitAction());
    dispatch(newTailPartAction());

    dispatch(attachTailAction());
}