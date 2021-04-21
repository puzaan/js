var bill= 430;
var tip = bill<=300 && bill>=50? 15:20;

var tipAmount = (tip/100)*bill;
var totalBill = bill+tipAmount;
console.log(`The bill ${bill}, the tip was ${tipAmount} and the total value`,totalBill);