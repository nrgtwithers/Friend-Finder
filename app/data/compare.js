// // Find the best match function
var findMatch = function (firstArray, secondArray) {
    var finalArray = [];
    secondArray.forEach(secondArrayElement => {
        var temp = [];
        for (i in secondArrayElement) {
            for (j in firstArray) {
                if (i == j) {
                    temp.push(Math.abs(firstArray[j] - secondArrayElement[i]));
                }
            }
        }
        // sum temp element, and add to finalArray
        finalArray.push(temp.reduce((a, b) => a + b, 0));
    });
    return finalArray;
}

var leastMatch = function(finalArray){

    Array.min = function (array) {
        return Math.min.apply(Math, array);
    }    
    var smallestNumber = Array.min(finalArray);
    var indexOfSmall = [];
    for (let i = 0; i < finalArray.length; i++) {
        const element = finalArray[i];
        if (element == smallestNumber) {
            indexOfSmall.push(finalArray.indexOf(smallestNumber, i));
        }
    }
    return indexOfSmall;
        
}
module.exports.findMatch = findMatch;
module.exports.leastMatch = leastMatch;