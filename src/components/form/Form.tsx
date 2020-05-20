import React from "react";
import { Paper, TextField, Select, MenuItem, Button, Box } from "@material-ui/core";

import styles from "./Form.module.css";
import mainStyles from "../../pages/index/index.module.css";
import { Props } from "./Types";


function Form({ properties, setters }: Props): JSX.Element {
    const {
        balance,
        riskPerTrade,
        takeProfitDistance,
        stopLossDistance,
        approxSuccessRate,
        trades,
        period,
        simulationTimeUnit,
        simulationTimePeriod
    } = properties;
    const {
        setBalance,
        setRiskPerTrade,
        setTakeProfitDistance,
        setStopLossDistance,
        setApproxSuccessRate,
        setTrades,
        setPeriod,
        setSimulationTimeUnit,
        setSimulationTimePeriod
    } = setters;
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            <TextField
                label="Initial balance"
                className={styles["normal-text-input"]}
                type="number"
                value={balance}
                onChange={({ target: { value }}) => {
                    const v = parseInt(value);
                    setBalance(isNaN(v) ? 0 : v)
                }}
            />
            <TextField
                label="Percentage risk per trade"
                className={styles["normal-text-input"]}
                type="number"
                value={riskPerTrade}
                onChange={({ target: { value }}) => {
                    const v = parseInt(value);
                    if (isNaN(v) || v <= 0 || v >= 100) {
                        setRiskPerTrade(1)
                    } else {
                        setRiskPerTrade(v);
                    }
                }}
            />
            <TextField
                label="Take profit distance in pips"
                className={styles["normal-text-input"]}
                type="number"
                value={takeProfitDistance}
                onChange={({ target: { value }}) => {
                    const v = parseInt(value);
                    if (isNaN(v) || v <= 0 || v >= 10000) {
                        setTakeProfitDistance(10)
                    } else {
                        setTakeProfitDistance(v);
                    }
                }}
            />
            <TextField
                label="Stop loss distance in pips"
                className={styles["normal-text-input"]}
                type="number"
                value={stopLossDistance}
                onChange={({ target: { value }}) => {
                    const v = parseInt(value);
                    if (isNaN(v) || v <= 0 || v >= 10000) {
                        setStopLossDistance(10)
                    } else {
                        setStopLossDistance(v);
                    }
                }}
            />
            <TextField
                label="Approximate success rate"
                className={styles["normal-text-input"]}
                type="number"
                value={approxSuccessRate}
                onChange={({ target: { value }}) => {
                    const v = parseInt(value);
                    if (isNaN(v) || v <= 0 || v >= 100) {
                        setApproxSuccessRate(70)
                    } else {
                        setApproxSuccessRate(v);
                    }
                }}
            />
            <Box className={styles["box"]}>
                <span>I will make on average</span>
                <TextField
                    type="number"
                    className={styles["tiniest-input"]}
                    value={trades}
                    onChange={({ target: { value }}) => {
                        const v = parseInt(value);
                        if (isNaN(v) || v <= 0 || v >= 99999) {
                            setTrades(3)
                        } else {
                            setTrades(v);
                        }
                    }}
                />
                <span>trades every</span>
                <Select
                    value={period}
                    className={styles["tiny-input"]}
                    onChange={({ target: { value }}) => {
                        setPeriod(value as string);
                    }}
                >
                    <MenuItem value={"Day"}>Day</MenuItem>
                    <MenuItem value={"Week"}>Week</MenuItem>
                    <MenuItem value={"Month"}>Month</MenuItem>
                    <MenuItem value={"Year"}>Year</MenuItem>
                </Select>
            </Box>
            
            <Box className={styles["box"]}>
                <span>Simulate operative for </span>
                <TextField
                    type="number"
                    className={styles["tiniest-input"]}
                    value={simulationTimeUnit}
                    onChange={({ target: { value }}) => {
                        const v = parseInt(value);
                        if (isNaN(v) || v <= 0 || v >= 99999) {
                            setSimulationTimeUnit(1)
                        } else {
                            setSimulationTimeUnit(v);
                        }
                    }}
                />
                <Select
                    value={simulationTimePeriod}
                    className={styles["tiny-input"]}
                    onChange={({ target: { value }}) => {
                        setSimulationTimePeriod(value as string);
                    }}
                >
                    <MenuItem value={"Days"}>Day(s)</MenuItem>
                    <MenuItem value={"Weeks"}>Week(s)</MenuItem>
                    <MenuItem value={"Months"}>Month(s)</MenuItem>
                    <MenuItem value={"Years"}>Year(s)</MenuItem>
                </Select>
            </Box>
            <Box id={styles["simulate-button-box"]}>
                <Button variant="contained" color="primary">SIMULATE</Button>
            </Box>
        </Paper>
    );
}

export default Form;