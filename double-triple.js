/* 
    double equal ( == ) : 1. It only compares and checks data values.
                          2. It does implicit conversion.

    triple equal ( === ) : 1. It checks the comparing data values and also checks their data types strictly.
                           2. Used for safety.
                           3. Most of the time we will use triple equal. 

    Boolean logic:
        ### true defined by 1
        ### false defined by 0
*/

/* 
// result is true for double equal (==)
//===========================================
const first = 2; // number value
const second = 2; // number value
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */



/* // result is true for double equal (==)
//==============================================
const first = 2; // number value
const second = '2';  // string value
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */




/* // result is true for tripple equal (===)
//==============================================
const first = 2; // number value
const second = 2;  // string value
if(first === second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */


/* // result is false for tripple equal (===) , because value is same but data type is not same.
//==============================================================================================
const first = 2; // number value
const second = '2';  // string value
if(first === second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */


/* // result is false for double equal (==)
//==============================================
const first = 2; // number value
const second = true;  // boolean true = 1, so first != seconnd; result will be false.
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */


/*
 // result is true for double equal (==)
//==============================================
const first = 1; // number value
const second = true;  // boolean true = 1, so first is equal to seconnd; result will be true.
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */


/* 
// result is true for double equal (==)
//==============================================
const first = 0; // number value
const second = false;  // boolean false = 0, so first is equal to seconnd; result will be true.
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
} */


// More Comaprison
//============================

/* const a = { name: 'kamrul' };
const b = { name: 'kamrul' };
if (a == b) {
    console.log('both are same');
}
else {
    console.log('both are not same'); // output
} */


/* const a = [];
const b = [];
if (a == b) {
    console.log('both are same');
}
else {
    console.log('both are not same'); // output
} */


