// make a progression (sketch -- missing some pieces)

function makeProgression(chordRegions){
	var thisProgression = [];
	for (var i = 0; i < chordRegions.length; i++) {
		var thisChord = extrapolateChord(chordRegions[i]);
		thisProgression.push(thisChord);
	}

	return thisProgression;
}


function extrapolateChord(chordRegion){
	// based on a set of notes, extrapolate a chord
	for (var i = 0; i < chordRegion.length; i++) {
		var regionPitches = chordRegion[i].getMostFrequent();

		// Once I know what are my top pitches, will need to go through much the same process that I now do to match input notes against a set of possible keys so: 
		
		// TODO -- extrapolate a comparison function that can handle both inputNotes in keys and inputNotes in Chords

	}

}

// input array of notes, return most frequent notes
function getMostFrequent(inputs){
	
	// create object where k,v = [input note], [note frequency]
	// from: http://stackoverflow.com/a/39841401/1681439
	var freqObj = inputs.reduce(getFrequency, {});
	function getFrequency(_a, _b){
		_a[_b] = (++_a[_b] || 1);
		return _a;
	}
	// create array of arrays from that object: [[note,freq],[note,freq]...] 
	// from http://stackoverflow.com/a/38824395/1681439
	var freqArr = Object.keys(freqObj).map(function(e) {
		return [Number(e), freqObj[e]];
	});

	// sort frequency array by comparing second value in each sub-array (which represents frequncy of those notes)
	var sortFreqArr = freqArr.sort(function(a,b){
		return b[1] - a[1];
	});

	// get top 4 notes
	// TODO -- this is likely way too simplistic
	var topDawgs = []
	for (var i = 0; i < 4; i++) {
		topDawgs.push(sortFreqArr[i][0]);
	}
	console.log(topDawgs);
	return topDawgs;

}


// var tempInputs = [1,4,6,7,12,1,1,4,5,4,5,5,12,6];
// getMostFrequent(tempInputs);


// Not sure how this is going to work -- likely involves dividing input notes by time (e.g. 1/4 measure) instead of by number of notes -- would be nice if this could happen in max or something for now...either by sending discrete regions or sending a message when a region ends so this script knows where to subdivide
function getChordRegions(inputNotes,numberOfRegions){
	// var regionLength = 
}
