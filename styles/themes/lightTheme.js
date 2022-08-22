import { createTheme } from "@mui/material/styles";

let lightTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#000000",
        },
        mode: "light",
        background: {
            default: "#ffffff",
        },
        custom: {
            dark: "#000000",
            darkMuted: "#000000",
            light: "#ffffff",
            lightMuted: "#ffffff",
        },
    },
    // typography: {
    //     primary: {
    //         accent: "Yeseva",
    //         decorative: "InconsolataRegular",
    //         main: "InconsolataRegular",
    //     },
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `

    //     @font-face {
    //       font-family: 'Yeseva';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 600;
    //       src: local('Yeseva'), local('Yeseva-regular'), url(${yeseva}) format('truetype');
    //     }
    //     @font-face {
    //       font-family: 'inconsolataRegular';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 600;
    //       src: local('inconsolataRegular'), local('inconsolataRegular'), url(${inconsolataRegular}) format('truetype');
    //     }
    //   `,
    //     },
    // },
});

lightTheme = createTheme(lightTheme, {
    border: "1px solid red",
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: lightTheme.typography.lightTheme.accent,
            color: lightTheme.palette.custom.dark,
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
        },
        h2: {
            // fontFamily: lightTheme.typography.lightTheme.accent,
            color: lightTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            // fontFamily: lightTheme.typography.lightTheme.accent,
            color: lightTheme.palette.custom.dark,
        },
        h5: {
            // color: lightTheme.palette.text.secondary,
            fontWeight: "bold",
        },
        h6: {
            fontWeight: "bold",
        },
        subtitle1: {
            color: lightTheme.palette.custom.darkMuted,
            fontSize: "1rem",
        },
        subtitle2: {
            color: lightTheme.palette.custom.darkMuted,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: "1rem",
            color: lightTheme.palette.custom.darkMuted,
            // fontFamily: lightTheme.typography.lightTheme.main,
        },
        body2: {
            fontSize: "1rem",
            lineHeight: "1rem",
            // color: lightTheme.palette.custom.decorative,
            // fontFamily: lightTheme.typography.lightTheme.decorative,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: lightTheme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: lightTheme.typography.lightTheme.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default lightTheme;
