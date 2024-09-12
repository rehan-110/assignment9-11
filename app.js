// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”


//point 1 start

alert("Welcome To assignment point 1(Check City massage)")
var city = prompt("Enter Your City Name");

if ( city === "karachi"){
    alert("welcome To City Of Lights");
}
else {alert("Welcome To My Assignment");}
//point 1 end






// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.



//point 2 start

alert("your are on point 2 (check gender massage)")
var gender = prompt("Enter Your Gender");

if(gender === "male"){
    alert("Good Morning Sir");
}


else if (gender ==="female"){
    alert("Good Morning Ma’am");
}

else {
    alert("please Enter Your Gender Correctly");
}




//point 2 end



// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


//point 3 start
alert("you are on point 3(check traffic lighs massage)")

var color = prompt("Enter Traffic Light Color");

if(color === "red"){
    alert("Must Stop");
}
else if (color === "yellow"){
    alert("Ready To Move");
}
else if (color === "green"){
    alert("move now");
}
else {alert("Please Enter Right Color To See Massage");}



//point 3 end



// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”

//point 4 start

alert("you are on point 4 (check remaining fuel)");
var fuel = +prompt("Enter Remaining Fuel Litres");

if (fuel <= "0.25"){
    alert("Please Refill The Fuel in Car");
}
else{alert("Your Fuel is Enough");}



//point 4 end

alert("point 5 is missed");

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

//POINT 6 start

alert("You are on point 6 (check mark sheet)")

var totalMarks = 550 , obt_marks = +prompt("Enter Your 11th or 12th class Obtained Marks");

var percentage = 100/totalMarks*obt_marks;




    document.write("<h1>1st And 2nd year Mark Sheet</h1>");

 if(percentage == " "){
    alert("Pease Enter Marks Press F5");
}

else if (percentage > "100"){
    alert("Please Enter Valid Marks Press F5");
}


else if (percentage >= "80"){
    document.write("<h3>"+"Total Marks: " + totalMarks + "<br>" + "Marks Otained: " + obt_marks + "<br>" + "Percentage: " + percentage +"%"+ "<br>" + "Grade: A-one" + "<br>" + "Remarks: Excellent" + "</h3>");
}

else if (percentage >= "70"){
    document.write("<h3>"+"Total Marks: " + totalMarks + "<br>" + "Marks Otained: " + obt_marks + "<br>" + "Percentage: " + percentage +"%"+ "<br>" + "Grade: A" + "<br>" + "Remarks: Good" + "</h3>");
}

else if (percentage >= "60"){
    document.write("<h3>"+"Total Marks: " + totalMarks + "<br>" + "Marks Otained: " + obt_marks + "<br>" + "Percentage: " + percentage +"%"+ "<br>" + "Grade: B" + "<br>" + "Remarks: You Need To Improve" + "</h3>");
}

else if (percentage < "60"){
    document.write("<h3>"+"Total Marks: " + totalMarks + "<br>" + "Marks Otained: " + obt_marks + "<br>" + "Percentage: " + percentage +"%"+ "<br>" + "Grade: Fail" + "<br>" + "Remarks: Sorry" + "</h3>");
}


alert("Your Mark sheet Result on HTML Body");


//point 6 end


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// point 7 start
alert("You are on point 7 (guessing number game)")
var secret = +prompt("Guess My Secret Number from 1 to 10");
var num = 7;
if (secret < num){
    alert("Better Luck Next Time");
}

else if (secret == num){
    alert("Bingo! Correct Answer");
}
else if (secret == ++num){
    alert("Close enough to the correct answer");
}

//point 7 end 



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.


// 8 start
alert("you are on point 8 (Check divisible number with 3)");
var number = +prompt("Enter Your Number");
if (number == " "){
    alert("Enter Your Number Press F5");
}
else if (number % 3 > 0){
    alert("Your Number Is Not Divisible");
}
else if (number % 3 == "0"){
    alert("Your Number Is Divisible by 3");
}




//8 end

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


//          9 starts
alert("You are on point 9(check even or odd number)");
var numb = +prompt("Enter Your Number To Check Its Even Or Odd");
if (numb == " "){
    alert("Please Enter Number");
}
else if (numb % 2 == "0"){
    alert(`${numb} is an even number`);
}
else {alert(`${numb} is and odd number`);}

//          9 ends




// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
alert("Your Are On point 10 (Check Temprature)");
//                      10 start


var t = +prompt("Please Enter Temprature");

if (t == " "){
    alert("Please Enter Your Temprature")
}
else if (t >= 40){
    alert("It is too hot outside");
}
else if (t >= 30 ){
    alert("The Weather today is Normal");
}
else if (t >= 20){
    alert("Todays Weather is cool");
}
else if(t >= 10){
    alert("OMG! Todays weather is so cool");
}
else if (t > 0){
    alert("too Much Cool Stay at your Home");
}


//                  10 ends



// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



//                      11start

alert("Your On 11 point (Calculator)")

var first  = +prompt("Enter Your First Number") ,  opt = prompt("Enter Your Operation (+ , - , * , /)") , second = +prompt("Enter Your Second Number"); 

if (opt == "-"){
    alert(first + "-" + second + " = "+ first - second);
}
else if (opt == "+"){
    alert(first + "+" + second + " = "+ first + second);
}

else if (opt == "/"){
    alert(first + "/" + second + " = "+ first / second);
}


else if (opt == "*"){
    alert(first +" * "+ second +" = " + first * second );
}

alert("Press Enter To See Marks Sheet Result");
