import React from "react";
import { Paper } from "@material-ui/core";

import mainStyles from "../../pages/index/index.module.css";
import { Props } from "./Types";

function Result(a: Props): JSX.Element {
    console.log(a.balance);
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            Result here
        </Paper>
    );
}


export default Result;

