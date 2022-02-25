/* 
    What is a closure in Javascript?
    =====================================
        --If  return a function inside the  function and if the return function accesses the variable outside  of the function then it creates its own encapsulation called closure .

        --It creates a private reference when called that function then it gives the access.

*/


function stopWatch(){
    let counter = 0;

    return function(){
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());