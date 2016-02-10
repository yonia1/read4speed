spe = new SpeedReaderEngine();


spe.setChunkSize(5);
var start = spe.getNextChunk();
console.log('start with ' + start);

var display = function () {
    setTimeout(function () {
        if(!start) return;
        document.getElementById('displayText').textContent = start;
        start = spe.getNextChunk();
        start && display();
    }, 500);
};
var textChanged = function(){
    console.log('text changed');
    var text = document.getElementById('textPaste').value;

    spe.setText(text);
    spe.setChunkSize(2);
    display();
}
