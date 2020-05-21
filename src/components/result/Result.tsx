import React from "react";
import { Paper } from "@material-ui/core";

import mainStyles from "../../pages/index/index.module.css";
import styles from "./Result.module.css";
import { Props } from "./Types";
import { Period } from "../../pages/Types";

function Result({
    balance: initialBalance,
    riskPerTrade,
    takeProfitDistance,
    stopLossDistance,
    approxSuccessRate,
    trades,
    period,
    simulationTimeUnit,
    simulationTimePeriod,
}: Props): JSX.Element {
    let finalAmount = initialBalance;
    let amountOfPositiveTrades = 0;
    let amountOfNegativeTrades = 0;
    let totalTrades = 0;
    totalTrades = getTotalTrades(trades, period, simulationTimeUnit, simulationTimePeriod);

    for (let i = 0; i <= totalTrades; i += 1) {
        const positionSize = Math.floor(finalAmount * (riskPerTrade/100) / stopLossDistance) || 1;
        if (Math.random() <= approxSuccessRate / 100) {
            amountOfPositiveTrades += 1;
            finalAmount += (positionSize * takeProfitDistance);
        } else {
            amountOfNegativeTrades += 1;
            finalAmount -= (positionSize * stopLossDistance);
        }
        if (finalAmount <= 0) {
            break;
        }
    }

    let amountClassName = finalAmount > initialBalance ? "positive" : "negative";
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            <h1 id={styles["result-title"]}>Results</h1>
            <div className={styles["results-div"]}>
                Total trades performed in the period: <b>{totalTrades}</b>
            </div>
            <div className={styles["results-div"]}>
                Final success rate: <b>{ Math.round((amountOfPositiveTrades / totalTrades) * 10000) / 100 }</b>
            </div>
            <div className={styles["results-div"]}>
                Final amount: <b className={styles[amountClassName]}>{finalAmount.toLocaleString()}</b>
            </div>
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
    const simulationDays = Math.ceil(simulationTimeUnit * getDaysInPeriodWhereTradesCanBeOpened(simulationTimePeriod));
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


function getDaysInPeriodWhereTradesCanBeOpened(period: Period): number {
    switch (period) {
        case "Day": return 1;
        case "Week": return 5;
        case "Month": return 22;
        case "Year": return 264;
    }
}
export default Result;

