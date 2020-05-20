import { Period } from "../../pages/Types";

export interface Props {
    balance: number;
    riskPerTrade: number;
    takeProfitDistance: number;
    stopLossDistance: number;
    approxSuccessRate: number;
    trades: number;
    period: Period;
    simulationTimeUnit: number;
    simulationTimePeriod: Period;
    calculate: boolean;
}
