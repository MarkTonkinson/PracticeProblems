//reverse a string without using an array reverse property

var aString;

var reverseString = function(str){
	var modifiedString = [];
	for(var i = 0; i < str.length; i++)
		if (str[i]) {
			modifiedString.unshift(str[i])
		}
		alert(modifiedString.join(''));
};

aString = "mark";
reverseString(aString);



//Write a function called factorial that takes in a number and returns the factorial (!) of that number. Example: factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 === 120

    //code here
var factorial = function(num){
    if(num === 0){
        return 1;
    } else { return num * factorial(num-1);} //calling a function again and again- we call the function within the function
}
alert(factorial(5));

//This practice is called recursion- it's weird- but it is really handy when
//you are doing something repetitive the same every time.

//another way
var factorial = function(num){
	var newNum = num;
	for (num; num > 1; num--){
		newNum = newNum * (num-1);
	}
	return newNum;
}



