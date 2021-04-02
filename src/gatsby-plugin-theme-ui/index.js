const black = `#1F1F1E`;
const blue = `#5F87AB`;
const lightBlue = `#aec6cf`;
const cream = `#FAFABB`;
const brownSugar = `#C47245`;
const sienna = `#CE8964`;
const brownWhite = `#FAF3EF`;

/**
 * @type {{secondary: string, main: string, accent: string, primary: string}}
 * primary: primary color e.g. for article title
 * secondary: complements `primary` e.g. for text in an article
 * accent: contrasts `primary` e.g. link in an article
 * background: background colour
 */

export const theme = {
    dark: {
        backgroundColor: black,
        titleTextColour: blue,
        normalTextColour: lightBlue,
        linkColour: cream
    },
    light: {
        backgroundColor: brownWhite,
        titleTextColour: brownSugar,
        normalTextColour: sienna,
        linkColour: blue
    }
}
export const darkTheme = {
    primary: blue,
    secondary: lightBlue,
    accent: cream,
    background: black,
}

export const lightTheme = {
    primary: brownSugar,
    secondary: sienna,
    accent : blue,
    background: brownWhite
}

export default {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
    useCustomProperties: true,
    colors: {
        text: theme.light.normalTextColour,
        background: theme.light.backgroundColor,
        primary: theme.light.normalTextColour,
        modes: {
            dark: {
                text: theme.dark.normalTextColour,
                background: theme.dark.backgroundColor,
                primary: theme.dark.normalTextColour
            },
        }
    }
};
