const playpauseBtn = document.getElementById("playpauseBtn");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const frame = document.getElementById("frame");

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '400',
        width: '400',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            'modestbranding': 1,
            'rel': 0,
            'loop': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    player.loadPlaylist({
        list: 'PLmjEOc6S-fIQiDKmUbbEi1gzGisYuvm7p',
        listType: 'playlist',
    })
    event.target.stopVideo();
}

var playing;
function onPlayerStateChange(event) {
    playing = event.data == YT.PlayerState.PLAYING ? true : false;
}

function pauseVideo() {
    player.pauseVideo();
}

function playVideo() {
    player.seekTo(player.getDuration())
    player.playVideo();
}

function nextVideo() {
    player.nextVideo();
}

function previousVideo() {
    player.previousVideo();
}

function Init() {
    frame.style.height = frame.clientWidth;
}

window.onload = Init();

playpauseBtn.onclick = () => {
    if (playing) {
        pauseVideo();
    }
    else {
        playVideo();
    }
}

nextBtn.onclick = () => {
    nextVideo();
}

previousBtn.onclick = () => {
    previousVideo();
}