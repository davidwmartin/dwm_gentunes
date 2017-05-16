//////// makes chords (single ones, arrays of them, whatever your twisted heart desires)

var chordmaker = module.exports = {};

// TODO -- extract this to pattern?
chordmaker.chords = {
	triad: [1,3,5],
	seventh: [1,3,5,7]
}

// given a chord type (defined as properties on chords object), and a scale (array of note values 1-12), generate an array of chord-tones
chordmaker.makeChord = function(type, scale){
	var thisChord = [];
	var chordInts = this.chords[type];

	for (var i = 0; i < chordInts.length; i++) {
		// note -- careful w/iterator v. intervals here (need to subtract 1 since chord tone #1 occupies position 0 in the scale array)
		var thisNote = scale[chordInts[i]-1];
		thisChord.push(thisNote);
	}
	console.log("chord tones: "+ thisChord);
	return thisChord;
}

// chordmaker.makeChord("seventh", [1,3,5,6,8,10,12]);


///// Get all possible chords for a given input scale, given the chord types defined above 
function getAllChords(inputScale){
	var allChords = [];
	var chordSeeds = chordmaker.chords; // TODO -- this.chordmaker?

	// for each pitch in input scale, get array of possible chords
	for (var i = 0; i < inputScale.length; i++) {
		var thisMode = getMode(inputScale, i);
		
		// for each type of chord defined above, get chord and push to allChords array
		for(type in chordSeeds) {
			if (chordSeeds.hasOwnProperty(type)) {
				
				var thisChord = [];
		   	// for each interval in the given chord type, get the note and push to this chord
				for (var j = 0; j < chordSeeds[type].length; j++) {
					// TODO -- 0 v 1 indexing jankiness
					var noteInt = chordSeeds[type][j] - 1;
					// console.log(noteInt);

					var thisNote = thisMode[noteInt];
					thisChord.push(thisNote);
				}
				allChords.push(thisChord);
		  }
		}
	}
	console.log(allChords);
	return allChords;
}

getAllChords([1,3,5,6,8,10,12]);




// pass in an input mode and the index of the pitch you wish to be the new root
// TODO -- should this take a specific pitch instead of an index as second arg?
// TODO -- move to scale builder module
function getMode(inputScale, newRootIndex){
	// TODO -- probably a less verbose way to do this...
	var outputScale = [];
	var start = inputScale.slice(0, newRootIndex);
	var end = inputScale.slice(newRootIndex);
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=control

	outputScale = end.concat(start);
	return outputScale;
}

