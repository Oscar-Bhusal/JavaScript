let arr = [3,2,4,5,6];
let sum = 5;

let resultFunction = () => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(resultFunction());