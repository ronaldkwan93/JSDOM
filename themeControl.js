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

changeCssTheme("dark");