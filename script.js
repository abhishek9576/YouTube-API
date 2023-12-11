
const API_KEY = 'YAIzaSyClpivneyZ1WLAPaglY0MxY8z6Elg5tlKQ';
let player;

function loadVideo() {
    const videoId = document.getElementById('videoId').value;

    // Create YouTube player
    if (player) {
        player.loadVideoById(videoId);
    } else {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
}

function onYouTubeIframeAPIReady() {
}

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
