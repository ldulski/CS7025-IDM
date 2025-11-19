console.log("Hello");

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
    document.querySelector('body').classList.add("dark");
    localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
    return window.matchMedia('(preferes-color-scheme: dark)').matches
        ? 'dark'
        : 'light' //if system media preference is set or doesn't match anything (light is the defualt)
};


//to give local storage precedende over the prefers-color-scheme
const loadAndUpdateColor = () => {
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color == 'dark' ? darkButton.click() : lightButton.click();
};

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        darkButton.checked ? setDarkMode() : setLightMode();
    });
});

//when the prefers-color-scheme changes this event will be emitted
// the event reflects the media query, if it matches, the new color is dark, if/else it's light

window.matchMedia('prefers-color-scheme: dark').addEventListener('change', (event) => {
    event.matches ? darkButton.click() : lightButton.click();
});

//load the correct color on startup; giving localStorage precedence
localAndUpdateColor();
