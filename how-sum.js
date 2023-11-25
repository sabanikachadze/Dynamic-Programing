
const howSum = (targetSum, numbers) => {
  if( targetSum === 0) return [];
  if(targetSum < 0) return null;
  for(let num of numbers){
    const remainder = targetSum - num;
    const remianderResult = howSum(remainder, numbers);
    if( remianderResult !== null){
      return [ ...remianderResult, num];
    }
  }
  return null;
};
console.log(howSum(10,[55,2,45,4,5]));


