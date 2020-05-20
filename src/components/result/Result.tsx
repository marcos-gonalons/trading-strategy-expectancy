import React from "react";
import { Paper } from "@material-ui/core";

import mainStyles from "../../pages/index/index.module.css";
import styles from "./Result.module.css";
import { Props } from "./Types";
import { Period } from "../../pages/Types";

function Result({
    balance,
    riskPerTrade,
    takeProfitDistance,
    stopLossDistance,
    approxSuccessRate,
    trades,
    period,
    simulationTimeUnit,
    simulationTimePeriod,
    calculate
}: Props): JSX.Element {
    let finalAmount = balance;
    let amountOfPositiveTrades = 0;
    let amountOfNegativeTrades = 0;
    let totalTrades = 0;

    if (calculate === true) {
        totalTrades = getTotalTrades(trades, period, simulationTimeUnit, simulationTimePeriod);

        for (let i = 0; i <= totalTrades; i += 1) {
            const positionSize = Math.floor(finalAmount * (riskPerTrade/100) / stopLossDistance);
            if (Math.random() <= approxSuccessRate / 100) {
                amountOfPositiveTrades += 1;
                finalAmount += (positionSize * takeProfitDistance);
            } else {
                amountOfNegativeTrades += 1;
                finalAmount -= (positionSize * stopLossDistance);
            }
        }
    }
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            <h1 id={styles["result-title"]}>Results</h1>
            { calculate === true ? (
                <>
                    <div>Total trades: {totalTrades}</div>
                    <div>Success rate: { Math.round((amountOfPositiveTrades / totalTrades) * 10000) / 100 }</div>
                    <div>Final amount: {finalAmount.toLocaleString()}</div>
                </>
            ) : <></>}
        </Paper>
    );
}


function getTotalTrades(
    averageTrades: number,
    averageTradesPeriod: Period,
    simulationTimeUnit: number,
    simulationTimePeriod: Period
): number {
    const tradesPerDay = Math.ceil(averageTrades / getDaysInPeriod(averageTradesPeriod));
    const simulationDays = Math.ceil(simulationTimeUnit * getDaysInPeriod(simulationTimePeriod));
    return tradesPerDay * simulationDays;
}


function getDaysInPeriod(period: Period): number {
    switch (period) {
        case "Day": return 1;
        case "Week": return 7;
        case "Month": return 30.5;
        case "Year": return 365;
    }
}

export default Result;

