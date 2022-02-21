function points(twoPointers, threePointers) {
    const totalPoint = (twoPointers * 2) + (threePointers * 3);
    return totalPoint;
}

const score = points(3,2);
console.log(score);