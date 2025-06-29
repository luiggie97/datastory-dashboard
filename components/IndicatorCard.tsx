import styles from "../styles/module/indicatorCard.module.css";
import { AnimatedCounter } from "../components/AnimatedCounter";

type IndicatorCardProps = {
    data: { year: number; value: number }[];
};

export const IndicatorCard = ({ data }: IndicatorCardProps) => {
    if (data.length < 2) return null;

    const sorted = [...data].sort((a, b) => a.year - b.year);
    const latest = sorted[sorted.length - 1];
    const previous = sorted[sorted.length - 2];

    const difference = latest.value - previous.value;
    const percentageChange = ((difference / previous.value) * 100).toFixed(2);
    const isUp = difference >= 0;

    return (
        <div className={styles.card}>
            <div className={styles.value}>
                <AnimatedCounter value={latest.value} />
                <span className={styles.year}>
                    ({latest.year - 1}) - ({latest.year})
                </span>
            </div>
            <div
                className={styles.change}
                style={{ color: isUp ? "#4caf50" : "#f44336" }}
            >
                {isUp ? "📈" : "📉"} {isUp ? "+" : ""}
                {percentageChange}%
            </div>
            <div className={styles.status}>{isUp ? "Up" : "Down"}</div>
        </div>
    );
};
