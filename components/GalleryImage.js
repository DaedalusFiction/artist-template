import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

const GalleryImage = ({ image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    return (
        <Box>
            <Link href={`/${image.category}/${image.uploaded}`}>
                <Box>
                    <Image
                        src={image.URLs[0]}
                        blurDataURL={image}
                        placeholder="blur"
                        //has to be unoptimized to work with firebase storage, apparently
                        unoptimized
                        width="100"
                        height={100 / ratio}
                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                            setRatio(naturalWidth / naturalHeight)
                        }
                        layout="responsive"
                        alt={image.description}
                    />
                </Box>
            </Link>
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
        </Box>
    );
};

export default GalleryImage;
