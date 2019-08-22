export default () => (dispatch, getState) => {
    const { Area, Snake } = getState();
    if (Snake.tailPartPositions.length) {

        let newTailPartPositions = [];
        
        Snake.tailPartPositions.forEach((tailPart,key) => {
            if(tailPart.index === 1){

                // eslint-disable-next-line default-case
                switch(Snake.goingTo){
                    case 'left':
                        newTailPartPositions.push({
                            ...tailPart,
                            x:Snake.position.x + 1,
                            y:Snake.position.y
                        });
                    break;
                    case 'right':
                        newTailPartPositions.push({
                            ...tailPart,
                            x:Snake.position.x - 1,
                            y:Snake.position.y
                        });
                    break;
                    case 'up':
                        newTailPartPositions.push({
                            ...tailPart,
                            x:Snake.position.x,
                            y:Snake.position.y + 1
                        });
                    break;
                    case 'down':
                        newTailPartPositions.push({
                            ...tailPart,
                            x:Snake.position.x,
                            y:Snake.position.y - 1
                        });
                    break;
                }
                
            }
            else{
                newTailPartPositions.push({
                    ...tailPart,
                    x:Snake.tailPartPositions[key - 1].x,
                    y:Snake.tailPartPositions[key - 1].y,
                })
            }
        });

        dispatch({ type:'SET_NEW_TAIL_POSITIONS', payload:newTailPartPositions });

    }
}
