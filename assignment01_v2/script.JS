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

//circle marker
jQuery(function() {
    var markers = $('#marker'); 
    var widthGain = 1;
    var heightGain = 1; 

    markers.each(function(){
        var marker = $(this),
        width = marker.width(),
        height = 2 * marker.height(),
        ns = "http://www.w3.org/2000/svg";

        var svg = document.createElementNS(ns, "svg");

        $(svg)
            .css({
                width: width,
                height: height,
                transform: "scale(" + (1.5 * widthGain * width) / height + "," + heightGain + ")"
            })
            .attr({
                width: width,
                height: height,
                viewBox: "-1 -1 2 2"
            });
        marker[0].appendChild(svg);
        
        var path = document.createElementNS(ns, "path");

        $(path)
            .attr({
                pathLength: 100,
                "vector-effect": "non-scaling-stroke"
            })
        svg.appendChild(path);

        setCircle(false);

        marker.mouseenter(function() {
            setCircle(true);
        });

        marker.mouseleave(function(){
            setCircle(false);
        });

        function setCircle(show_element){
            if (show_element){
                $(path).css("visibility", "visible");
            }else{
               $(path).css("visibility", "hidden"); 
            }

            var pathLength = 1000 * path.getTotalLength();

            $(path)
                .attr({
                    d: circlePath(-0.15,0.05,150,190,0.05,0.3)
                })
                .attr({
                    "stroke-dasjarray": pathLength,
                    "stroke-dashoffset": pathLength
                });
        }
        //generating circle path ref: https://codepen.io/spencerthayer/pen/rNKmyL

        function circlePath(dr_min, dr_max, θ0_min, θ0_max, dθ_min, dθ_max) {
            var c = 0.551915024494,
                β = Math.atan(c),
                d = Math.sqrt(c * c + 1 * 1),
                r = 0.9,
                θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180,
                path = "M";
            
        path += [r * Math.sin(θ), r * Math.cos(θ)];
        path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];

        for (var i = 0; i < 4; i++) {
            θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
            r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
            path +=
                " " +
                (i ? "S" : "") +
                [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
            path += " " + [r * Math.sin(θ), r * Math.cos(θ)];
        }
        return path;
        }
    });
});