//Function that uses template literals and 
//logs first name and alst name
function namePrint(fName, lName){ 
console.log(`${fName} ${lName}`);
}
namePrint("Tim", "Hall");


//function above written as an arrow function
var arrowPrint = (fiName, laName) => `${fiName} ${laName}`;
console.log(arrowPrint("Billy", "Kid"));


//anonymous arrow function that uses set
//interval to alert time is up after a second
setTimeout( () => alert("Time is up!"), 1000 );


//arrow function that uses set interval to
//alert are we there yet after a second
setInterval( () => alert("Are we there yet?"), 1000 );


//function that takes a callback with three
//parameters, name of array, index number,
//and a callback function
let array = ['Tom', 'Dick', 'Harry', 'Barry'];
function processSplicedValue(array, num,){
    array.splice(array, num);
}

processSplicedValue(array, 2);
console.log(array);

//the previous function but with an alert
alert(array);
