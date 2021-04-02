import {useColorMode} from 'theme-ui';
import { theme } from '../gatsby-plugin-theme-ui/index';

function useThemeColors() {
    const [colorMode] = useColorMode()

    const getThemeColor = (key) => {
        return theme[colorMode][key];
    };

    return {
        getThemeColor
    };
}

export default useThemeColors;