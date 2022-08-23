import {
    Box,
    Button,
    IconButton,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { db, storage } from "../firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const FirestoreListingItem = ({
    image,
    category,
    updateCounter,
    setUpdateCounter,
    setShownImages,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(image.data()))
    );
    const [isUpdating, setIsUpdating] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleCollapse = () => {
        setIsExpanded(false);
    };

    const handleDelete = async () => {
        setIsUpdating(true);
        let urls = image.data().URLs;
        urls.forEach((url) => {
            deleteObject(ref(storage, url));
        });
        await deleteDoc(doc(db, category, image.id));
        setUpdateCounter(updateCounter + 1);
        setShownImages([]);
        setIsUpdating(false);
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
        <Box>
            {!isExpanded ? (
                <Box
                    sx={{
                        border: "1px solid white",
                        padding: ".5em",
                        margin: ".5em 0",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    onClick={handleExpand}
                >
                    <Typography>{image.data().id}</Typography>
                    <ExpandMoreIcon />
                </Box>
            ) : (
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: ".5em",
                        }}
                    >
                        <Box sx={{ display: "flex", gap: "1em" }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleUpdate}
                                disabled={isUpdating}
                            >
                                update
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleDelete}
                                disabled={isUpdating}
                            >
                                delete
                            </Button>
                        </Box>
                        <IconButton
                            variant="contained"
                            onClick={handleCollapse}
                        >
                            <ExpandLessIcon />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default FirestoreListingItem;
