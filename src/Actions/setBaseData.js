function createArea(size){
    
    let area = [];

    for(let i=0;i<size;i++){
        area.push([]);
        for(let j=0;j<size;j++){
            area[i][j] = null;
        }
    }

    return area;
}

export default () => dispatch => {

    // Create game area
    const area = createArea(31);



    // Set inital snake position at center
    area[(area.length / 2 + 0.5)][(area.length / 2 + 0.5)] = 'head';
    
    dispatch({ type:'SET_SNAKE_POSITION', payload:{ x:(area.length / 2 + 0.5),y:(area.length / 2 + 0.5) } });
    dispatch({ type:'SET_AREA', payload:area });
}