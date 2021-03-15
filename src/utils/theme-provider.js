import React, {useState} from "react"

import {theme} from "../gatsby-plugin-theme-ui";

export const cssVariableNames = {
    backgroundColor: '--color-background',
    titleTextColour: '--color-text-title',
    normalTextColour: '--color-text-normal',
    linkColour: '--color-text-link',
    normalTextFont: '--normal-text-font',
    quoteTextFont: '--quote-text-font'
}

const getCssVar = (variableName) => `var(${variableName})`;

export const cssVars = {
    backgroundColor: getCssVar(cssVariableNames.backgroundColor),
    titleTextColour: getCssVar(cssVariableNames.titleTextColour),
    normalTextColour: getCssVar(cssVariableNames.normalTextColour),
    linkColour: getCssVar(cssVariableNames.linkColour),
    normalTextFont: getCssVar(cssVariableNames.normalTextFont),
    quoteTextFont: getCssVar(cssVariableNames.quoteTextFont),
}


export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = useState('light');
    const root = window.document.documentElement;
    React.useEffect(() => {
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        );
        rawSetColorMode(initialColorValue);
    }, []);
    const setColorMode = (themeMode) => {
        rawSetColorMode(themeMode);
        updateThemeColors(themeMode, themeMode === 'light' ? theme.light : theme.dark);

    };
    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

function updateThemeColors(themeMode, theme) {
    if (!theme) {
        return;
    }
    const root = window.document.documentElement;
    localStorage.setItem('color-mode', themeMode);

    const cssProperties = Object.keys(theme);

    cssProperties.forEach(property => {
        const cssVariable = cssVariableNames[property];
        if (!cssVariable) {
            return;
        }
        root.style.setProperty(cssVariable, theme[property]);
    })
}

