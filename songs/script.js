const data = [
    {
        album: "Taylor Swift",
        title: "Mine",
        artist: "Taylor Swift",
        duration: "4:07",
        source: "Mine.mp3",
        poster: "one.jpg",
        thumb: "one.jpg"
    },
    {
        album: "Taylor Swift",
        title: " The Man",
        artist: "Taylor Swift",
        duration: "3:19",
        source: "TheMan.mp3",
        poster: "two.jpg",
        thumb: "two.jpg"
    },
    {
        album: "Zild",
        title: "Kyusi",
        artist: "Zild",
        duration: "4:26",
        source: "kyusi.mp3",
        poster: "three.jpg",
        thumb: "three.jpg"
    },
    {
        album: "Zild",
        title: "Isang Anghel",
        artist: "Zild",
        duration: "3:18",
        source: "isanganghel.mp3",
        poster: "three.jpg",
        thumb: "three.jpg"
    },
    {
        album: "Ariana Grande",
        title: "Positions",
        artist: "Ariana Grande",
        duration: "2:57",
        source: "positions.mp3",
        poster: "four.jpg",
        thumb: "four.jpg"
    },
    {
        album: "Ariana Grande",
        title: "Right There",
        artist: "Ariana Grande",
        duration: "4:18",
        source: "right there.mp3",
        poster: "five.jpg",
        thumb: "five.jpg"
    },
    {
        album: "Keshi",
        title: "2 soon",
        artist: "Keshi",
        duration: "3:26",
        source: "2soon.mp3",
        poster: "six.jpg",
        thumb: "six.jpg"
    },
    {
        album: "Keshi",
        title: "Limbo",
        artist: "Keshi",
        duration: "3:32",
        source: "limbo.mp3",
        poster: "seven.jpg",
        thumb: "seven.jpg"
    },
    {
        album: "Post Malone",
        title: "Chemical",
        artist: "Post Malone",
        duration: "3:25",
        source: "chemical.mp3",
        poster: "eight.jpg",
        thumb: "eight.jpg"
    },
    {
        album: "Post Malone",
        title: "I Fall Apart",
        artist: "Post Malone",
        duration: "3:43",
        source: "ifallapart.mp3",
        poster: "nine.jpg",
        thumb: "nine.jpg"
    },
    {
        album: "Tyler the Creator",
        title: "See you again",
        artist: "Tyler the Creator",
        duration: "3:00",
        source: "see you again.mp3",
        poster: "ten.jpg",
        thumb: "ten.jpg"
    },
    {
        album: "Tyler the Creator",
        title: "Earfquake",
        artist: "Tyler the Creator",
        duration: "3:11",
        source: "earfquake.mp3",
        poster: "eleven.jpg",
        thumb: "eleven.jpg"
    },
    {
        album: "Blackpink",
        title: "Boombayah",
        artist: "Blackpink",
        duration: "4:03",
        source: "boombayah.mp3",
        poster: "twelve.jpg",
        thumb: "twelve.jpg"
    },
	{
        album: "Blackpink",
        title: "As if it's your last",
        artist: "Blackpink",
        duration: "3:36",
        source: "as if it's your last.mp3",
        poster: "thirtheen.jpg",
        thumb: "thirtheen.jpg"
    },
    {
        album: "The Weeknd",
        title: "Starboy",
        artist: "The Weeknd",
        duration: "3:50",
        source: "starboy.mp3",
        poster: "forten.jpg",
        thumb: "forten.jpg"
    },
    {
        album: "The Weeknd",
        title: "After Hours",
        artist: "The Weeknd",
        duration: "6:00",
        source: "afterhours.mp3",
        poster:  "fiften.jpg",
        thumb: "fiften.jpg"
    },
	{
        album: "The Weeknd",
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "4:22",
        source: "blind.mp3",
        poster: "fiften.jpg",
        thumb: "fiften.jpg"
    },
    {
        album: "Ben and Ben",
        title: "The Ones We Once Loved",
        artist: "Ben and Ben",
        duration: "4:36",
        source: "theoncewe.mp3",
        poster: "sixteen.jpg",
        thumb: "sixteen.jpg"
    },
	{
        album: "Ben and Ben",
        title: "Sa Susunod na Habang Buhay",
        artist: "Ben and Ben",
        duration: "4:40",
        source: "sasusunod.mp3",
        poster: "seventeen.jpg",
        thumb: "seventeen.jpg"
    },
    {
        album: "Ed Sheeran",
        title: "Galway Girl",
        artist: "Ed Sheeran",
        duration: "2:52",
        source: "galaway.mp3",
        poster: "eighteen.jpg",
        thumb: "eighteen.jpg"
    },
    {
        album: "Ed Sheeran",
        title: "Visiting Hours",
        artist: "Ed Sheeran",
        duration: "3:38",
        source: "visiting.mp3",
        poster: "nineteen.jpg",
        thumb: "nineteen.jpg"
    },
    {
        album: "Coloring Book",
        title: "PSG",
        artist: "Al James",
        duration: "3:03",
        source: "psg.mp3",
        poster: "twenty.jpg",
        thumb: "twenty.jpg"
    },
    {
        album: "Coloring Book",
        title: " 711",
        artist: "Toneejay",
        duration: "3:43",
        source: "711.mp3",
        poster: "twentyone.jpg",
        thumb: "twentyone.jpg"
    },
	
    
]

const audio = new Audio();
const main = document.querySelector('main');
const playlist = document.getElementById('playlist');
const player = document.getElementById('player');
const controls = document.querySelectorAll('.controls button');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const details = document.getElementById('details');
const track = document.getElementById('track');
const seek = document.getElementById('seek');

let index = Math.floor(Math.random() * data.length) + 1;
let isPlaying = false;

const loadPlaylist = () => {
    const ul = document.createElement('ul');
    playlist.appendChild(ul);
    data.forEach((song, i) => {
        const li = document.createElement('li');
        li.setAttribute('data-index', `${i}`);
        li.innerHTML = `
            <img src="${song.thumb}" alt="${song.title}" width="50px" height="50px" loading="lazy">
            <div class="wrapper">
                <h3>${song.title}</h3>
                <h4>${song.artist}</h4>
            </div>
        `;
        ul.appendChild(li);
    })
}

const nowPlaying = (songs) => {
    songs = document.querySelectorAll('#playlist li');
    for (let i = 0; i < songs.length; i++) {
        let dataIndex = songs[i].getAttribute('data-index');
        dataIndex === index ? songs[i].classList.add('now-playing') : songs[i].classList.remove('now-playing');
    }
}

const loadSong = (song) => {
    song = data[index];
    audio.src = song.source;
    document.getElementById('album').innerText = song.album;
    document.getElementById('title').innerText = song.title;
    document.getElementById('artist').innerText = song.artist;
    document.getElementById('duration').innerText = song.duration;
    document.getElementById('poster').setAttribute('src', song.poster);
    document.getElementById('poster').setAttribute('alt', song.album);
    const bg = 'linear-gradient(to bottom, #454755ec 0%, #1c1c1ff2 100%)';
    player.style.background = `${bg}, url(${song.poster}) no-repeat center center / cover`;
    seek.style.width = 0;
    nowPlaying();
}

window.addEventListener('load', () => {
    loadPlaylist();
    loadSong(index);
})

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let minutes = min < 10 ? `${min}` : `${min}`;
    let seconds = sec < 10 ? `0${sec}` : `${sec}`;
    return `${minutes}:${seconds}`;
}

setInterval(() => {
    const timer = document.getElementById('timer');
    timer.innerText = formatTime(audio.currentTime)
}, 1000);

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    seek.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

track.addEventListener('click', setProgress);

const playSong = () => {
    audio.play();
    playBtn.querySelector('.material-symbols-rounded').innerText = 'pause';
    player.classList.add('playing');
    isPlaying = true;
}

const pauseSong = () => {
    audio.pause();
    playBtn.querySelector('.material-symbols-rounded').innerText = 'play_arrow';
    player.classList.remove('playing');
    isPlaying = false;
}

const toggleSong = () => {
    isPlaying ? pauseSong() : playSong();
}

const prevSong = () => {
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    loadSong(index);
    playSong();
}

const nextSong = () => {
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    loadSong(index);
    playSong();
}

audio.addEventListener('ended', nextSong);

playlist.addEventListener('click', (e) => {
    index = e.target.closest('li').getAttribute('data-index');
    loadSong(index);
    playSong();
})

details.addEventListener('click', () => {
    main.classList.add('overlay');
    player.classList.add('expanded');
})

const closePlayer = () => {
    main.classList.remove('overlay');
    player.classList.remove('expanded');
}