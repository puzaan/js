var array=[1,2,3,4,5,6,7,8,9];
array.splice(2,3);
console.log('Removing three value from an array from n-1 index ',array);

console.log(array);
array.splice(2,3, "three", "Four","Five","six",'seven', "eight");
console.log('adding value in an array after removing three value from n-1 index', array);
array.splice(0,0,0);
console.log('adding value in an array without removing value',array);