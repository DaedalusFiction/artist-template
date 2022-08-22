import { Input } from "@mui/material";
import React, { useState } from "react";

const FirestoreListingItemField = ({ field }) => {
    const [value, setValue] = useState(field.value);
    return <Input value={value} type={field.type} onChange={handleChange} />;
};

export default FirestoreListingItemField;
