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

chordmaker.makeChord("seventh", [1,3,5,6,8,10,12]);