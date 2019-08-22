export default () => (dispatch,getState) => {

    const { Snake,Area } = getState();

    if(!Snake.scheduledTailParts.length){
        return;
    }
    
    Snake.scheduledTailParts.forEach((tailPart,key) => {
        if(Area[tailPart.y][tailPart.x] !== 'head'){
            tailPart.index = Snake.tailLength;
            dispatch({ type:'REMOVE_SCHEDULED_TAIL_PART', payload:tailPart })
            dispatch({ type:'SET_NEW_TAIL_PART_POSITION', payload:tailPart });
        }
    });
}