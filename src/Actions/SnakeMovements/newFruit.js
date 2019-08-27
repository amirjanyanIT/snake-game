import generateRandomNumber from '../../Functions/generateRandomNumber';


export default () => (dispatch,getState) => {

    const { Snake,Settings } = getState();


    let excludedYaxisNumbers = [Snake.scheduledTailPart.y];
    let excludedXaxisNumber = [Snake.scheduledTailPart.x];



    if(Snake.tailParts.length){
        Snake.tailParts.forEach(tailPart => {
            excludedYaxisNumbers.push(tailPart.y)
            excludedXaxisNumber.push(tailPart.x)
        });
    }
    
    excludedXaxisNumber = [...new Set(excludedXaxisNumber)];
    excludedYaxisNumbers = [...new Set(excludedYaxisNumbers)];

    
    let fruitPosition = {};

    fruitPosition.y = generateRandomNumber((Settings.areaSize - 1),excludedYaxisNumbers)
    fruitPosition.x = generateRandomNumber((Settings.areaSize - 1),excludedXaxisNumber)


    

    dispatch({ type:'SET_NEW_FRUIT', payload:fruitPosition });
}