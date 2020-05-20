export interface Props {
    properties: {
        balance: number;
        riskPerTrade: number;
        takeProfitDistance: number;
        stopLossDistance: number;
        approxSuccessRate: number;
        trades: number;
        period: string;
        simulationTimeUnit: number;
        simulationTimePeriod: string;
    },
    setters: {
        setBalance: (v: number) => void;
        setRiskPerTrade: (v: number) => void;
        setTakeProfitDistance: (v: number) => void;
        setStopLossDistance: (v: number) => void;
        setApproxSuccessRate: (v: number) => void;
        setTrades: (v: number) => void;
        setPeriod: (v: string) => void;
        setSimulationTimeUnit: (v: number) => void;
        setSimulationTimePeriod: (v: string) => void;
    }
}
