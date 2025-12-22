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
    "📖 Reading: The Importance of Being Earnest",
    "📺 Watching: The Unsleeping City",
    "🍀 Currently: Photosynthesizing",
    "🎮 Playing: Winter Burrow",
    "🎵 Listening: NADDPOD",
    "📖 Reading: White Nights",
    "📺 Watching: Xmas Movies",
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
