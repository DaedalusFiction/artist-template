import { Typography } from "@mui/material";
import React, { useState } from "react";
import useGetImages from "../hooks/useGetImages";
import FirestoreListingItem from "./FirestoreListingItem";

const FirestoreListing = ({ category, updateCounter, setUpdateCounter }) => {
    const [images] = useGetImages(category, updateCounter);
    return (
        <>
            <Typography variant="h5">
                Delete {category} database entries
            </Typography>
            {images &&
                images.length > 0 &&
                images.map((image, index) => {
                    return (
                        <FirestoreListingItem
                            key={index}
                            image={image}
                            category={category}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                        />
                    );
                })}
            {images && images.length === 0 && (
                <Typography>No listings to show</Typography>
            )}
        </>
    );
};

export default FirestoreListing;
