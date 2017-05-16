////// utility functions used elsewhere

module.exports = utility = {};


// takes two arrays (first must be contained by second)
utility.getScaleDegree = function(inner, outer){
	var scaleDegrees = [];
	
	for (var i = 0; i < inner.length; i++) {
		// note -- increase we add 1 to indexOf since musical scale degrees aren't 0-indexed
		scaleDegrees.push(outer.indexOf(inner[i]) + 1);
	}
	return scaleDegrees;
}

// pass in two arrays -- returns true if haystack array contains needle array, false otherwise
// pretty sure this is how jQuery handles "inArray()"
utility.needleInHaystack = function(needle, haystack){
  for(var i = 0; i < needle.length; i++){
    if(haystack.indexOf(needle[i]) === -1)
       return false;
  }
  return true;
}
