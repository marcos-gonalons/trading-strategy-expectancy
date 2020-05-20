import React, { useState } from "react";
import { Paper, TextField, Select, MenuItem, Button } from "@material-ui/core";

import styles from "./Form.module.css";
import mainStyles from "../../pages/index/index.module.css";

function Form(): JSX.Element {
    const [balance, setBalance] = useState<number>(100000);
    const [riskPerTrade, setRiskPerTrade] = useState<number>(1);
    const [takeProfitDistance, setTakeProfitDistance] = useState<number>(10);
    const [stopLossDistance, setStopLossDistance] = useState<number>(10);
    const [approxSuccessRate, setApproxSuccessRate] = useState<number>(70);
    const [trades, setTrades] = useState<number>(3);
    const [period, setPeriod] = useState<string>("Day");
    const [simulationTimeUnit, setSimulationTimeUnit] = useState<number>(1);
    const [simulationTimePeriod, setSimulationTimePeriod] = useState<string>("Years");
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
            I will make on average
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
            trades every
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
            
            <br />
            <br />
            Simulate operative for 
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
            <br/><br/><Button variant="contained" color="primary">SIMULATE</Button>
        </Paper>
    );
}

export default Form;