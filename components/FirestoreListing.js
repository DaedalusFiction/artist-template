import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import useGetImages from "../hooks/useGetImages";
import FirestoreListingItem from "./FirestoreListingItem";

const FirestoreListing = ({ category, updateCounter, setUpdateCounter }) => {
    const [images] = useGetImages(category, updateCounter);
    const [shownImages, setShownImages] = useState([]);

    const handleSearchChange = (e) => {
        if (e.target.value === "") {
            setShownImages([]);
            return;
        }
        let newShownImages = images.filter((image) =>
            image.data().id.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setShownImages(newShownImages);
    };

    return (
        <>
            <Typography variant="h5">
                Delete {category} database entries
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: ".5em" }}>
                <Typography>Search:</Typography>
                <Input
                    color="secondary"
                    type="text"
                    onChange={handleSearchChange}
                />
            </Box>
            {shownImages &&
                shownImages.length > 0 &&
                shownImages.map((image, index) => {
                    return (
                        <FirestoreListingItem
                            key={index}
                            image={image}
                            category={category}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                            setShownImages={setShownImages}
                        />
                    );
                })}
            {shownImages && shownImages.length === 0 && (
                <Typography>No listings to show</Typography>
            )}
        </>
    );
};

export default FirestoreListing;
