function createArea(areaSize){

    let area = [];

    for(let i=0;i<areaSize;i++){
        area.push([]);
        for(let j=0;j<areaSize;j++){
            area[i].push({
                y:i,
                x:j
            });
        }
    }

    return area;
}

function getInitalSnakePosition(areaSize){
    
    /* Center of area */
    return {
        x:(areaSize / 2 + 0.5),
        y:(areaSize / 2 + 0.5)
    }

}


export default () => (dispatch,getState) => {

    const { Settings } = getState();

    dispatch({ type:'SET_AREA', payload: createArea(Settings.areaSize) });
    dispatch({ type:'SET_SNAKE_POSITION', payload: getInitalSnakePosition(Settings.areaSize) });
    dispatch({ type:'REMOVE_TAIL_PARTS' });
}