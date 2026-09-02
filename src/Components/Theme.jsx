import { useState, useMemo } from "react";

export function Themes() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };

    const doubleNumber = useMemo(() => {
        return slowfunction(number);
    }, [number]);

    return (
        <div>
            <h1>Theme</h1>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>

            <div style={themeStyle}>
                {doubleNumber}
            </div>
        </div>
    );
}

function slowfunction(num) {
    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
}