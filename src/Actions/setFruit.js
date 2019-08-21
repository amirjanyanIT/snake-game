import generateRandomNumber from '../generateRandomNumber';


export default () => (dispatch,getState) => {
    window.generateFruit = setInterval(() => {
        const { Snake,Settings,Area } = getState();
        let hasFruit = false;
    
        // eslint-disable-next-line no-unused-vars
        for(let row of Area){
            // eslint-disable-next-line no-unused-vars
            for(let col of row){
                if(col === 'fruit'){
                    hasFruit = true;
                }
            }
        }
    
        if(!hasFruit){
            let x = generateRandomNumber(Settings.areaSize,new Array(Snake.position.x));
            let y = generateRandomNumber(Settings.areaSize,new Array(Snake.position.y));
    
            dispatch({ type:'SET_FRUIT', payload:{x,y} })
        }
    
    },1000);
}
