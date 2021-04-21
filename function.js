
// function declaration
function greet(){
    console.log("Hello there");
}
greet();

// function expressaion
const speek = function(){
    console.log("Good morning!");
};
speek();

// argument & paramaters
const meet = function(time , name = 'shyam'){
    console.log(`Good ${time} ${name}`);
};
meet('morning','Ram');
meet('morning');


// returning values with regular function
const calcArea = function(radius){
return 3.14*radius**2;
};
const area = calcArea(5);
console.log(area);

// returning values with arrow function
const calRectangle = (length, width) => length*width;

const Rectangle = calRectangle(5, 10);
console.log(Rectangle);

// iife function
(favNumber = function (num=3){
console.log("my favorote number", num);
})();

//favNumber(6);