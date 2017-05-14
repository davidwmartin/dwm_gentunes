////// eventual goal: return complete set of comparisonKeys for use in determining which key the player is playing

var keybuilder = module.exports = {};

// generic scale types. intervals gives the set of intervals to produce a given scale from a variable starting point (a note, assigned a numerical value)
keybuilder.scales = [
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
	var keySeeds = this.scales;

	// use intervals in key definition to build an array of absolute pitches in a key
	// TODO -- triple nested for loop is extra brutal...

	// for each type of key...
	for (var i = 0; i < keySeeds.length; i++) {
		
		var ints = keySeeds[i].intervals;

		// for each possible starting note (1-12)...
		for (var c = 1; c < 13; c++) {
			// create key object to hold key name and array of absolute pitches
			currKey = {};
			currKeyNotes = [c];

			// for each entry in the current key's intervals array...
			for (var j = 0; j < ints.length; j++) {
				currNote = ints[j] + currKeyNotes[j];
				currKeyNotes.push(currNote);
			}

			currKey.name = this.rootVals[(c-1)] + " " + keySeeds[i].name;


			//convert to absolute pitch array
			var absKey = this.getAbsPitches(currKeyNotes);

			currKey.notes = absKey;
			
			comparisonKeys.push(currKey);
		}
	}

	// console.log(comparisonKeys);
	return comparisonKeys;
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
	return absPitches;
}


