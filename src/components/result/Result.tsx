import React from "react";
import { Paper } from "@material-ui/core";

import mainStyles from "../../pages/index/index.module.css";

function Result(): JSX.Element {
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            Result here
        </Paper>
    );
}


export default Result;

