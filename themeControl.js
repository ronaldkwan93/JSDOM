const themes = {
    light: {
        background: "white",
        color: "darkgrey"
    },
    dark: {
        background: "darkgrey",
        color: "white"
    }
}

function changeCssTheme(themeName) {
    for (const variable in themes[themeName]) {
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable])
        console.log("Updated CSS variable --" + variable)

    }
}


function setThemeToDark(){
    changeCssTheme("dark");
}

function setThemeToLight(){
    changeCssTheme("light");
}

function toggleCssTheme() {
    let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");

    console.log("current background color is: " + currentBackgroundColour)

    if (currentBackgroundColour == "white") {
        changeCssTheme("dark");
    } else {
        changeCssTheme("light");
    }
}

changeCssTheme("dark");