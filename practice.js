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
}  //how is it storing the data in between?  how does it know to add them up at the end?
alert(factorial(5)); 

//This practice is called recursion- it's weird- but it is really handy when
//you are doing something repetitive the same every time.

//another way
var factorial = function(num){
	var newNum = num;
	for (num; num > 1; num--){  //in this one, the information stores in the newNum while it stays in the for loop, it works the numbers backwards
		newNum = newNum * (num-1);
	}
	return newNum;
}

//Given an arbitrary input string, return the first nonrepeated character in the string.  firstNonRepeatedCharacter('AABCABD')  the answer would be 'C'

//mine isn't working yet
var firstNonRepeatedCharacter = function(str){
	var noRepeatChar;
	for (var i = 0; i < str.length; i++){
		if(str[i] !== str[i+1] || string[i-1]){
			noRepeatChar = str[i];	
		}
	}
	return noRepeatChar;
}

//this was skyler blood's
var nonRepeat = function(str) {
	for(var i = 0; i < str.length; i++){
		var n = str.charAt(i);
		if(str.indexOf(n) === i && str.indexOf(n, i+!) == -1){
			return n;
		}
		return false;
	}
}



/* Write a function called prime that takes in a number and returns if that number is prime.   
A prime number is any whole number taht is divisible by only one and itself*/

var prime = function(primeNum){
	var wholeNums =[1,2,3,4,5,6,7,8,9];
	var decimals = [];
	var divisibleEven = [];
	for (var i = 0; i <= 10; i++) {
		if (wholeNums.indexOf(primeNum % i) === -1){
			decimals.push(i);
		} else {
			divisibleEven.push(i);
		}
	}
	for (var i = 0; i < divisibleEven.length; i++) {
		var notPrime ="This is not prime";
		if (divisibleEven.indexOf(divisible[i]) !== 1 || primeNum){
			console.log(notPrime);
		}
	}
}

prime(27);


//Jennifer's Solution

var prime = function(num){
	var numArr = [2,3,4,5,6,7,8,9];
	var flag = 'prime';
	for (var i = 0; i < numArr.length; i++){
		if(numArr[i] === num){
			numArr.splice(i,1);
		}
		if(num % numArr[i] === 0){
			flag = 'notprime';
			break;
		} else {
			flag;
		}
	}
	console.log(flag);
}
prime(71);


/*Have the function ABCheck(str) take the str parameter being passed and return the string true if the
characters a and b are separated by exactly 3 places anywhere in teh string at least once (ie. "lane
borrowed" would reuslt in true because there is exactly three characters between a and b).  Otherwise return the string
false*/

var abcheck = function(str){
	var flag;
	str.split(' ').join('');
	for(var i = 0; i < str.length; i++) {
		if indexOf("a" && "b" === 1) {
			for(var j = 0; j < str.length; j++){
				if(indexOf('a').length - indexOf('b').length === 3){
					flag = true;
				} else if (indexOf('b').length - indexOf('a').length === 3){
					flag = true;
				} else {
					flag = false;
				}
			}
		} else {
			flag = false;
		}
	}
	return flag;
}

var abcheck = function(str){
	var flag;
	str.split(' ').join('');
	if str.indexOf("a" && "b" === 1){
		for (var i = 0; i < str.length; i++){
			if (str.indexOf('a') - str.indexOf('b') === 3){
				flag = true;
			} else if (str.indexOf('b')-str.indexOf('a')===3){
				flag = true;
			} else {
				flag = false;
			}
		}
	} else {
		flag = false;
	}
}

//Fibonacci sequence- write a function that generates 100 fibonacci sequence numbers, start with 0 and 1 in your array, then write
//a function to see if a given number exists in that sequence

var fibonacci = function() {
	var fibonacciSequence = [0,1];
	for (var i = 1; i < 100; i + 2){
		var nextNum = fibonacciSequence[i] + fibonacciSequence[i];
		fibonacciSequence.push(nextNum);
	}
}
fibonacci();
//Problem- my i isn't incrementing . . . it stays at 1- then r


//One way
var fib = function(x){
	var arr = [];
	var y = 0;
	var z = 1;
	arr.push(y,z);
	var a = 0;
	for(x, x>=0, x--){
		a = y+z;
		arr.push(a);
		y=z;
		z=a;
	}
	return arr;
}
console.log(fib(100));

//another way
var fibArr = [0,1];

for(var i = 0; i< 99; i++){
	fibArr.push((fibArr[fibArr.length-1]) + (fibArr[fibArr.length-2]));
}
console.log(fibArr);

var findNum = function(num){
	return fibArr.indexOf(num) !== -1 ? "yes": "no"
}
findNum(14);

//one that works
var find = function(num) {
	if (fibArr.indexOf(num) === -1) {
		alert(num);
	}
}

//similar
var i;
var fib = []
fib[0] = 0;
fib[1] = 1;
for (var i =2 ; i <= 100; i++){
	fib[i] = fib[1-2] + fib[i-1];
}


//Write a function that accepts a number, n, and returns the nth Fibonacci Number.

var fibArr= [0,1];

for(var i = 0; i < 99; i++){
	fibArr.push((fibArr[fibArr.length-1] + fibArr[fibArr.length-2]))
}
console.log(fibArr);

var finderN = function(n){
	return fibArr[n-1]; //n-1 because the indice starts at zero, so the fourth indice is the fifth number of fibonacci
}
finderN(4); //should return 2

//Jen's solution all in 1
var fibN = function(n){
	fibR=[0,1];
	for(var i = 0; i < n; i++){
		fibR.push(fibR[i]+fibR[i+1]); //more to this
	}
}


//  Find the only item that occurs an even number of times in an array.  
//Remember to handle multiple solo items and return teh first one.  Return null if there are no solo items.

/* I'm going to have to store a count of something- so I need somewhere to store something- so an object named occurences would work, keys would be the values - the value would be the number of times
that key came- so, to go over it I'm going to have to build a for loop- so if when I see it the first time- I set value as once, otherwise I'm using a counter to build it
Part 2 is then seeing if it occurred an even time- so then I can loop over each key and I can use modulus %2 ===0 to find the evens. that's an if statement
so it can return n, or else it can return n
This should work, I copied dave's - it could have a syntax error*/
var evenOccurrence = function(arr){	
	var occurrences = {};
	for (var i = 0; i < arr.length; i++){
		var n = arr[i]; 
		if (n in occurrences){
			occurrences[n]++; // using obj[] to add properties rather than .property
		} else {
			occurrences[n] = 1;
		}
	}

	for (var n in occurrences) { //have to change n because defined it earlier
		if (occurrences[n] % 2 === 0){
			return n;
		}
	}
	return null
}

var onlyEven = evenOccurrence([1,6,2,4,4,5,6,8,9,6]);

//console.time(function/variable) - google shows how 
//console.timeEnd(function/variable)


console.log(onlyEven); //should equal four


/*Given a string that contains a single pair of parentheses, compute a new string made only of the parentheses and their contents, so "xyz(abc)123"
yields (abc)*/
var parenBit = function(str) {
	debugger;
	parenArr = [];
	for(var i = 0; i < str.length; i++){
		if(str[i]=== "(" ) {
			parenArr.push(str[i]);
            break;
		}
	}
	for(var j = 0; j < str.length; j++){
		if(str[j] === ')'){
			parenArr.push(str[j]);
            break;
		}
	}
	for(var k = 0; k < str.length k++){
		parenArr.push(str[k]);
	}
	console.log(parenArr);
}//unexpected identifier

parenBit("xyz(abc)123");
parenBit("x(hello)");
parenBit("(xy)1");

//Jennifer's solution
var parenBit = function(str, i){
	if(!i && i !== 0){
		i = 0;
	}
	if(str[0] === '(' && str[str.length-1] === ')'){
		return str;
	}
	if(str[i] === '('){
		if(i !== 0) {
			return parenBit(str.slice(i), i+1);
		}
		return parenBit(str, i+1);
	}
	if(str[i] === ')'){
		if(i !== str.length){
			str = str.slice(0, i+1);
			return str;
		}
		return str;
	}
	return parenBit(str, i+1);
}
parenBit("xyz(123)abc")

//Blood's solution
var parenBit = function(str){
    var newStr = str.split('(');
    for (var i = 1; i < newStr.length; i++) {
    return (newStr[i].split(')')[0]);
}
    } ;

alert(parenBit("dsfsdf(1)dfdf"));

//recursion solution- jess
var parenBit = function(str){
	if (str[0] !== '('){
		return parenBit(str.slice(1));
	}
	if (str[str.length-1] !== ')'){
		return parenBit(str.slice(0, str.length-1));
	}

	return str;
};
parenBit("123;asdkr(12323)a;sdlfkjasdf");
// PJ Targun

var foo = function(str){
	var a = str.indexOf('(');
	var b = str.indexOf(')');
	return str.slice(a, b+1);// b+1 because otherwise you wouldn't get the closing parens
}

foo("123(abc)xyz");



/* Practice Problem- write a function that accepts a multi dimensional array and returns a flattened version.
flatten ([1,2, [3,[4],5,6] 7]  --->  [1,2,3,4,5,6,7]*/

var flatten = function(arr) {  //it's just not going through the second array in an array yet- I could create it as a function inside that get's called again!!
	var flatArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] instanceof Array) {
debugger;
			var flattenInside = arr[i];
			
			for (var j = 0; j < flattenInside.length; j++){
				
				if(flattenInside[j] instanceof Array){
					var flattenAgain = arr[j];
					for(var k = 0; k < flattenAgain.length; k++) {
						flattenInside.push(flattenAgain[k]);
					} 
				}
				flatArr.push(flattenInside[j]);
			}
		} else {
		flatArr.push(arr[i]);
		}
	}
	return flatArr;
}
flatten([1,2,[3,[4],5,6],7]);


//given the above object, write a function that returns an object whose keys are the fields 
//found above and whose values are objects containing all the values as keys and a count 
//for how many times that value occurs
 //underscore and lodash will do these type things
//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

//This is really cool!  I need to practice it again and again

//http://jsfiddle.net/cahlan/2ub9u8fj/
var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];


	var breakDownObj = function(items){
		var groupedProperties = {};
		for(var i = 0; i < items.length; i++){
			for(var prop in items[i]){
				if(!groupedProperties[prop]){ //if it doesn't exist create it.  We don't have to use
					groupedProperties[prop] = {};//when trying to add a variable key insead of groupedProperties.prop ="string" which would end up only having one object
					}
					//groupedProperties.kingdom.Anamalia = 1  this is what is happening below
					if(!groupedProperties[prop][items[i][prop]]){
						groupedProperties[prop][items[i][prop]]=1;
					} else {
						groupedProperties[prop][items[i][prop]]++;// or +=1
					}

				
			}
		}
		return groupedProperties;
	}
	console.log(breakDownObj(animals));
	


////NEXT PRACTICE PROBLEM

var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];
//given the above array, create a function that determines whether the array contains three numbers whose sum is equal to 0

//code here

var findZero = function(arr){
    for(var i=0; i < arr.length; i++){
        for(var j = i+1; j<arr.length; j++){
            for(var k = j+1; j<arr.length;k++){
                if(arr[i] + arr[j] + arr[k] === 0){
                var str = arr[i] + ' ' + arr[j] + ' ' + arr[k] + ' equal zero'
                    return str;
                }
            }
        }
    }
    return "not here, son!"
}

console.log(findZero(numbers));

//apparently the problem was supposed to be for two numbers whose sum is zero, so I want to try that with recursion

var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];

var findZeroRecursive = function(arr) {
	var currentLetter;
	for(var i=0; i<arr.length; i++){
		arr[i] = currentLetter;
		if (arr[i] + findZeroRecursive(arr[i]) === 0){
			return "We got it champ"
		}
	}
	return 'It\'s not working'
}
console.log(findZeroRecursive(numbers));

//recursion style
//from jennifer, but doesn't work with other arrays because she hand' finished
var fooRecursion = function(arr, i, j, k){
	if(!i && !j && !k){
		i=0;
		j=i+1;
		k=i+2;
	}
	if(i > arr.length-1){
		return false;
	}
	if (j >arr.length-1 || or k >arr.length-1){
		return fooRecursion(arr, i+1)

	if(arr.length < 3){
		return false
	}

	if(arr[i] + arr[k] + arr[j] === 0){
		return true;
	}else {
		return fooRecursion(arr, i, j+1, k+1)
	}
}

//Given an integer array, one element occurs even number of times and all other have odd occurrences.  Find the element with
//even occurences

//THIS DOESN"T WORK, BUT WE DID THIS PROBLEM ABOVE!///////
// var evenSearch = function(arr){
// 	var counter =[];
// 	for(var i = 0; i < arr.length; i++){
// 		if(counter.indexOf(arr[i]) === -1){
// 			counter.push({num: arr[i], count: 1});
// 		} else if (counter.indexOf(arr[i])){
// 			counter.splice({num: arr[i], count: +1});
// 		}
// 	}
// }

// var evenSearch([1,2,1,3,4,3,5,1,3,1]);

//In aaron rumery'solution

var name = 'Tyler';
var age = name === 'Tyler' ? 24 : 'I dont know';


//we are given 3 strings, str1, str2, str3.  Str3 is said to be a shuffle of str1 and str2 if it can be formed by interweaving the characters of str1 and str2 in a  way that maintains the left to right ordering of the characters from each string.  for example given str1='abc'
// and str2= def, str3 = dabecf is a valid shuffle since it preserves the character ordering of teh 2 strings.  So, gvien these 3 strings write a function that detects whether str3 is a valid shuff of str1 and str2


//how I could solve this- pull them out in teh given order and compare them to the original strings
var str1 = 'abc';
var str2 = 'def';
var str3 = 'daebfc';
var str4 = 'adbecf';

var stringsCompare = function(str1, str2, str3){
	var strOne = [];
	var strTwo = [];

	for(var i = 0; i < str3.length; i++){
		if(i%2){
			strOne.push(str3[i]);
		} else {
			strTwo.push(str3[i]);
		}
	}
    if(strOne.join('') === str1 && strTwo.join('') === str2){
        console.log("we are in business");
    }else {
        console.log('these arent right');
     }
    //console.log(str1);
	//console.log(strOne);
	//console.log(strTwo);
    //console.log(strOne.join(''));
    
};

stringsCompare(str1, str2, str3);

///But this only solves it when they are weaved str3, str4 is different




//given the following array, randomize it.
var students = ["PJ", "Brock", "Erin", "Daniel", "Jacob", "Aaron", "Jason", "Schuyler", "Kory", "Corey", "Zac", "Jonathan", "Skyler", "Jess", "Krissy", "Mark", "David", "Bryson", "Larry", "Fernanda", "Jennifer"];

var randomize = function(arr){
   var randomNum = Math.floor(Math.random() * ((arr.length-1) - 0));
   for(var i = 0; i < arr.length; i++){

   }
};
randomize(students);//this just randomizes who you get back- not the whole array


//Cahlan's Solution

var r = [];
while(students.length > 0){
	var i = Math.floor(Math.random()*students.length-1);
	r.push(students.splice(i,1)[0]); //returns an array with one item, so then you put the [0] position on that array that you are going to push to the new array
}
console.log(r);

//shuffle comparison on site  http://jsperf.com/array-shuffle-comparator/8


//write a function that takes a string as an argument and determines whether or not the given string is a palindrome.
//example of a palindrome: Acrobats stab orca

var isPalindrome = function(str){
 
    var l = str.length;
    var half = Math.floor( l/2);
    console.log(half);
    var firstArr = [];
    var secondArr = [];
    for(var i=0; i < half; i++){
        firstArr.push(str[i]);   
    }
    for(var j= half; j < str.length; j++){
        secondArr.unshift(str[j]);
    }
    for(var k= 0)// goal is to now loop through one array and check index of- only problem is the y is only in one array . . .
    console.log(firstArr);
    console.log(secondArr);
}
console.log(isPalindrome('Amen icy cinema'));
//console.log(isPalindrome("Anna")); //true
//console.log(isPalindrome("Hello World")); //false
//console.log(isPalindrome("Amen icy cinema")); //true


//Cahlan's Answer
var isPalindrome = function(str){
	return str.toLowerCase().split('').reverse().join('').split(' ').join('') === str.toLowerCase().split(' ').join('');  //you have the second split to remove the spaces
}



//create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];
    
   var convertToObject = function(arr, str){
        console.log(str);
        var arrObj = [];
        var newObj = {};
        for(var i = 0; i < arr.length; i++){
            arrObj.push(arr[i]);
            newObj[str] = arr[i][str];
        }
        console.log(newObj);
        console.log(arrObj);
    };
    
    console.log(convertToObject(arr, 'team'));
//should return:
{ 
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}


//possible solution

var groupBy = function(arr, str){
	var result = {};
	for(var i = 0; i < arr.length; i++){
		if(result[arr[i][str]]){
			result[arr[i][str]].push(arr[i]);
		} else {
			result[arr[i][str]] = [arr[i]];
		}
		return result;
	}
}

//cahlan's way for readability

//I can
//Underscore has a group by function that does exactly this .  . .. 
console.log(player.team);// is same as . . .
var prop = 'team';
console.log(player[prop]); //bracket notation allows a variable

var groupBy = function(arr, str){
	var result = {};
	for(var i = 0; i <arr.length; i++) {
		var player = arr[i];
		if(!result[player[str]]){   // if the player isn't on their
			result[player[str]] = [];
		}
		result[player[str]].push(player);
	}
	return result;


}


///Next Problem

/*Write a function that accepts a function as it's only argument and returns a new function (which calls the original 
function that was passed in) that can only ever be executed once.

Once complted, add a second argument that allows the function to be executed x number of times before it stops working.*/





