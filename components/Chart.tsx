import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styles from "../styles/module/chart.module.css";

export const Chart = ({ data }: any) => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className={styles.grid} />
            <XAxis dataKey="year" className={styles.axis} />
            <YAxis className={styles.axis} />
            <Tooltip
                contentStyle={{
                    backgroundColor: "#1e1832",
                    borderColor: "#7847f5",
                }}
                labelStyle={{ color: "#ffffff99" }}
            />
            <Line
                type="monotone"
                dataKey="value"
                stroke="#7847f5"
                strokeWidth={3}
            />
        </LineChart>
    </ResponsiveContainer>
);
