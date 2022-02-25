/* 
    -- Object pass by reference.
*/
const a = 'Kamrul';
const b = 23;
const c = true;

// null
// undefined

// primitive: number , string, boolean, undefined, null, symbol  
// non-primitive: object

const nums = [23 ,534 , 34, 234];
// console.log(typeof nums);
//Arry.isArray(nums)


function triple (x, y, z){
    /* x = 111;   // primitive data type can not change after call the function
    y = 222;
    z = 333; */
 
    x.age = 50;   // object data type can change after call the function. Object, value passed by reference.

}
// console.log(typeof triple);
// console.log(triple.length);
const num1 = 3;
const num2 = 5;
const num3 = 7;
// triple(num1, num2, num3);
const myObj = {name: 'kamrul', age: 17};
triple(myObj);
console.log(myObj);

// console.log(num1, num2, num3);
// console.log(typeof null);


