////// eventual goal: return complete set of comparisonKeys for use in determining which key the player is playing

var keybuilder = module.exports = {};

// 1: c-maj, 2: c#-maj, etc
// TODO -- should generate a set of comparison keys from the below building blocks instead of manually specifying note arrays for each key you want to check

keybuilder.comparisonKeys = [
	// [1,3,5,6,8,10,12],
	// [2,4,6,7,9,11,1],
	// [3,5,7,8,10,12,2],
	// [4,6,8,9,11,1,3],
	// [5,7,9,10,12,2,4],
	// [6,8,10,11,1,3,5],
	// [7,9,11,12,2,4,6],
	// [8,10,12,1,3,5,7],
	// [9,11,1,2,4,6,8],
	// [10,12,2,3,5,7,9],
	// [11,1,3,4,6,8,10],
	// [12,2,4,5,7,9,11]
];

// generic scale types. intervals gives the set of intervals to produce a given scale from a variable starting point (a note, assigned a numerical value)
var scales = [
	{
		name: 'Major',
		intervals: [2,2,1,2,2,2]
	},
	{
		name: 'Minor',
		intervals: [2,1,2,2,1,2]
	},
	{
		name: 'Harmonic Minor',
		intervals: [2,1,2,2,1,3]
	},
	{
		name: 'Minor Pentatonic',
		intervals: [3,2,2,3,2]
	}
];


// Note "names" -- most likely only used for display purposes
keybuilder.rootVals = [
	'C',	
	'C# / Db ',
	'D',
	'D# / Eb',
	'E',
	'F',
	'F# / Gb',
	'G',
	'G# / Ab',
	'A',
	'A# / Bb',
	'B'
];


// builds array of possible keys (arrays of notes) for use in comparing against played / input notes
keybuilder.getComparisonKeys = function(){
	var comparisonKeys = [];
	var keySeeds = scales;

	// use intervals in key definition to build an array of absolute pitches in a key
	// TODO -- triple nested for loop is extra brutal...
	for (var i = 0; i < keySeeds.length; i++) {
		
		var ints = keySeeds[i].intervals;

		for (var c = 1; c < 13; c++) {
			currKey = [c];

			for (var j = 0; j < ints.length; j++) {
				currNote = ints[j] + currKey[j];
				currKey.push(currNote);
			}

			var absKey = this.getAbsPitches(currKey);
			comparisonKeys.push(absKey);
		}
	}

	console.log(comparisonKeys);

}


// converts an array of note values to one that only uses the absolute pitches [i.e. 1-12]
keybuilder.getAbsPitches = function(notes){
	var absPitches = [];
	for(var i = 0; i < notes.length; i++){
		if (notes[i] > 12) {

			var adjusted = notes[i] - (Math.floor(notes[i]/12)*12);
			
			absPitches.push(adjusted);
		}
		else {
			absPitches.push(notes[i]);
		}
	}
	console.log(absPitches);
	return absPitches;
}


