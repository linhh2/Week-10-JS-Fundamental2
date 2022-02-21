function calAverage(array){
    const sum = array.reduce((a,b) => a + b,0 );
    const avg = (sum / array.length) || 0;

    return avg
}

const final = calAverage([1, 2, 3, 4, 5]);
console.log(final);