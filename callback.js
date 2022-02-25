
/* 
    If you send a function as a parameter to another function and call it inside, this function is called a callback function.
*/

function welcomeMessage(name, greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom vai', 'jerry', 'cherry'];

// const myObj = {name: 'Dom', age: 12};

function greetMorning(name){
    console.log('Good morning', name);
}

function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Afternoon', name);
}
welcomeMessage('kamrul', greetMorning);
welcomeMessage('Hasan', greetAfternoon);
welcomeMessage('Babu', greetEvening);