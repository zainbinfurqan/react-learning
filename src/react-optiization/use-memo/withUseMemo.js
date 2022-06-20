
import React, { useState } from "react";

const expensiveFunction = (count) => {
    // artificial delay (expensive computation)
    for (let i = 0; i < 1000000000; i++) { }
    return count * 3;
};

export default function WithUseMemo() {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);

    const incrementCount = React.useCallback(() => setCount(count + 1), [count]);

    const myCount = React.useMemo(() => {
        return expensiveFunction(count);
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={incrementCount}>Increment counter</button>
            <h3>Input text: {input}</h3>
            <h3>Count x 3: {myCount}</h3>
            <hr />
            <ChildComponent count={count} onClick={incrementCount} />
        </div>
    );
}

const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
    console.log("child component is rendering");
    return (
        <div>
            <h2>This is a child component.</h2>
            <button onClick={onClick}>Increment</button>
            <h4>Count: {count}</h4>
        </div>
    );
});
