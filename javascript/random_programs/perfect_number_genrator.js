// const prompt = require("prompt-sync")();

let perfect_number_genrator = () => {
  let input = 100;
  let value = 1;
  let push_value = 1;
  let arr = [];
  let num_sum = 0;
  console.log("The perfect numbers are: ");

  while (value <= input) {
    arr.push(push_value);
    push_value = push_value * 2;
    value++;
  }

  for (i in arr) {
    let num = arr[i];
    num_sum = num + num_sum;
    if (num_sum != 1) {
      let c = 0;
      for (let j = 2; j <= num_sum - 1; j++) {
        if (num_sum % j === 0) {
          c++;
        }
      }
      if (c === 0) {
        let perfect = num_sum * num;
        console.log(perfect);
        console.log("");
      }
    }
  }
}

perfect_number_genrator();