import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import darkTheme from "../styles/themes/darkTheme";
import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../components/Layout";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
