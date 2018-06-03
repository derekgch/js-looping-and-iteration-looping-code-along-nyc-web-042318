// Code your solutions in this file
function printBadges(array) {
  for (let i = 0 ;  i < array.length; i ++ ){
    // debugger;
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}



function tailsNeverFails() {
  let count = 0;
  let result = true;

  while (result){
    if (Math.random() >= 0.5){
      count ++;
      result = true;
    }else {
      result = false;
    }
  }
  return `You got ${count} tails in a row!`;

}
