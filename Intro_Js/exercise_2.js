/**
 * sumofPositiveNumbers takes an array.
 * It evaluates if there is a negative number, if any throws an error.
 * If there is no negative number, then computes the sum of all positive numbers.
 * @param {*} nArray - Array. 
 */

const sumofPositiveNumbers = (nArray) => {
return new Promise((resolve, reject) =>{    
    const Positive = nArray.filter(n => n>=0);
    const isPositive = Positive.length == nArray.length ? true:false;
    if (isPositive){
        const sumPositive = Positive.reduce((acc,n)=>acc+n,0)
        resolve(sumPositive);
    }
    else {
        reject(new Error("There are negative numbers in the array"));
    }

})
};


const input = [[1,2,3,4], [1,-2,3,-4], [10,20,30,40], [10,-20,30,-40]];
for(const val of input){    
    sumofPositiveNumbers(val)
    .then(result => {
    console.log("The sum of positive numbers is: ", result);
})
    .catch(error => {
    console.log(error.message);
});   
};