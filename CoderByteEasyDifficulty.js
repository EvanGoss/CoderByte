// 1. FIRST REVERSE: Have the function FirstReverse take the str parameter being
// passed and return the string in reversed order.

var FirstReverse = function (string) {
  var reversed = '';
  for (var i = string.length - 1; i >= 0; i--)
    reversed += string[i];
  return reversed;
};
FirstReverse('string'); // gnirts

// 2. FIRST FACTORIAL: Have the function FirstFactorial(num) take the num
// parameter being passed and return the factorial of it (ie. if num = 4, return
// (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

var FirstFactorial = function (num) {
  var product = 1;
  for (var i = num; i > 0; i--) {
    product = i * product;
  }
  return product;
};
FirstFactorial(4); // 4 * 3 * 2 * 1 = 24

// 3. LONGEST WORD: Have the function LongestWord(sen) take the sen parameter
// being passed and return the largest word in the string. If there are two or
// more words that are the same length, return the first word from the string
// with that length. Ignore punctuation and assume sen will not be empty.

var LongestWord = function (sen) {
  // remove punctuation and extra spaces
  var punctationRegex = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRegex = /\s+/g;
  sen = sen.replace(punctationRegex, '').replace(spaceRegex, ' ');
  // split sentance into array of words
  var words = sen.split(' ');
  // compare word lengths
  var longestWord = words[0];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
LongestWord("fun&!! time"); // time

// 4. LETTER CHANGES: Have the function LetterChanges(str) take the str
// parameter being passed and modify it using the following algorithm. Replace
// every letter in the string with the letter following it in the alphabet (ie.
// c becomes d, z becomes a). Then capitalize every vowel in this new string (a,
// e, i, o, u) and finally return this modified string.

var LetterChanges = function (str) {
  var newString = '';
  // Notes on ASCII character codes:
  // A = 65, Z = 90, a = 97, z = 122
  // algorithm: 90 becomes 65, 122 becomes 97, add 1 to 65-89 and 97-121

  // convert string to array of character codes
  var characters = [];
  for (var i = 0; i < str.length; i++) {
    characters.push(str.charCodeAt(i));
  }
  // build new array with character codes incremented by 1
  var newCharacters = [];
  for (var j = 0; j < characters.length; j++) {
    var currentCharacter = characters[j];
    if (currentCharacter === (90 || 122)) {
      newCharacters.push(currentCharacter - 25);
    } else if ( (currentCharacter >= 65 && currentCharacter <=89) ||
                (currentCharacter >= 97 && currentCharacter <=121) ) {
      newCharacters.push(currentCharacter + 1);
    } else {
      newCharacters.push(currentCharacter);
    }
  }

  // capitalize vowels by subracting 32 from lower case vowel character codes
  // a=97, e=101, i=105, o=111, u=117
  for (var k = 0; k < newCharacters.length; k++)  {
    var currChar = newCharacters[k];
    if (currChar === 97 || currChar === 101 || currChar === 105 || currChar === 111 || currChar === 117) {
      newCharacters[k] = newCharacters[k] - 32;
    }
  }

  // convert character codes back to letters
  for (var l = 0; l < newCharacters.length; l++) {
    newString += String.fromCharCode(newCharacters[l]);
  }

  return newString;
};
LetterChanges("fun times!"); // "gvO Ujnft!"

// 5. SIMPLE ADDING: Have the function SimpleAdding(num) add up all the numbers
// from 1 to num. For the test cases, the parameter num will be any number from
// 1 to 1000.

var SimpleAdding = function (num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};
SimpleAdding(1000); // 500500

// 6. LETTER CAPITALIZE: Have the function LetterCapitalize(str) take the str
// parameter being passed and capitalize the first letter of each word. Words
// will be separated by only one space.

var LetterCapitalize = function (str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var firstLetter = word[0].toUpperCase();
    words[i] = firstLetter + word.substr(1);
  }
  return words.join(' ');
};
LetterCapitalize('hello world'); // Hello World

// 7. SIMPLE SYMBOLS: Have the function SimpleSymbols(str) take the str
// parameter being passed and determine if it is an acceptable sequence by
// either returning the string true or false. The str parameter will be composed
// of + and = symbols with several letters between them (ie. ++d+===+c++==a) and
// for the string to be true each letter must be surrounded by a + symbol. So
// the string to the left would be false. The string will not be empty and will
// have at least one letter.

var SimpleSymbols = function (str) {
  var acceptable = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      if (str[i-1] != '+' || str[i+1] != '+') {
        acceptable = false;
      }
    }
  }
  return acceptable;
};
SimpleSymbols('++d+===+c++==a'); // false

// 8. CHECK NUMS: Have the function CheckNums(num1,num2) take both parameters
// being passed and return the string true if num2 is greater than num1,
// otherwise return the string false. If the parameter values are equal to each
// other then return the string -1.

var CheckNums = function (num1,num2) {
  if (num2 > num1) {
    return true;
  } else if (num2 < num1) {
    return false;
  } else {
    return -1;
  }
};
CheckNums(1,2); // true
CheckNums(2,1); // false
CheckNums(1,1); // -1

// 9. TIME CONVERT: Have the function TimeConvert(num) take the num parameter
// being passed and return the number of hours and minutes the parameter
// converts to (ie. if num = 63 then the output should be 1:3). Separate the
// number of hours and minutes with a colon.

var TimeConvert = function (num) {
  var hours = Math.floor(num/60);
  var mins  = num % 60;
  return hours + ':' + mins;
};
TimeConvert(63); // 1:3

// 10. ALPHABET SOUP: Have the function AlphabetSoup(str) take the str string
// parameter being passed and return the string with the letters in alphabetical
// order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will
// not be included in the string.

var AlphabetSoup = function (str) {
  return str.split('').sort().join('');
};
AlphabetSoup('hello'); // ehllo

// 11. AB CHECK: Have the function ABCheck(str) take the str parameter being
// passed and return the string true if the characters a and b are separated by
// exactly 3 places anywhere in the string at least once (ie. "lane borrowed"
// would result in true because there is exactly three characters between a and
// b). Otherwise return the string false.

var ABCheck = function (str) {
  var pass = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      if (str[i+4] === 'b') {
        pass = true;
      }
    }
  }
  return pass;
};
ABCheck('lane borrowed'); // true

// 12. VOWELL COUNT: Have the function VowelCount(str) take the str string
// parameter being passed and return the number of vowels the string contains
// (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this
// challenge.

var VowelCount = function (str) {
  var count = 0;
  var vowels = 'AEIOUaeiou';
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) >= 0) {
      count++;
    }
  }
  return count;
};
VowelCount('All cows eat grass'); // 5

// 13. WORD COUNT: Have the function WordCount(str) take the str string
// parameter being passed and return the number of words the string contains
// (ie. "Never eat shredded wheat" would return 4). Words will be separated by
// single spaces.

var WordCount = function (str) {
  var spaces = str.split(" ");
  var wordCount = spaces.length;
  return wordCount;
};
WordCount('Never eat shredded wheat'); // 4

// 14. EX OH:  Have the function ExOh(str) take the str parameter being passed
// and return the string true if there is an equal number of x's and o's,
// otherwise return the string false. Only these two letters will be entered in
// the string, no punctuation or numbers. For example: if str is "xooxxxxooxo"
// then the output should return false because there are 6 x's and 5 o's.

var ExOh = function (str) {
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i]==='x') {
      countX++;
    }
    else if (str[i]==='o') {
      countO++;
    }
  }
  return countX === countO;
};

// 15. PALINDROME: Have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter is a palindrome,
// (the string is the same forward as it is backward) otherwise return the
// string false. For example: "racecar" is also "racecar" backwards. Punctuation
// and numbers will not be part of the string.

var Palindrome = function (str) {
  str = str.replace(/\s+/g, '');
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--)
    reversed += str[i];
  return str === reversed;
};

// 16. ARITH GEO: Have the function ArithGeo(arr) take the array of numbers
// stored in arr and return the string "Arithmetic" if the sequence follows an
// arithmetic pattern or return "Geometric" if it follows a geometric pattern.
// If the sequence doesn't follow either pattern return -1. An arithmetic
// sequence is one where the difference between each of the numbers is
// consistent, where as in a geometric sequence, each term after the first is
// multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8]
// and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as
// parameters, 0 will not be entered, and no array will contain all the same
// elements.

var ArithGeo = function (arr) {
  var elementSubtraction = [];
  var elementDivision = [];

  for (var i = 1; i < arr.length; i++) {
    elementSubtraction.push(arr[i] - arr[i-1]);
    elementDivision.push(arr[i] / arr[i-1]);
  }

  var arithmetic = true;
  var geometric = true;
  for (var j = 1; j < elementSubtraction.length; j++) {
    if (elementSubtraction[j] != elementSubtraction[j-1]) {
      arithmetic = false;
    }
    if (elementDivision[j] != elementDivision[j-1]) {
      geometric = false;
    }
  }

  if (arithmetic) { return "Arithmetic"; }
  else if (geometric) { return "Geometric"; }
  else return -1;
};

// 17. ARRAY ADDITION 1: Have the function ArrayAdditionI(arr) take the array of
// numbers stored in arr and return the string true if any combination of
// numbers in the array can be added up to equal the largest number in the
// array, otherwise return the string false. For example: if arr contains [4, 6,
// 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The
// array will not be empty, will not contain all the same elements, and may
// contain negative numbers.

var ArrayAdditionI = function(arr) {
  var array = arr.sort(function(a,b){return a-b;});
  var max = array.pop();

  var factorial = function (num) {
    var product = 1;
    for (num; num > 1; num--) {
      product *= num;
    }
    return product;
  };

  var combinations = factorial(array.length) + 1;

  for (var i = 0; i <= combinations; i++) {
    // use binary bits to test sums of combinations of array elements
    var binary = i.toString(2);
    // add zeros to beginning of binary value. example: 1 becomes 00001 when
    // array length is 5.
    while (binary.length < array.length) {
      binary = '0' + binary;
    }
    var sum = 0;

    // sum array elements
    for (var j = 0; j < binary.length; j++) {
      if (binary[j] === '1') {
        sum += array[j];
      }
    }

    if (sum === max) {
      return true;
    }
  }

  return false;
};

// 18. LETTER COUNT 1: Have the function LetterCountI(str) take the str
// parameter being passed and return the first word with the greatest number of
// repeated letters. For example: "Today, is the greatest day ever!" should
// return greatest because it has 2 e's (and 2 t's) and it comes before ever
// which also has 2 e's. If there are no words with repeating letters return -1.
// Words will be separated by spaces.

var LetterCountI = function (str) {
  str = str.toLowerCase();
  var words = str.split(' ');
  var wordIndex = -1;
  var mostRepeats = 0;

  // loop through words
  for (var i = 0; i < words.length; i++) {
    var currentRepeats = 0;

    // loop through letters of each word
    for (var j = 1; j < words[i].length; j++) {
      var currentWord = words[i].split('').sort();

      // compare each letter to the previous letter for a repeated letter
      if (currentWord[j]===currentWord[j-1]) {
        currentRepeats++;
      } else {
        currentRepeats = 0;
      }

      if (currentRepeats > mostRepeats) {
        mostRepeats = currentRepeats;
        wordIndex = i;
      }
    }
  }
  if (wordIndex >= 0) {
    return words[wordIndex];
  } else {
    return -1;
  }
};

// 19. SECOND GREATLOW: Have the function SecondGreatLow(arr) take the array of
// numbers stored in arr and return the second lowest and second greatest
// numbers, respectively, separated by a space. For example: if arr contains [7,
// 7, 12, 98, 106] the output should be 12 98. The array will not be empty and
// will contain at least 2 numbers. It can get tricky if there's just two
// numbers!

var SecondGreatLow = function (arr) {
  var array = arr.sort(function(a,b){return a-b;});
  return array[1] + ' ' + array[array.length - 2];
};

// 20. DIVISION STRINGIFIED: Have the function DivisionStringified(num1,num2)
// take both parameters being passed, divide num1 by num2, and return the result
// as a string with properly formatted commas. If an answer is only 3 digits
// long, return the number with no commas (ie. 2 / 3 should output "1"). For
// example: if num1 is 123456789 and num2 is 10000 the output should be
// "12,345".

var DivisionStringified = function (num1, num2) {
  var answer = Math.round(num1 / num2).toString();
  var formattedAnswer = '';
  var digitCount = 0;
  for (var i = answer.length - 1; i >= 0; i--) {
    if (digitCount % 3 === 0 && digitCount !== 0) {
      formattedAnswer = ','.concat(formattedAnswer);
    }
    formattedAnswer = answer[i].concat(formattedAnswer);
    digitCount++;
  }
  return formattedAnswer;
};

// 21. COUNTING MINUTES 1: Have the function CountingMinutesI(str) take the str
// parameter being passed which will be two times (each properly formatted with
// a colon and am or pm) separated by a hyphen and return the total number of
// minutes between the two times. The time will be in a 12 hour clock format.
// For example: if str is 9:00am-10:00am then the output should be 60. If str is
// 1:00pm-11:00am the output should be 1320.

var CountingMinutesI = function (str) {
  // str = 1:00pm-11:00am
  var times = str.split('-'); // ["1:00pm", "11:00am"]
  var minutes = [0,0]; // convert each time to minutes
  for (var i = 0; i < 2; i++) {
    var hoursMinutes = times[i].split(':'); // ["1", "00pm"]
    var isPM = hoursMinutes[1].includes('pm');
    minutes[i] += Number(hoursMinutes[0]) * 60 + Number(hoursMinutes[1].slice(0,2));
    if (isPM) { minutes[i] += 12 * 60; }
  }
  if (minutes[0] < minutes [1]) {
    return minutes[1] - minutes[0];
  } else {
    return (24 * 60) - minutes[0] + minutes[1];
  }
};

// 22. MEAN MODE: Have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0 if they don't equal
// each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals
// the mean (3)). The array will not be empty, will only contain positive
// integers, and will not contain more than one mode. Mode: The number which
// appears most often in a set of numbers. Mean: average of all numbers.

var MeanMode = function (arr) {
  // find mean by adding array elements and dividing by N
  var sum = 0;
  for (var i = 0; i  < arr.length; i++) {
    sum += arr[i];
  }
  var mean = sum / arr.length;

  // find mode
  var array = arr.sort(function(a,b){return a-b;});
  var mode;
  var maxRepeats = 0;
  var currentRepeats = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] === array[i-1]) {
      currentRepeats++;
    } else {
      currentRepeats = 0;
    }
    if (currentRepeats > maxRepeats) {
      maxRepeats = currentRepeats;
      mode = array[i];
    }
  }

  if (mode === mean) {
    return 1;
  } else {
    return 0;
  }
};

// 23. DASH INSERT: Have the function DashInsert(str) insert dashes ('-')
// between each two odd numbers in str. For example: if str is 454793 the output
// should be 4547-9-3. Don't count zero as an odd number.

var DashInsert = function (str) {
  var array = str.toString().split('');
  var formattedString = '';
  for (var i = 0; i < array.length; i++) {
    formattedString = formattedString.concat(array[i]);
    if (array[i] % 2 > 0 && array[i+1] % 2 > 0) {
      formattedString = formattedString.concat('-');
    }
  }
  return formattedString;
};

// 24. SWAP CASE: Have the function SwapCase(str) take the str parameter and
// swap the case of each character. For example: if str is "Hello World" the
// output should be hELLO wORLD. Let numbers and symbols stay the way they are.

var SwapCase = function (str) {
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var outputString = '';

  for (var i = 0; i < str.length; i++) {
    var outputCharacter = '';
    if (upperCase.indexOf(str[i]) >= 0) {
      outputCharacter = lowerCase[upperCase.indexOf(str[i])];
    } else if (lowerCase.indexOf(str[i]) >= 0) {
      outputCharacter = upperCase[lowerCase.indexOf(str[i])];
    } else {
      outputCharacter = str[i];
    }
    outputString = outputString.concat(outputCharacter);
  }

  return outputString;
};

// 25. NUMBER ADDITION: Have the function NumberSearch(str) take the str
// parameter, search for all the numbers in the string, add them together, then
// return that final number. For example: if str is "88Hello 3World!" the output
// should be 91. You will have to differentiate between single digit numbers and
// multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"
// should return two different answers. Each string will contain at least one
// letter or symbol.

var NumberSearch = function (str) {
  var sum = 0;
  var numbers = '0123456789';
  var currentNumber = '';

  for (var i = 0; i < str.length; i++) {
    if (numbers.indexOf(str[i]) >= 0) {
      currentNumber += str[i];
    }
    if (numbers.indexOf(str[i+1]) < 0) {
      sum += Number(currentNumber);
      currentNumber = '';
    }
  }

  return sum;
};

// 26. THIRD GREATEST: Have the function ThirdGreatest(strArr) take the array of
// strings stored in strArr and return the third largest word within in. So for
// example: if strArr is ["hello", "world", "before", "all"] your output should
// be world because "before" is 6 letters long, and "hello" and "world" are both
// 5, but the output should be world because it appeared as the last 5 letter
// word in the array. If strArr was ["hello", "world", "after", "all"] the
// output should be after because the first three words are all 5 letters long,
// so return the last one. The array will have at least three strings and each
// string will only contain letters.

var ThirdGreatest = function (strArr) {
  var array = strArr.sort(function(a,b){return b.length - a.length;});
  return array[2];
};

// 27. POWERS OF TWO: Have the function PowersofTwo(num) take the num parameter
// being passed which will be an integer and return the string true if it's a
// power of two. If it's not return the string false. For example if the input
// is 16 then your program should return the string true but if the input is 22
// then the output should be the string false.

var PowersofTwo = function (num) {
  var comparison = 1;
  while (num >= comparison) {
    if (num === comparison) {
      return true;
    } else {
      comparison = comparison * 2;
    }
  }
  return false;
};

// 28. ADDITIVE PERSISTENCE: Have the function AdditivePersistence(num) take the
// num parameter being passed which will always be a positive integer and return
// its additive persistence which is the number of times you must add the digits
// in num until you reach a single digit. For example: if num is 2718 then your
// program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop
// at 9.

var AdditivePersistence = function (num) {
  var count = 0;
  var sum = num;

  var sumElements = function (number) {
    sum = 0;
    var elements = number.toString().split('');
    for (var i = 0; i < elements.length; i++) {
      sum += Number(elements[i]);
    }
  };

  while (sum >= 10) {
    sumElements(sum);
    count++;
  }

  return count;
};

// 29. MULTIPLICATIVE PERSISTENCE: Have the function
// MultiplicativePersistence(num) take the num parameter being passed which will
// always be a positive integer and return its multiplicative persistence which
// is the number of times you must multiply the digits in num until you reach a
// single digit. For example: if num is 39 then your program should return 3
// because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

var MultiplicativePersistence = function (num) {
  var count = 0;
  var product = num;

  var multiplyElements = function (number) {
    product = 1;
    var elements = number.toString().split('');
    for (var i = 0; i < elements.length; i++) {
      product *= Number(elements[i]);
    }
  };

  while (product >= 10) {
    multiplyElements(product);
    count++;
  }

  return count;
};

// 30. OFF LINE MINIMUM: Have the function OffLineMinimum(strArr) take the
// strArr parameter being passed which will be an array of integers ranging from
// 1...n and the letter "E" and return the correct subset based on the following
// rules. The input will be in the following format:
// ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E
// means take out the smallest integer currently in the whole set. When
// finished, your program should return that new set with integers separated by
// commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"]
// then your program should return 4,1,5.
// Input = "1","2","E","E","3" Output = "1,2"
// Input = "4","E","1","E","2","E","3","E" Output = "4,1,2,3"

var OffLineMinimum = function (strArr) {
  var output = [];
  var workingArray = [];

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      output.push(workingArray.shift());
    } else {
      workingArray.push(strArr[i]);
      workingArray = workingArray.sort(function(a,b){return a-b;});
    }
  }

  return output.join(',');
};
