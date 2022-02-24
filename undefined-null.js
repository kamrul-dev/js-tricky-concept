/* 
                    <==========================================>
<=================== Different cases for get "undefined" result =================>
                    <===========================================>
    1. variable value not assigned/not initialized; ==> result will be undefined
    2. function but did not write return anything; ==> result will be undefined
    3. just wrote return but did not return anything ==> result will be undefined 
    4. parameter that is not passed ==> result will be undefined
    5. property that does not exist in an object ==> result will be undefined
    6. accessing array element out of range ==> result will be undefined
    7. accessing deleted array element ==> result will be undefined
    8. explicitly set value to undefined ==> result will be undefined


                    <==========================================>
<===================                   null                      =================>
                    <===========================================>
    1. value does not set yet that means value is not there
    2. explicitly define value null

    Note: value is not there but infuture value will be added there , in that case null will be used




*/

/*
 // undefined result
let first ;
console.log(first); 
*/

/* 
// undefined result 
function second(x, y){
    const sum = x + y;
}
const result1 = second(3, 5);
console.log(result1);

*/


/* 
// undefined result
function add(a, b){
    const sum = a + b;
    return;
    const fun = a * b;
    return sum;
}
const result2 = add(3, 5);
console.log(result2);

*/

/* 
// undefined result
function add(a, b){
    const sum = a + b;
    
    if( b < 10){
        return;
    }
    const fun = a * b;
    return sum;
}
const result3 = add(3, 5);
console.log(result3);

 */


/* 
// undefined result
function double(a, b){
    const result = a * 2;
    console.log(b);
    return result;
}
double(50); 
*/


/* 
// undefined result
const fifth = {name: 'kamrul', age: 24, location: 'Dhaka'};
console.log(fifth.phone); 
*/


/*
 // undefined result
const sixth = [23, 53, 63, 23, 63];
console.log(sixth[8]);
 */


/* 
// undefined result
const sixthEle = [23, 53, 63, 23, 63];
delete sixthEle[2];  // should not delete array element like this
console.log(sixthEle[2]); 
*/

/* 
// undefined result
const seventh = undefined;
console.log(seventh); 
*/


/* // null
const myObject = {name:'kamrul', profession: null} */
