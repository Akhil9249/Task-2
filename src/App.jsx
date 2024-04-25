import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const onIncrement = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        }
        setShow(true);
    };

    const onDecrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
        setShow(false);
    };

    return (
        <>
            <Counter onIncrement={onIncrement} onDecrement={onDecrement} count={count} show={show} />
        </>
    );
}

export default App;
