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

export default generateRandom;