//  Using Data 1
console.log("BMI result of first data");
let MarksHeight=1.69;
let MarksMass=78;
var MarksBMI=(MarksMass/MarksHeight**2).toFixed(2);
console.log("BMI result Of Marks= ",MarksBMI);

let JohnHeight=1.95;
let JohnMass=92;
var JohnBMI=(JohnMass/JohnHeight**2).toFixed(2);
console.log("BMI result Of John= ",JohnBMI);

var HigherBMI= function(){
    if(JohnBMI>MarksBMI){
        console.log(`John BMI ${(JohnBMI)}is Higher Mark ${(MarksBMI)}`);
    }
    else{
        console.log( `Mark BMI ${(MarksBMI)} is Higher John ${(JohnBMI)}`);
    }
}

HigherBMI();
console.log();

// Data 2
console.log("BMI result of second data");
let MarksHeight2=1.88;
let MarksMass2=95;
var MarksBMI2=(MarksMass2/MarksHeight2**2).toFixed(2);
console.log("BMI 2 result Of Marks= ",MarksBMI2);

let JohnHeight2=1.76;
let JohnMass2=85;
var JohnBMI2=(JohnMass2/JohnHeight2**2).toFixed(2);
console.log("BMI 2 result Of John= ",JohnBMI2);

var HigherBMISecondData= function(){
    if(JohnBMI2>MarksBMI2){
        console.log(`John BMI ${(JohnBMI2)}is Higher Mark ${(MarksBMI2)}`);
    }
    else{
        console.log( `Mark BMI ${(MarksBMI2)} is Higher John ${(JohnBMI2)}`);
    }
}

HigherBMISecondData();