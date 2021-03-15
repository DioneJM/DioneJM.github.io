import {theme} from "../gatsby-plugin-theme-ui";

export const PreLoadThemeScript = () => {
    let scriptToRun = `
    (function () {
        function getInitialColorMode() {
            const persistedColorPreference = window.localStorage.getItem('color-mode');
            const hasPersistedPreference = typeof persistedColorPreference === 'string';
            // If the user has explicitly chosen light or dark,
            // let's use it. Otherwise, this value will be null.
            if (hasPersistedPreference) {
                return persistedColorPreference;
            }
            // If they haven't been explicit, let's check the media
            // query
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
            if (hasMediaQueryPreference) {
                return mql.matches ? 'dark' : 'light';
            }
            // If they are using a browser/OS that doesn't support
            // color themes, let's default to 'light'.
            return 'light';
        }

        const colorMode = getInitialColorMode();
        const root = document.documentElement;
        root.style.setProperty(
            '--color-background',
            colorMode === 'light'
                ? '${theme.light.backgroundColor}'
                : '${theme.dark.backgroundColor}'
        );
        root.style.setProperty(
            '--color-text-title',
            colorMode === 'light'
                ? '${theme.light.titleTextColour}'
                : '${theme.dark.titleTextColour}'
        );
        root.style.setProperty(
            '--color-text-normal',
            colorMode === 'light'
                ? '${theme.light.normalTextColour}'
                : '${theme.dark.normalTextColour}'
        );
        root.style.setProperty(
            '--color-text-link',
            colorMode === 'light'
                ? '${theme.light.linkColour}'
                : '${theme.dark.linkColour}'
        );
        
        root.style.setProperty(
            '--normal-text-font',
            'Inter'
        );
        
        root.style.setProperty(
            '--quote-text-font',
            'Karla'
        );

        root.style.setProperty('--initial-color-mode', colorMode);
    })()
    `

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{__html: scriptToRun}}/>
}