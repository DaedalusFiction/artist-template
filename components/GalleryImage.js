import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const GalleryImage = ({ image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const handleClick = () => {
        setIsVisible(true);
    };
    return (
        <Box>
            {isVisible ? (
                <>
                    <Image
                        src={image.data().URLs[0]}
                        blurDataURL={image.data()}
                        placeholder="blur"
                        //has to be unoptimized to work with firebase storage, apparently
                        unoptimized
                        width="100"
                        height={100 / ratio}
                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                            setRatio(naturalWidth / naturalHeight)
                        }
                        layout="responsive"
                        alt=""
                    />
                    <Grid container spacing={0}>
                        {image.data().fields.map((field, index) => {
                            return (
                                <>
                                    {/* <Grid item key={index} xs={4}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {field.name}:
                                        </Typography>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ whiteSpace: "pre-wrap" }}
                                        >
                                            {field.value.trim()}
                                        </Typography>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </>
            ) : (
                <>
                    <Box
                        sx={{
                            paddingTop: "100%",
                            width: "100%",
                            backgroundColor: "black",
                            border: "1px solid white",
                            cursor: "pointer",
                            transition: "100ms",
                            "&:hover": {
                                backgroundColor: "#282828",
                                transform: "translateY(-3px)",
                            },
                        }}
                        onClick={handleClick}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{
                                padding: "0 .25em",
                                textAlign: "end",
                            }}
                        >
                            CLICK TO VIEW
                        </Typography>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default GalleryImage;
