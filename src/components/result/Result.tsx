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
    yearlyTaxesPercentage,
    calculate
}: Props): JSX.Element {
    let finalAmount = initialBalance;
    let amountOfPositiveTrades = 0;
    let amountOfNegativeTrades = 0;
    let totalTrades = 0;
    totalTrades = calculate ? getTotalTrades(trades, period, simulationTimeUnit, simulationTimePeriod) : 0;
    let detailedString = "";
    let totalTaxes = 0;

    if (calculate) {
        const tradesPerYear = (trades / getDaysInPeriodWhereTradesCanBeOpened(period)) * getDaysInPeriodWhereTradesCanBeOpened("Year");
        let tradesPerYearCounter = 0;

        for (let i = 0; i <= totalTrades; i += 1) {
            const positionSize = Math.floor(finalAmount * (riskPerTrade/100) / stopLossDistance) || 1;
            detailedString += `Current balance: ${finalAmount}\n`;
            detailedString += `Position size = ${positionSize}\n`;
            if (Math.random() <= approxSuccessRate / 100) {
                amountOfPositiveTrades += 1;
                const profit = (positionSize * takeProfitDistance);
                detailedString += `Profit = ${positionSize} x ${takeProfitDistance} = ${profit}\n`;
                detailedString += `New balance = ${finalAmount} + ${profit} = ${finalAmount + profit}\n\n`;
                finalAmount += profit;
            } else {
                amountOfNegativeTrades += 1;
                const loss = (positionSize * stopLossDistance);
                detailedString += `Loss = ${positionSize} x ${stopLossDistance} = ${loss}\n`;
                detailedString += `New balance = ${finalAmount} - ${loss} = ${finalAmount - loss}\n\n`;
                finalAmount -= loss;
            }
            if (finalAmount <= 0) {
                totalTrades = i;
                finalAmount = 0;
                break;
            }

            tradesPerYearCounter++;
            if (tradesPerYearCounter >= tradesPerYear) {
                if (finalAmount <= initialBalance) continue;
                const deduction = (finalAmount * (yearlyTaxesPercentage / 100));
                totalTaxes += deduction;
                detailedString += `TAXES DEDUCTION -> ${finalAmount} - ${deduction} = ${finalAmount - deduction}\n\n`;
                tradesPerYearCounter = 0;
            }
        }
    }

    let profitsClassName = calculate ? (finalAmount > initialBalance ? "positive" : "negative") : "positive";
    let finalAmountClassName = calculate ? (finalAmount - totalTaxes > initialBalance ? "positive" : "negative") : "positive";
    return (
        <Paper className={mainStyles["card"]} elevation={24}>
            <h1 id={styles["result-title"]}>Results</h1>
            <div className={styles["results-div"]}>
                Total trades performed in the period: <b>{totalTrades}</b>
            </div>
            <div className={styles["results-div"]}>
                Final success rate: <b>{ calculate ? Math.round((amountOfPositiveTrades / totalTrades) * 10000) / 100 : "-" }</b>
            </div>
            <div className={styles["results-div"]}>
                Total profits: <b className={styles[profitsClassName]}>
                    { finalAmount === initialBalance ? 0 : (Math.round(finalAmount).toLocaleString()) }
                </b>
            </div>
            <div className={styles["results-div"]}>
                Total taxes: <b className={styles["negative"]}>{Math.round(totalTaxes).toLocaleString()}</b>
            </div>
            <div className={styles["results-div"]}>
                Final amount: <b className={styles[finalAmountClassName]}>{Math.round(finalAmount - totalTaxes).toLocaleString()}</b>
            </div>
            <div className={styles["results-div"]}>
                <textarea rows={10} readOnly value={detailedString}></textarea>
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

