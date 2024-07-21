const player = new Gapless5({ guiId:'abcd', crossfade: 50, useHTML5Audio: true, useWebAudio: true });

const playButton = document.getElementById('btn');
var a = false;

player.addTrack('./res/track/ontime.wav');

player.mapKeys({playpause: 'space', prev: 'p', next: 'n'});

function play() 
{     
    a = !a;
    if (a === false) 
    {
        player.play();
    } else 
    {
        player.pause();
    }
}

function addSong(id) 
{     
    if (id === "sup") 
    {
        player.addTrack('./res/track/superhero.wav');
    } else if (id === "le") 
    {
        player.addTrack('./res/track/lelikethat.wav');
    } else {

    }
}

btn.addEventListener("click", () => {
    play();
});

btn1.addEventListener("click", () => {
    addSong("sup");
});

btn1.addEventListener("click", () => {
    addSong("le");
});