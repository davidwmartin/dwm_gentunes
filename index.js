var keybuilder = require('./keybuilder');

var comparisonKeys = keybuilder.comparisonKeys;

/******
**** Step 1: get input notes (eventually from live midi)
******/

var inputNotes = [3,7,10,2];

/******
**** Step 2: compare input notes against comparison keys to return set of possible keys
******/

// init empty PK array and get comparison keys from keybuilder
var possibleKeys = [];
var comparisonKeys = keybuilder.getComparisonKeys();

// for each of the comparison keys, check if it contains the inputNotes

for (var j=0; j < comparisonKeys.length; j++){
	var possible = needleInHaystack(inputNotes, comparisonKeys[j].notes);

	if(possible){
		comparisonKeys[j].playedIntervals = getScaleDegree(inputNotes, comparisonKeys[j].notes);
		// if it does, add it to the possibleKeys array
		possibleKeys.push(comparisonKeys[j]);
		
		console.log(comparisonKeys[j].name + ' is possible -- scale degrees: ' + comparisonKeys[j].playedIntervals );
	}
}




///////////// Utility functions and such 
// TODO -- evaluate, consider splitting into own modules

// given two arrays (the latter containing the former), this returns an array with the index of the position of the elements of the former within the latter
function getScaleDegree(inner, outer){
	var scaleDegrees = [];
	
	for (var i = 0; i < inner.length; i++) {
		// note -- increase we add 1 to indexOf since musical scale degrees aren't 0-indexed
		scaleDegrees.push(outer.indexOf(inner[i]) + 1);
	}
	console.log(scaleDegrees);
}

// returns true if haystack array contains needle array, false otherwise
function needleInHaystack(needle, haystack){
  for(var i = 0; i < needle.length; i++){
    if(haystack.indexOf(needle[i]) === -1)
       return false;
  }
  return true;
}
