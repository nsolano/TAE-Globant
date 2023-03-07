/**
 * MultipleofTen takes any argument.
 * It evaluates the type of the input, and if it is a number then evaluates
 * the result of the modulo to check if is multiple of 10.
 * The return value is a string.
 * @param {*} value - Any argument 
 */

function MultipleofTen (value) {
  const typevalue = typeof value;  
  if( typevalue == "number"){
    const modulo = value % 10;
    if(modulo == 0){
      return `${value} is multiple of 10`;
    }
    else{
      return `${value} is not multiple of 10, its modulo is ${modulo}`;
    }
  }
  else{
    return `${value} is not a number, it is ${typevalue}`;
  }
}

let x;
const input = ['dog', 10, 11.3, true, x, ['object']];
let output;
for(const val of input){
  output = MultipleofTen(val);
  console.log(output);
}


