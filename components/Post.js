import { Box, Grid, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import Image from "next/image";

const Post = () => {
    const router = useRouter();
    const params = router.query;
    const category = router.pathname.split("/")[1];
    const [image, setImage] = useState(null);
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    useEffect(() => {
        async function getImage() {
            const imageRef = doc(db, category, params.id);
            console.log("ID", params.id);
            const getTask = await getDoc(imageRef);
            setImage(getTask.data());
        }
        getImage();
    }, [params.id, category, router.pathname]);
    return (
        <Box>
            <Typography variant="h1" sx={{ margin: ".5rem 0" }}>
                {params.id}
            </Typography>
            {image && (
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Image
                            src={image.URLs[0]}
                            blurDataURL={image}
                            placeholder="blur"
                            //has to be unoptimized to work with firebase storage, apparently
                            unoptimized
                            width="100"
                            height={100 / ratio}
                            onLoadingComplete={({
                                naturalWidth,
                                naturalHeight,
                            }) => setRatio(naturalWidth / naturalHeight)}
                            layout="responsive"
                            alt={image.description}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            {image.fields.map((field, index) => {
                                return (
                                    <Grid container key={index}>
                                        <Grid item xs={4}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {field.name}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ whiteSpace: "pre-wrap" }}
                                            >
                                                {field.value.trim()}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Post;
