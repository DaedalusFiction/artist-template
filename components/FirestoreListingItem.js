import {
    Box,
    Button,
    IconButton,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { db, storage } from "../firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import FirestoreListingItemField from "./FirestoreListingItemField";
import { useState } from "react";

const FirestoreListingItem = ({
    image,
    category,
    updateCounter,
    setUpdateCounter,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(image.data()))
    );
    const [isUpdating, setIsUpdating] = useState(false);
    const handleDelete = () => {
        let urls = image.data().URLs;
        urls.forEach((url) => {
            deleteObject(ref(storage, url));
        });
        deleteDoc(doc(db, category, image.id));
        setUpdateCounter(updateCounter + 1);
    };

    const handleUpdate = async () => {
        setIsUpdating(true);
        const docRef = doc(db, category, image.id);
        await setDoc(docRef, formData).then(() => {
            setIsUpdating(false);
        });
    };

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };
        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    return (
        <Box
            sx={{
                border: "1px solid white",
                padding: ".5em",
                margin: ".5em 0",
            }}
        >
            {image &&
                formData.fields.map((field, index) => {
                    return (
                        <TextField
                            fullWidth
                            type={field.type}
                            color="secondary"
                            label={field.name}
                            key={index}
                            multiline={true}
                            rows={field.rows}
                            value={field.value}
                            onChange={(e) => {
                                handleFieldChange(e, field, index);
                            }}
                        />
                    );
                })}

            <IconButton variant="contained" onClick={handleDelete}>
                <ClearIcon />
            </IconButton>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdate}
                disabled={isUpdating}
            >
                update
            </Button>
        </Box>
    );
};

export default FirestoreListingItem;
