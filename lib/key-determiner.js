////// All key-determining functionality here

var keybuilder = require('./keybuilder');

module.exports = keyDeterminer = function(inputNotes) {
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

}

function getScaleDegree(inner, outer){
	var scaleDegrees = [];
	
	for (var i = 0; i < inner.length; i++) {
		// note -- increase we add 1 to indexOf since musical scale degrees aren't 0-indexed
		scaleDegrees.push(outer.indexOf(inner[i]) + 1);
	}
	return scaleDegrees;
}

// pass in two arrays -- returns true if haystack array contains needle array, false otherwise
// pretty sure this is how jQuery handles "inArray()"
function needleInHaystack(needle, haystack){
  for(var i = 0; i < needle.length; i++){
    if(haystack.indexOf(needle[i]) === -1)
       return false;
  }
  return true;
}
