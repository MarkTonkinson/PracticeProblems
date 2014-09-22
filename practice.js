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