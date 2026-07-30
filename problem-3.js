function calculateAiCost(tokensUsed) {
 // Write your code here.
if(typeof tokensUsed !== "number" || (tokensUsed<0)){
    return "Invalid";
}
let freeToken = 500;
let ratePerHundred = 5;

let countToken = tokensUsed - freeToken;
let fullToken = Math.floor(countToken/100);

if(fullToken > 0){
   let totalCost = fullToken * ratePerHundred;
   return totalCost;
}
else{
    return 0;
}

}


// console.log(calculateAiCost(300));
// console.log(calculateAiCost(500));
// console.log(calculateAiCost(650));
// console.log(calculateAiCost(1000));
// console.log(calculateAiCost("500"));
// console.log(calculateAiCost("500"));
// console.log(calculateAiCost(10000));