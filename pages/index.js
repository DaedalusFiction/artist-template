import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const artist = "SHANDON BLACK";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{artist}</title>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
                <link
                    rel="preload"
                    href="/fonts/CormorantGaramond-Light.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
                <link
                    rel="preload"
                    href="/fonts/TitilliumWeb-SemiBold.ttf"
                    as="font"
                    crossOrigin=""
                    type="truetype"
                />
            </Head>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "1.25rem",
                                    textAlign: "end",
                                }}
                            >
                                <Link href="/about">{artist}</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.5}
                    sx={{
                        // borderRight: { xs: "none", md: "1px solid black" },
                        // borderBottom: { xs: "1px solid black", md: "none" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        gap: ".5em",
                        padding: "5vw 5vw 25vw 5vw",
                    }}
                >
                    <Box>
                        <Typography variant="h2" align="right">
                            <Link href="/clothing">CLOTHING</Link>
                        </Typography>
                        <Typography align="center">
                            (wearable sculptures)
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Box></Box>
                    {/* <Box
                        sx={{
                            transform: "rotate(45deg)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            backgroundColor: "white",
                            padding: "1rem",
                        }}
                    >
                        <Box
                            sx={{
                                border: "1px solid white",
                                transform: "rotate(45deg)",
                                // borderRadius: "100%",
                                width: "5vw",
                                height: "5vw",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            <Link href="/about">?</Link>
                        </Box>
                    </Box> */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        gap: ".5em",
                        padding: "25vw 5vw 5vw 5vw",
                    }}
                >
                    <Typography variant="h2">
                        <Link href="/art">ART</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
