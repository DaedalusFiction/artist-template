import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Head from "next/head";
import login from "../../utility/login.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import FirebaseUploadForm from "../../components/FirebaseUploadForm.js";
import FirestoreListing from "../../components/FirestoreListing.js";

const artConfig = {
    category: "artwork",
    fields: [
        { name: "Title", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Year", type: "number", value: "" },
        { name: "Price", type: "number", value: "" },
        { name: "Medium", type: "text", value: "" },
    ],
};

const clothingConfig = {
    category: "clothing",
    fields: [
        { name: "Title", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Year", type: "number", value: "" },
        { name: "Price", type: "number", value: "" },
        { name: "Medium", type: "text", value: "" },
    ],
};

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [updateCounter, setUpdateCounter] = useState(0);

    const handleSignIn = async () => {
        const user = await login();
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const task = await getDoc(userRef).then((response) => {
                setIsAdmin(response.data().admin);
                setIsLoggedIn(true);
            });
        }
    };

    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
                <title>Admin</title>
            </Head>
            <Typography variant="h1">Admin</Typography>
            <Box sx={{ padding: "4rem 0" }}>
                {!isLoggedIn && (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSignIn}
                        sx={{ marginBottom: "1rem" }}
                    >
                        Sign in with google
                    </Button>
                )}

                {isAdmin ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FirebaseUploadForm
                                config={artConfig}
                                updateCounter={updateCounter}
                                setUpdateCounter={setUpdateCounter}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FirebaseUploadForm
                                config={clothingConfig}
                                updateCounter={updateCounter}
                                setUpdateCounter={setUpdateCounter}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FirestoreListing
                                category="artwork"
                                updateCounter={updateCounter}
                                setUpdateCounter={setUpdateCounter}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FirestoreListing
                                category="clothing"
                                updateCounter={updateCounter}
                                setUpdateCounter={setUpdateCounter}
                            />
                        </Grid>
                    </Grid>
                ) : (
                    <Typography>
                        You are not logged in as an administrator. Please
                        contact Dave at hello@fictionalweb.com if you continue
                        to experience difficulties.
                    </Typography>
                )}
            </Box>
        </>
    );
};

export default Admin;
