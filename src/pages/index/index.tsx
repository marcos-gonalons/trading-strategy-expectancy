import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/form/Form";
import Result from "../../components/result/Result";

import styles from "./index.module.css";

function Index(): JSX.Element {
    const [balance, setBalance] = useState<number>(10000);
    const [riskPerTrade, setRiskPerTrade] = useState<number>(1);
    const [takeProfitDistance, setTakeProfitDistance] = useState<number>(10);
    const [stopLossDistance, setStopLossDistance] = useState<number>(10);
    const [approxSuccessRate, setApproxSuccessRate] = useState<number>(70);
    const [trades, setTrades] = useState<number>(3);
    const [period, setPeriod] = useState<string>("Day");
    const [simulationTimeUnit, setSimulationTimeUnit] = useState<number>(1);
    const [simulationTimePeriod, setSimulationTimePeriod] = useState<string>("Years");
	return (
		<Container maxWidth="lg">
			<Grid
				container
				spacing={3}
				id={styles["main-container"]}
				justify="space-evenly"
			>
				<Grid item sm={12} md={5}>
					<Form
						properties={{
							balance, riskPerTrade, takeProfitDistance, stopLossDistance, approxSuccessRate,
							trades, period, simulationTimeUnit, simulationTimePeriod
						}}
						setters={{
							setBalance, setRiskPerTrade, setTakeProfitDistance, setStopLossDistance, setApproxSuccessRate,
							setTrades, setPeriod, setSimulationTimeUnit, setSimulationTimePeriod
						}}
					/>
				</Grid>
				<Grid item sm={12} md={5}>
					<Result
						balance={balance}
						riskPerTrade={riskPerTrade}
						takeProfitDistance={takeProfitDistance}
						stopLossDistance={stopLossDistance}
						approxSuccessRate={approxSuccessRate}
						trades={trades}
						period={period}
						simulationTimeUnit={simulationTimeUnit}
						simulationTimePeriod={simulationTimePeriod}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Index;
