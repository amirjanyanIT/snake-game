import newFruitAction from './newFruit';

import _ from 'lodash';

export default () => (dispatch,getState) => {

    const { Snake } = getState();

    if(_.isEqual(Snake.position,Snake.fruit)){

        dispatch({ type:'ADD_SCORE' });
        dispatch({ type:'REMOVE_FRUIT' });
        dispatch({ type:'SET_NEW_SCHEDULED_TAIL_PART', payload:Snake.position });



        dispatch(newFruitAction());
    }
}