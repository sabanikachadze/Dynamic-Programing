




// const canSum = (targetSum, numbers, memo={}) => {
//   if(targetSum in memo) return memo[targetSum];
//   if(targetSum === 0) return true;
//   if(targetSum < 0) return false;
//   for(let num of numbers) {
//     const remainder = targetSum - num;
//     if(canSum(remainder, numbers) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }
//   memo[targetSum] = false; 
//   return false;
// }
// console.log(canSum(80,[3,85,6,]));












