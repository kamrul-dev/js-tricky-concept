/* 
Twon types of data types : 1. primitive data type
                           2. Non-primitive

primitive data type in JavaScript
 =============================================
 ==> JavaScript primitive data types are data types that refer to a single value.
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. symbol 
Non-primitvie Data type
==============================================
==> JavaScript non-primitive types are objects. An object holds a reference/address of a single key-value pair or many key-value pairs
    1. object

*/

let a = 'Hello';
let b = a;
console.log(a, b);
a = 'gelo';
console.log(a, b)

const x = {job:'Web Developer'}
const y = x;
console.log(x, y);

x.job = 'front end developer';
console.log(x, y);