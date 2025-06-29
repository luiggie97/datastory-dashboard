import { useEffect, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
}

export const AnimatedCounter = ({
    value,
    duration = 1000,
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 16);

        const animate = () => {
            start += increment;
            if (start < value) {
                setCount(Math.floor(start));
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animate();
    }, [value, duration]);

    return (
        <div
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#7847f5",
                textAlign: "center",
            }}
        >
            {count}
        </div>
    );
};
