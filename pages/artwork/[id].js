import { Button } from "@mui/material";
import React from "react";

const artImage = ({ params }) => {
    const handleClick = () => {
        console.log(params);
    };
    return (
        <div>
            <Button color="secondary" onClick={handleClick}>
                test
            </Button>
        </div>
    );
};

export default artImage;
