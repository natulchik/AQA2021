function showTheText(dynamicParameter, staticParameter='Hello') {
    let anotherStrInFunction = 'shrek';
    let result = staticParameter + ' ' + dynamicParameter  + ' and ' + anotherStrInFunction;
    // console.log(result);
    return result;
}
// let resultOfFunction = showTheText('Wolf');
// console.log(resultOfFunction);

let takeText = function() {
    let strForFunctionExpression = 'Hello from this function';
    console.log(strForFunctionExpression);
}
// takeText();

let sumsum = (a, b) => {
    return a + b};

// let resultOfArrowFunction = sum(1,3);
// console.log(resultOfArrowFunction);

// export {showTheText, sumsum};
module.exports = sumsum;