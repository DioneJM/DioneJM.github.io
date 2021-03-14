/**
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import {PreLoadThemeScript} from "./src/utils/ssr-utils";

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<PreLoadThemeScript />);
};