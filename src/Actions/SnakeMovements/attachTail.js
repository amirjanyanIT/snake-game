import _ from 'lodash';

export default () => (dispatch,getState) => {
    
    const { Snake } = getState();

    if(Snake.tailParts.length && !_.isEqual(Snake.position,Snake.tailParts[0])){

        let movedTailParts = [];
        
        Snake.tailParts.forEach((tailPart,key) => {
            if(key === 0){
                movedTailParts.push(Snake.oldPosition);
            }
            else{
                movedTailParts.push(Snake.tailParts[(key-1)]);
            }
        })

        dispatch({ type:'SET_MOVED_TAIL_PARTS', payload:movedTailParts });
    }
}