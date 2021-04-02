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
        headerColor: '#141414',
        titleTextColour: '#799BB9',
        normalTextColour: '#D7E1EA',
        linkColour: cream
    },
    light: {
        backgroundColor: brownWhite,
        headerColor: '#8C4D2C',
        titleTextColour: brownSugar,
        normalTextColour: sienna,
        linkColour: blue
    }
}

const defaultTheme = {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
    useCustomProperties: true,
    colors: {
        text: theme.light.normalTextColour,
        background: theme.light.backgroundColor,
        primary: theme.light.linkColour,
        highlight: theme.light.linkColour,
        modes: {
            dark: {
                text: theme.dark.normalTextColour,
                background: theme.dark.backgroundColor,
                primary: theme.dark.linkColour,
                highlight: theme.dark.linkColour,
            },
        }
    }
};

export default defaultTheme;
