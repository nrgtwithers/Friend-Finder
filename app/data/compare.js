// Find the best match function
var findMatch = function (firstArray, secondArray) {
    var finalArray = []
    secondArray.forEach(secondArrayElement => {
        var choice = []
        for (const i in secondArrayElement) {
            for (const j in firstArray) {
                if (i === j) {
                    choice.push(Math.abs(firstArray[j] - secondArray[i]))
                }
            }
        }
        finalArray.push(choice.reduce((a,b)=> a+b, 0))
    });
    return finalArray;
}
// Find the Worst Match
var leastMatch = function (finalArray){
    Array.min = function (array){
        return Math.min.apply(Math, array)
    };
    var smallestNumber = Array.min(finalArray)
    var indexOfSmall = [];
    for (var i = 0; i<finalArray.length; i++){
        var element = finalArray[i];
        if (element == smallestNumber){
            indexOfSmall.push(finalArray.indexOf(smallestNumber, i))
        }
    }
    return indexOfSmall;
}

// To Export the functions
module.exports.findMatch = findMatch;
module.exports.leastMatch = leastMatch;