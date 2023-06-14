// let num1 = 10;
// let num2 = 5;
// let num3 = 20;
// let num4 = 15;
// let num5 = 25;
// let largestNumber;

// if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
//   largestNumber = num1;
// } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
//   largestNumber = num2;
// } else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
//   largestNumber = num3;
// } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
//   largestNumber = num4;
// } else {
//   largestNumber = num5;
// }

//  console.log("The largest number is: " + largestNumber);
//////////////////////////////////////////////////////////////////////////

// let person = {
//     name: "John",
//     age: 30,
//     occupation: "Engineer",
//     city: "New York"
//   };
  
//   let properties = Object.keys(person);
  
//   console.log("Properties of the object:");
  
//   for (let i = 0; i < properties.length; i++) {
//     console.log(properties[i]);
//////////////////////////////////////////////////////
//   }
// let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes"];

// // Ascending order
// let ascendingOrder = fruits.slice().sort();

// console.log("Ascending order:", ascendingOrder);

// // Descending order
// let descendingOrder = fruits.slice().sort().reverse();

// console.log("Descending order:", descendingOrder);
/////////////////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4, 2, 1, 5, 3, 6, 7, 5, 8];

// let uniqueNumbers = [...new Set(numbers)];

// console.log("Array with duplicates:", numbers);
// console.log("Array without duplicates:", uniqueNumbers);
///////////////////////////////////////

var currentDate = new Date();

// Get the current day, month, and year
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // January is month 0 in JavaScript
var year = currentDate.getFullYear();

// Format the day and month to have leading zeros if necessary
if (day < 10) {
day = "0" + day;
}

if (month < 10) {
month = "0" + month;
}

// Create the formatted date string
var formattedDate = month + "/" + day + "/" + year;

// Display the formatted date
console.log("Current date: " + formattedDate);