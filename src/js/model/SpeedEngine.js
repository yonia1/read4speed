SpeedReaderEngine = function () {
    var text, chunkSize = 2, WPM;
    var textArray = []; //split the text into words
    var wIdx = 0; // Index for the current chunk of words that is being displayed

    /*Private functions*/
    var formatString = function(str) {
        str = str.replace(/ +(?= )/g,''); // Format the string to only one space
        return str;
    }
    var setText = function (text) {

        if (!text) throw "No text was provided ";
        text = formatString(text);
        textArray = text.split(" ");// split the text by white space
        console.log(textArray);
        wIdx = 0; //restart reading

    };
    var isInt =function (value) {
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
    }
    var setChunk = function (size) {
        if(!size || size <1) throw "Illegal size for chunk";
        if(!isInt(size)) throw "Illegal size for chunk";

        chunkSize = size;
    }
    var getNextChunk = function () {

        if(!textArray) throw 'no text was provided';
        // move to next
        if(wIdx > textArray.length) return ; // finish reading
        //return the next chunk size of words
        var str = '' ;
        var chunk = chunkSize+1;
        while(--chunk) { // build the word

            str += textArray[++wIdx]+" ";
            if(wIdx > textArray.length) break ;
        }
        return str;  // the current chunk of requested words
    }
    var restartReading = function () {
        wIdx = 0;

    }

    /*API for the engine*/
    return {

        setText: setText,
        clearText: function () {
        },
        setChunkSize: setChunk,

        getNextChunk: getNextChunk,
        restart: restartReading

    }
}
