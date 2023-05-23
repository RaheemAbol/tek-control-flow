// console.log("Hello world");

// let x = 10;
// let y = 5;

// {
//   let z = x + y;

//   console.log(z);
// }

// {
//   var x = 1;
//   {
//     var x = 2; // same variable!
//     console.log("first " + x); // 2
//   }
//   console.log("second " + x); // 2
// }

// {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log("Third " + x); // 2
//   }
//   console.log("forth " + x); // 1
// }

// let x = 10;

// {
//   let y = 5;
//   {
//     let z = x + y;
//     console.log(z);
//   }
// }

// let x = 0;

// if (x == 10) {
//   console.log("It is");
//   console.log();
// } else {
//   console.log("It is not");
// }

// if (!x) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// {
//   let y = 5;
//   {
//     let z = x + y;
//     console.log(z);
//   }
// }

// let day = "Wednesday";

// if (day === "Monday") {
//   console.log("It's the beginning of the week.");
// } else if (day === "Tuesday" || day === "Wednesday") {
//   console.log("It's the middle of the week.");
// } else if (day === "Thursday") {
//   console.log("It's almost the weekend.");
// } else if (day === "Friday") {
//   console.log("It's the end of the week. Time to relax!");
// } else {
//   if (day === "Saturday" || day === "Sunday") {
//     console.log("It's the weekend. Enjoy!");
//   } else {
//     console.log("Invalid day of the week.");
//   }
// }

// let temperature = 50;
// let time = "night";

// if (temperature >= 80) {
//   console.log("It's hot outside!");
//   if (time === "morning") {
//     console.log("Remember to wear sunscreen.");
//   } else {
//     console.log("Stay hydrated!");
//   }
// } else if (temperature >= 65) {
//   console.log("It's a pleasant day.");
// } else {
//   console.log("It's a bit chilly.");
// }

// let grade = 76;

// if (grade >= 90) {
//   console.log("Excellent! You got an A.");
// } else if (grade >= 80) {
//   console.log("Good job! You got a B.");
// } else if (grade >= 70) {
//   console.log("You got a C.");
//   if (grade >= 75) {
//     console.log("You're close to a B!");
//   }
// } else if (grade >= 60) {
//   console.log("You got a D.");
// } else {
//   console.log("You failed the course.");
// }

// let x = 5;
// let y = 4;
// let operand = "/8087";
// switch (operand) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
//   default:
//     console.log("Invalid Operand");
//     break;
// }

// let x = 100;
// let isTen;

// if (x == 10) {
//   isTen = true;
//   console.log(isTen);
// } else {
//   isTen = false;
//   console.log(isTen);
// }

// let xx = 100;

// let isTen = xx == 10 ? true : false;
// console.log(isTen);

// let x = -10;

// if (x < 0) {
//   console.log("Negative!");
// } else {
//   throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// let x = ;

// try {
//   if (x < 0) {
//     console.log("Negative!");
//   } else {
//     throw "Error - I don't know what I'm doing.";
//   }
// } catch (error) {
//   console.log("this is our catch error " + error);
// }

// console.log("Does this log?");

let x = 10;

try {
  if (x > 0) {
    let isEven = x % 2 == 0 ? true : false;
  } else if (x <= 0) {
    throw "Error - Value of 0 or below.";
  }

  console.log(isEven);
} catch (err) {
  console.log(err);
} finally {
  console.log(x);
}
