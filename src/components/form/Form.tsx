import React from "react";
import { Paper, TextField, Select, MenuItem, Button, Box } from "@material-ui/core";

import styles from "./Form.module.css";
import mainStyles from "../../pages/index/index.module.css";
import { Props } from "./Types";
import { Period } from "../../pages/Types";


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
        simulationTimePeriod,
        yearlyTaxesPercentage
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
        setSimulationTimePeriod,
        setCalculateFlag,
        setYearlyTaxesPercentage
    } = setters;
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            <TextField
                label="Initial balance"
                className={styles["normal-text-input"]}
                type="number"
                value={balance}
                onChange={({ target: { value }}) => onChangeNumber(value, setBalance, 0, 999999999)}
            />
            <TextField
                label="Percentage risk per trade"
                className={styles["normal-text-input"]}
                type="number"
                value={riskPerTrade}
                onChange={({ target: { value }}) => onChangeNumber(value, setRiskPerTrade, 0, 100)}
            />
            <TextField
                label="Take profit distance in pips"
                className={styles["normal-text-input"]}
                type="number"
                value={takeProfitDistance}
                onChange={({ target: { value }}) => onChangeNumber(value, setTakeProfitDistance, 0, 10000)}
            />
            <TextField
                label="Stop loss distance in pips"
                className={styles["normal-text-input"]}
                type="number"
                value={stopLossDistance}
                onChange={({ target: { value }}) => onChangeNumber(value, setStopLossDistance, 0, 10000)}
            />
            <TextField
                label="Approximate success rate"
                className={styles["normal-text-input"]}
                type="number"
                value={approxSuccessRate}
                onChange={({ target: { value }}) => onChangeNumber(value, setApproxSuccessRate, 0, 100)}
            />
            <TextField
                label="Yearly taxes percentage"
                className={styles["normal-text-input"]}
                type="number"
                value={yearlyTaxesPercentage}
                onChange={({ target: { value }}) => onChangeNumber(value, setYearlyTaxesPercentage, 0, 100)}
            />
            <Box className={styles["box"]}>
                <span>I will make on average</span>
                <TextField
                    type="number"
                    className={styles["tiniest-input"]}
                    value={trades}
                    onChange={({ target: { value }}) => onChangeNumber(value, setTrades, 0, 99999)}
                />
                <span>trades every</span>
                <Select
                    value={period}
                    className={styles["tiny-input"]}
                    onChange={({ target: { value }}) => {
                        setPeriod(value as Period);
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
                    onChange={({ target: { value }}) => onChangeNumber(value, setSimulationTimeUnit, 0, 99999)}
                />
                <Select
                    value={simulationTimePeriod}
                    className={styles["tiny-input"]}
                    onChange={({ target: { value }}) => {
                        setSimulationTimePeriod(value as Period);
                    }}
                >
                    <MenuItem value={"Day"}>Day(s)</MenuItem>
                    <MenuItem value={"Week"}>Week(s)</MenuItem>
                    <MenuItem value={"Month"}>Month(s)</MenuItem>
                    <MenuItem value={"Year"}>Year(s)</MenuItem>
                </Select>
            </Box>
            <Box id={styles["simulate-button-box"]}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setCalculateFlag(false)
                        setTimeout(() => {
                            setCalculateFlag(true);
                        });
                    }}
                >
                    SIMULATE
                </Button>
            </Box>
        </Paper>
    );
}


function onChangeNumber(
    value: string,
    setter: (v: number) => void,
    min: number,
    max: number
): void {
    const v = parseInt(value);
    if (isNaN(v) || v <= min || v >= max) {
        setter(0)
    } else {
        setter(v);
    }
}

export default Form;