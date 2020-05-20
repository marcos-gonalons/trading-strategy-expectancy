export interface Props {
    balance: number;
    riskPerTrade: number;
    takeProfitDistance: number;
    stopLossDistance: number;
    approxSuccessRate: number;
    trades: number;
    period: string;
    simulationTimeUnit: number;
    simulationTimePeriod: string;
}
