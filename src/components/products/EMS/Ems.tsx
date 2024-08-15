import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2024-10-01";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const ShiftingCountdown: React.FC = () => {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row g-3">
                    <div>
                        <h2 className="text-center text-primary-emphasis">
                            Coming Soon ...
                        </h2>
                    </div>
                    <div className="col-6 col-md-3">
                        <CountdownItem unit="Day" text="Days" />
                    </div>
                    <div className="col-6 col-md-3">
                        <CountdownItem unit="Hour" text="Hours" />
                    </div>
                    <div className="col-6 col-md-3">
                        <CountdownItem unit="Minute" text="Minutes" />
                    </div>
                    <div className="col-6 col-md-3">
                        <CountdownItem unit="Second" text="Seconds" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div className="card text-center shadow-sm">
            <div className="card-body">
                <div className="position-relative w-100 overflow-hidden">
                    <span
                        ref={ref}
                        className="d-block display-4 fw-bold"
                        style={{color: "#00796b"}}
                    >
                        {time}
                    </span>
                </div>
                <h5 className="card-title text-muted">{text}</h5>
            </div>
        </div>
    );
};

export default ShiftingCountdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
const useTimer = (unit: Units) => {
    const [ref, animate] = useAnimate();

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeRef = useRef(0);

    const [time, setTime] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        const end = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = +end - +now;

        let newTime = 0;

        if (unit === "Day") {
            newTime = Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((distance % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((distance % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };

    return { ref, time };
};
