//////// makes chords (single ones, arrays of them, whatever your twisted heart desires)

var chordmaker = module.exports = {};

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


/////////// I STOPPED HERE!
// chordmaker.getAllChords = function(inputScale){
function getAllChords(inputScale){
	var comparisonChords = [];
	var chordSeeds = chordmaker.chords.triad;

	for (var i = 0; i < inputScale.length; i++) {
		var thisChord = [];
		var thisMode = getMode(inputScale, i);

		// for each interval in the chord (TODO -- only works w/one chord type now as this assumes chordSeeds is an array of pitch numbers)
		for (var j = 0; j < chordSeeds.length; j++) {

			// TODO -- 0 v 1 indexing jankiness
			var triadInd = chordSeeds[j] - 1;

			var thisNote = thisMode[triadInd];

			thisChord.push(thisNote);
		}

		console.log(thisChord);
	}

}

// pass in an input mode and the index of the pitch you wish to be the new root
// TODO -- should this take a specific pitch instead of an index as second arg?
function getMode(inputScale, newRootIndex){
	// TODO -- probably a less verbose way to do this...
	var outputScale = [];
	var start = inputScale.slice(0, newRootIndex);
	var end = inputScale.slice(newRootIndex);

	outputScale = end.concat(start);

	return outputScale;
}


getAllChords([1,3,5,6,8,10,12]);

