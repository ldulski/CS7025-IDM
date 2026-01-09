console.log("HELLO");

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    console.log("Running Disable Function")
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    console.log(darkMode)
    if (darkMode != 'enabled') {
        console.log("Enabling");
        enableDarkMode();
    } else {
        console.log("Disabling");
        disableDarkMode();
    }
});

// quote array begins here
const quotes = [
    "🎵 Listening: Illit",
    "📖 Reading: The Morrigan",
    "📺 Watching: The Unsleeping City",
    "🍀 Currently: Photosynthesizing",
    "🎮 Playing: Winter Burrow",
    "🎵 Listening: NADDPOD",
    "📖 Reading: White Nights",
    "📺 Watching: Heated Rivarly",
    "🧶 Currently: Crocheting",
    "🎮 Playing: Roki",
    "🎵 Listening: Olivia Dean",
    "📖 Reading: Slewfoot",
    "📺 Watching: The Broski Report",
    "📈 Currently: Starting an MLM Scheme",
    "🎲 Playing: Dungeons & Dragons",
];

//Swapping quotes
function randomQuote() {
    const quoteSpan = document.getElementById("quote");
    if (quoteSpan) {
        quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }
}
//Quote Time Intervals
randomQuote();
window.setInterval(randomQuote, 5000);


//typewriter intro text
var i = 0;
var txt = 'I’m Logan — a digital craftsman, storyteller, luck-wearer, riddle-maker, barrel-rider, and more. Currently working as a freelancer and design researcher; all while getting an MSc at Trinity College Dublin.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

//progress bar scroll
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//last modified 
document.getElementById("lastMod").innerHTML = document.lastModified;