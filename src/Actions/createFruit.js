function generateRandom(max, exludedNumbers) {
    var num = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    // eslint-disable-next-line no-unused-vars
    for(let number of exludedNumbers){
        if(num === number){
            generateRandom(0,max,exludedNumbers);
            break;
        }
        else{
            return num
        }
    }
}


export default () => (dispatch,getState) => {

    const { Snake,Settings } = getState();


    let fruitPosition = {
        x:null,
        y:null
    }


    let exludedXAxisNumbers = [Snake.position.x];
    let excludedYAxisNumbers = [Snake.position.y];

    Snake.tailParts.forEach(tailPart => {
        exludedXAxisNumbers.push(tailPart.x);
        excludedYAxisNumbers.push(tailPart.y);
    })


    fruitPosition.x = generateRandom((Settings.areaSize - 1),exludedXAxisNumbers);
    fruitPosition.y = generateRandom((Settings.areaSize - 1),excludedYAxisNumbers);


    dispatch({ type:'SET_NEW_FRUIT', payload:fruitPosition });


}