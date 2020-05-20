import { Dispatch, SetStateAction } from "react";
import { Period } from "../../pages/Types";

export interface Props {
    properties: {
        balance: number;
        riskPerTrade: number;
        takeProfitDistance: number;
        stopLossDistance: number;
        approxSuccessRate: number;
        trades: number;
        period: Period;
        simulationTimeUnit: number;
        simulationTimePeriod: Period;
    },
    setters: {
        setBalance: Dispatch<SetStateAction<number>>;
        setRiskPerTrade: Dispatch<SetStateAction<number>>;
        setTakeProfitDistance: Dispatch<SetStateAction<number>>;
        setStopLossDistance: Dispatch<SetStateAction<number>>;
        setApproxSuccessRate: Dispatch<SetStateAction<number>>;
        setTrades: Dispatch<SetStateAction<number>>;
        setPeriod: Dispatch<SetStateAction<Period>>;
        setSimulationTimeUnit: Dispatch<SetStateAction<number>>;
        setSimulationTimePeriod: Dispatch<SetStateAction<Period>>;
        setCalculateFlag: Dispatch<SetStateAction<boolean>>;
    }
}
