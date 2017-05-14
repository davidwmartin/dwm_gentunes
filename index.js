var keybuilder = require('./keybuilder');

var comparisonKeys = keybuilder.comparisonKeys;

/******
**** Step 1: get input notes (eventually from live midi)
******/

var inputNotes = [2,4,6,9,11];


// var testInput = [2,3,4,50,39,148,26,15,292];
// keybuilder.getAbsPitches(testInput);
keybuilder.getComparisonKeys();

/******
**** Step 2: compare input notes against comparison keys to return set of possible keys
******/

// init empty PK array
var possibleKeys = [];

// for each of the comparison keys, check if it contains the inputNotes

// for (var j=0; j < comparisonKeys.length; j++){
// 	var possible = needleInHaystack(inputNotes,comparisonKeys[j]);

// 	if(possible){
// 		// if it does, add it to the possibleKeys array
// 		possibleKeys.push(comparisonKeys[j]);
		
// 		// var keyName = keybuilder.rootVals[j];
// 		// console.log(keyName + ' is possible');
// 	}
// }




///////////// Utility functions and such 
// TODO -- evaluate, consider splitting into own modules

// returns true if haystack array contains needle array, false otherwise
function needleInHaystack(needle, haystack){
  for(var i = 0; i < needle.length; i++){
    if(haystack.indexOf(needle[i]) === -1)
       return false;
  }
  return true;
}
