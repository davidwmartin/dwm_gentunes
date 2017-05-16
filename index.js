
var getKeys = require('./lib/key-determiner');


/******
**** Step 1: get input notes (eventually from live midi)
******/

var inputNotes = [3,7,10,2];

/******
**** Step 2: compare input notes against comparison keys to return set of possible keys
******/

getKeys(inputNotes);



/******
**** Step 3: Generate a Chord Progression
******/

// var tempInputs = [1,4,6,7,12,1,1,4,5,4,5,5,12,6];
// getMostFrequent(tempInputs);