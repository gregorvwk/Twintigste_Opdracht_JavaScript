function calculateSupply(age, amount){
    let maxAge = 100
    let total = (amount * 365) * (maxAge - age);    
    console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(26, 3);
calculateSupply(10, 5);
calculateSupply(55, 2);