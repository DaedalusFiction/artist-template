import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import Gallery from "../../components/Gallery";
import { db } from "../../firebase";

const clothing = ({ images }) => {
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
                    HAND-MADE CLOTHING
                </Typography>
            </Box>
            <br />
            <Gallery images={images} category="clothing" />
        </>
    );
};

export const getStaticProps = async () => {
    const docsSnap = await getDocs(collection(db, "clothing"));
    let images = [];
    docsSnap.docs.forEach((doc, index) => {
        images = [...images, doc.data()];
        // console.log(doc.data());
    });

    return {
        props: {
            images,
        }, // will be passed to the page component as props
    };
};

export default clothing;
