spe = new SpeedReaderEngine();
var SEC_PER_MIN = 60;
var display_every_sec = 500;
var pause =false;

var display = function () {

    setTimeout(function () {
        var current = spe.getNextChunk();
        document.getElementById('displayText').textContent = current;
        !pause && current && display();
    }, display_every_sec);
};
var textChanged = function(){
    console.log('text changed');
    calcDisplayRate();
    var text = document.getElementById('textPaste').value;
    var chunkSize = getChunkSize() || 1;

    spe.setText(text);
    spe.setChunkSize(chunkSize);
    display();
}
var togglePauseDisplay = function () {
    pause = !pause;
}
var startReading = function () {
    document.getElementById('textPaste').classList.add('reader-display-none');
    document.getElementById('displayText').classList.remove('reader-display-none');
    textChanged();
}
var chunkChanged = function() {
    var chunkSize =  getChunkSize() || 1;

    spe.setChunkSize(chunkSize);
}
var getChunkSize = function () {
    var chunkSize = (document.getElementById('nwd').value) || 1;
    console.log(chunkSize);
    return chunkSize;
}
var getWpm = function () {
    var wpm = (document.getElementById('wpm').value) || 400;

    return wpm;
}
var calcDisplayRate = function() {
    display_every_sec = parseFloat(SEC_PER_MIN) / parseFloat(getWpm())*1000;
    console.log('current display rate ' + display_every_sec);

}
