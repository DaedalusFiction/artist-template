import { Box, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Gallery from "../components/Gallery";

const Art = () => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
                <title>Shandon Black - Art</title>
            </Head>
            <Box>
                <Typography variant="h1" sx={{ margin: ".5rem 0" }}>
                    Artwork
                </Typography>
                <Typography sx={{ paddingBottom: "2em" }}>
                    IMAGES LOAD ON CLICK TO CONSERVE ENERGY
                </Typography>
            </Box>
            <br />
            <Gallery category="artwork" />
        </>
    );
};

export default Art;
