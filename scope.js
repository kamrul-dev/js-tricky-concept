
/* 
    
    -- global scope
    -- local scope
    -- Block scope
    -- Hoisting 
*/

/* const favNum = 27;  // global variable

function add(first, second){
    const result = first + second; // local variable
    if( result > 9){
        const mood = 'happy';
        console.log(mood);  // block scope
    }
    console.log(result); // local scope
    console.log(favNum); // // global scope
    return result;
}
const sum = add(2, 6);

console.log(favNum); // global scope */




const favNum = 27;  // global variable


function add(first, second) {
    console.log(mood); // hoisting
    const result = first + second; // local variable

    if (result > 9) {
        var mood = 'happy';
        mood = 'caranky';
    }
    console.log(mood);
    console.log(result); // local scope
    console.log(favNum); // // global scope
    return result;
}
const sum = add(20, 6);

console.log(favNum); // global scope


// global leaking happened when let or const is not declared with variable name