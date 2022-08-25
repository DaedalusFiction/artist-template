import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import Gallery from "../../components/Gallery";
import { db } from "../../firebase";

const Art = ({ images }) => {
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
                    UNIQUE PIECES OF ART
                </Typography>
            </Box>
            <br />
            <Gallery images={images} category="artwork" />
        </>
    );
};

export const getStaticProps = async () => {
    const docsSnap = await getDocs(collection(db, "artwork"));
    let images = [];
    docsSnap.docs.forEach((doc, index) => {
        images = [...images, doc.data()];
    });

    return {
        props: {
            images,
        },
    };
};

export default Art;
