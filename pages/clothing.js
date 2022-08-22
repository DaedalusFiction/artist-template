import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";
import Gallery from "../components/Gallery";

const clothing = () => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
                <title>Shandon Black - Wearable Sculptures</title>
            </Head>
            <Box>
                <Typography variant="h1" sx={{ margin: ".5rem 0" }}>
                    Wearable Sculptures
                </Typography>
                <Typography sx={{ paddingBottom: "2em" }}>
                    IMAGES LOAD ON CLICK TO CONSERVE ENERGY
                </Typography>
            </Box>
            <br />
            <Gallery category="clothing" />
        </>
    );
};

export default clothing;
