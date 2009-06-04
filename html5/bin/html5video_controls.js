var trace = function(message)
{
    $('#log').val($('#log').val() + message + "\n");
    $('#log').scrollTop($('#log').height());
};
$('document').ready(function(){
    //video = $('#myVideo');
    video = document.getElementById('myVideo');
    if (video.src === undefined) {
        video = new FlashFLVPlayer(document.getElementById('myVideoFlash'));
    }

    // Events
    video.addEventListener("loadstart", function(event) {
        trace("[event] loadstart");
    });
    video.addEventListener("load", function(event) {
        trace("[event] load");
    });
    video.addEventListener("play", function(event) {
        trace("[event] play");
    });
    video.addEventListener("ended", function(event) {
        trace("[event] ended");
    });
    video.addEventListener("pause", function(event) {
        trace("[event] pause");
    });
    video.addEventListener("playing", function(event) {
        trace("[event] playing");
    });
    video.addEventListener("seeked", function(event) {
        trace("[event] seeked");
    });
    video.addEventListener("loadedmetadata", function(event) {
        trace("[event] loadedmetadata");
        $('#videoWidth').text(video.videoWidth);
        $('#videoHeight').text(video.videoHeight);
        $('#playbackRate').text(video.playbackRate);
    });
    video.addEventListener("durationchange", function(event) {
        trace("[event] durationchange : " + video.duration);
        $('#duration').text(video.duration);
    });
    video.addEventListener("timeupdate", function(event) {
        $('#time').text(video.currentTime);
    });
    video.addEventListener("error", function(event) {
        trace("[event] error : " + video.networkState);
    });





    $('#play').bind('click', function(event){
        video.play();
    });
    $('#pause').bind('click', function(event){
        video.pause();
    });
    $('#setCurrentTime').bind('click', function(event){
        video.currentTime = $('#currentTime').val();
    });


});
