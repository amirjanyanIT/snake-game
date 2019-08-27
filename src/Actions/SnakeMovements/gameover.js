import _ from 'lodash';

export default () => (dispatch,getState) => {

    const { Snake } = getState();


    let isGameOver = false;


    for(let tailPart of Snake.tailParts){

        if(_.isEqual(Snake.position,tailPart)){
            isGameOver = true;
        }
    }


    if(isGameOver){
        dispatch({ type:'SET_GAME_STATUS', payload:'gameover' });
    }

}