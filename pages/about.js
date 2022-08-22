import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";

const about = () => {
    return (
        <div>
            <Head>
                <title>Shandon Black - About</title>
                <meta name="keywords" content="photography, art, clothing" />
            </Head>
            <Typography variant="h1">About</Typography>
            <Box sx={{ margin: "4rem 0" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>picture</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Totam quidem molestias velit
                                explicabo nostrum quaerat autem, repellendus
                                reprehenderit? Eius illo optio nisi unde
                                consequatur aperiam tenetur doloremque illum
                                reprehenderit dignissimos, blanditiis officia
                                eos tempora nihil laboriosam dolorem recusandae
                                mollitia distinctio!
                            </Typography>
                            <br />
                            <Typography>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Totam quidem molestias velit
                                explicabo nostrum quaerat autem, repellendus
                                reprehenderit? Eius illo optio nisi unde
                                consequatur aperiam tenetur doloremque illum
                                reprehenderit dignissimos, blanditiis officia
                                eos tempora nihil laboriosam dolorem recusandae
                                mollitia distinctio!
                            </Typography>
                            <br />
                            <Typography>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Totam quidem molestias velit
                                explicabo nostrum quaerat autem, repellendus
                                reprehenderit? Eius illo optio nisi unde
                                consequatur aperiam tenetur doloremque illum
                                reprehenderit dignissimos, blanditiis officia
                                eos tempora nihil laboriosam dolorem recusandae
                                mollitia distinctio!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default about;
