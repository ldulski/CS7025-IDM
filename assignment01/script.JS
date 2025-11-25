console.log("HELLO");

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('#darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// let darkmode = localStorage.getItem('dark-mode');
// let lightmode = localStorage.getItem('light-mode');
// const themeSwitch = document.getElementById('theme-switch');


// const enableDarkmode = () => {
//     document.body.classList.add('dark-mode');
//     localStorage.setItem('dark-mode', 'active');
// };

// const disableDarkmode = () => {
//     document.body.classList.remove('dark-mode');
//     localStorage.setItem('dark-mode', null);
// };

// if (darkmode === "active") {
//     enableDarkmode();
// } else {
//     enableLightmode();
// }


// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem('darkmode');
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode();
//     lightmode !== "active" ? enableLightmode() : disableLightmode();
// });