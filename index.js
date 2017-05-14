var keybuilder = require('./keybuilder');

var comparisonKeys = keybuilder.comparisonKeys;

/******
**** Step 1: get input notes (eventually from live midi)
******/

var inputNotes = [2,4,6,9,11];

/******
**** Step 2: compare input notes against comparison keys to return set of possible keys
******/

// init empty PK array and get comparison keys from keybuilder
var possibleKeys = [];
var comparisonKeys = keybuilder.getComparisonKeys();

// for each of the comparison keys, check if it contains the inputNotes

for (var j=0; j < comparisonKeys.length; j++){
	var possible = needleInHaystack(inputNotes,comparisonKeys[j].notes);

	if(possible){
		// if it does, add it to the possibleKeys array
		possibleKeys.push(comparisonKeys[j]);
		
		var keyName = comparisonKeys[j].name;
		console.log(keyName + ' is possible');
	}
}




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
